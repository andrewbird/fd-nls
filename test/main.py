#!/usr/bin/python3

import re
import unittest

from difflib import unified_diff
from pathlib import Path
from shutil import copy

import codec_mazovia

PROJECTS = (
    "append",
    "assign",
    "blocek",
    "choice",
    "compute",
    "ctmouse",
    "diskcopy",
    "display",
    "doslfn",
    "dosshell",
    "dosutil",
    "edict",
    "edlin",
    "exe2bin",
    "fc",
    "fdhelper",
    "fdi",
    "fdimples",
    "fdisk",
    "fdi-x86",
    "fdnet",
    "fdnpkg",
    "fdpkg",
    "fdshell",
    "fdtui",
    "find",
    "flashrom",
    "format",
    "freecom",
    "gcdrom",
    "help-legacy",
    "htmlhelp",
    "kittenc",
    "label",
    "localize",
    "md5sum",
    "mem",
    "mirror",
    "mkeyb",
    "mode",
    "more",
    "move",
    "mysysinf",
    "nlsfunc",
    "packages",
    "password",
    "pause",
    "pdtree",
    "pgme",
    "pkgtools",
    "runtime",
    "share",
    "slicer",
    "sort",
    "stamp",
    "syslnx",
    "tee",
    "trch",
    "tree",
    "usbdos",
    "v8power",
    "vmsmount",
    "wget",
    "xcopy",
    "xdel",

    "blkdrop", # this set currently unhandled as they are not kitten
    "freedos",
    "imgedit",
    "keyb",
    "sayswho",
    "v8micro",
    "v8turbo",
)

NON_PROJECTS = (
    "danger",
    "fd-nls",
    "zzz-notes-and-misc-items",
    "test",
)

LANGUAGES = {
    "br": "CP850",  # Only CTMOUSE uses 'br' for Brazilian Portuguese
    "cz": "CP852",  # Czech language code is really 'cs' (ISO 639-1)
    "da": "CP850",
    "de": "CP850",
    "dk": "CP850",  # Actually we really should be using 'da' not 'dk'
    "eo": None,     # Esperanto??
    "es": "CP850",
    "eu": None,     # Basque maybe CP850?
    "fi": "CP850",
    "fr": "CP850",
    "hu": "CP852",
    "is": "CP850",  # Icelandic
    "it": "CP850",
    "ja": None,     # Unknown target encoding, doesn't it need DBCS support everywhere?
    "la": None,     # Latin??
    "lv": "CP775",
    "nl": "CP850",
    "no": "CP865",
    "pl": "mazovia", # our local implementation
    "pt": "CP850",
    "ptBR": "CP850", # name will be truncated in _output
    "rs": "CP852",
    "ru": "CP866",
    "si": "CP852",  # Slovene (but only fdnpkg uses it, others use 'sl')
    "sk": None,     # Unknown (but only used by htmlhelp)
    "sl": "CP852",
    "sv": "CP850",
    "tr": "CP857",
    "ua": "CP866",
}


OUTPUT = Path("_output")

HDR = """\
## This file is autogenerated, any updates will be lost. Please visit
## https://github.com/shidel/fd-nls to update the UTF-8 version of it.
##
"""

TOP = Path('.')


def create_test(name, test):
    def do_test(self):
        self._dotest(*test)

    docstring = '{0:<10} ({1:^11}) [{2:^4}]'.format(name, test[0], test[1].upper())
    setattr(do_test, '__doc__', docstring)
    return do_test


def validate_projects():
    for d in TOP.glob('*'):
        if (d.is_dir() and d.name not in NON_PROJECTS
                and not d.name.startswith(('_', '.'))):
            if d.name not in PROJECTS:
                raise ValueError("Warning '%s' not in PROJECTS" % d.name)


class Help(unittest.TestCase):

    @classmethod
    def get_tests(cls):
        tests = []
        for p in PROJECTS:
            hlp = Path(p) / 'help'

            for l in LANGUAGES.keys():
                if (hlp / p).with_suffix('.' + l).exists():
                    tests.append((p, l))
        return tests

    def _dotest(self, prg, lng):

        indir = TOP / prg / 'help'

        outdir = OUTPUT / prg / 'help'
        outdir.mkdir(parents=True, exist_ok=True)

        # Hack for Brazilian (.ptBR -> .ptb)
        tgt = outdir / (prg + "." + lng[0:4].lower())

        src_utf = indir / (prg + "." + lng + ".UTF-8")
        src_cpg = indir / (prg + "." + lng)

        # Ensure UTF-8 source is valid if it exists
        have_utf = False
        try:
            txt = src_utf.read_text(encoding="UTF-8")
            have_utf = True
        except FileNotFoundError:
            pass
        except UnicodeDecodeError as e:
            msg = "invalid character in UTF-8 ('%s')" % e
            raise self.failureException(msg) from None

        if have_utf:
            # Convert to output codepade
            try:
                hdr = HDR.replace('#', ';')
                tgt.write_text(hdr + txt, encoding=LANGUAGES[lng], newline='\r\n')
            except UnicodeEncodeError as e:
                msg = "invalid character for target codepage ('%s')" % e
                raise self.failureException(msg) from None

            # Compare encoded text file against our converted text
            try:
                txt_cpg = src_cpg.read_text(encoding=LANGUAGES[lng])
                if txt_cpg != txt:
                    txt_list = txt.split('\n')
                    cpg_list = txt_cpg.split('\n')
                    diff = unified_diff(txt_list, cpg_list, fromfile=str(src_utf), tofile=str(src_cpg), lineterm='\n')
                    msg = "UTF-8 and encoded text differ\n%s" % '\n'.join(diff)
                    raise self.failureException(msg) from None
            except FileNotFoundError:
                pass

        else:
            # Very little we can check on encoded text, just copy it to
            # the output directory.
            try:
                copy(src_cpg, outdir)
            except FileNotFoundError:
                self.skipTest("'%s' not found" % lng)


class Kitten(unittest.TestCase):

    ids = []

    @classmethod
    def get_tests(cls):
        tests = []
        for p in PROJECTS:
            nls = Path(p) / 'nls'

            try:
                found = False
                with (nls / p).with_suffix('.en').open("r") as f:
                    # test for proper kittenness or don't add it
                    r1 = re.compile(r'^(\d+)\.(\d+):')
                    for line in f.readlines():
                        if r1.search(line):
                            found = True
                            cls.ids.append((2,3))
                            break

                if found:
                    for l in LANGUAGES.keys():
                        if (nls / p).with_suffix('.' + l).exists():
                            tests.append((p, l))

            except FileNotFoundError:
                pass

        return tests

    def _dotest(self, prg, lng):

        indir = TOP / prg / 'nls'

        outdir = OUTPUT / prg / 'nls'
        outdir.mkdir(parents=True, exist_ok=True)

        print(self.ids)

        # Hack for Brazilian (.ptBR -> .ptb)
        tgt = outdir / (prg + "." + lng[0:4].lower())

        src_utf = indir / (prg + "." + lng + ".UTF-8")
        src_cpg = indir / (prg + "." + lng)

        # Ensure UTF-8 source is valid if it exists
        have_utf = False
        try:
            txt = src_utf.read_text(encoding="UTF-8")
            have_utf = True
        except FileNotFoundError:
            pass
        except UnicodeDecodeError as e:
            msg = "invalid character in UTF-8 ('%s')" % e
            raise self.failureException(msg) from None

        if have_utf:
            # Convert to output codepade
            try:
                tgt.write_text(HDR + txt, encoding=LANGUAGES[lng], newline='\r\n')
            except UnicodeEncodeError as e:
                msg = "invalid character for target codepage ('%s')" % e
                raise self.failureException(msg) from None

            # Compare encoded text file against our converted text
            try:
                txt_cpg = src_cpg.read_text(encoding=LANGUAGES[lng])
                if txt_cpg != txt:
                    txt_list = txt.split('\n')
                    cpg_list = txt_cpg.split('\n')
                    diff = unified_diff(txt_list, cpg_list, fromfile=str(src_utf), tofile=str(src_cpg), lineterm='\n')
                    msg = "UTF-8 and encoded text differ\n%s" % '\n'.join(diff)
                    raise self.failureException(msg) from None
            except FileNotFoundError:
                pass

        else:
            # Very little we can check on encoded text, just copy it to
            # the output directory.
            try:
                copy(src_cpg, outdir)
            except FileNotFoundError:
                self.skipTest("'%s' not found" % lng)


class MyTestResult(unittest.TextTestResult):

    def getDescription(self, test):
        return '%-80s' % test.shortDescription()


class MyTestRunner(unittest.TextTestRunner):
    resultclass = MyTestResult


if __name__ == '__main__':
    validate_projects()

    # Insert each test into the respective testcase
    for test in Help.get_tests():
        setattr(Help, 'test_help_%s_%s' % test, create_test('Help', test))
    for test in Kitten.get_tests():
        setattr(Kitten, 'test_kitten_%s_%s' % test, create_test('Kitten', test))

    unittest.main(testRunner=MyTestRunner, verbosity=2)
