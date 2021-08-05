# $Id: SPANISH.LNG,v 1.00 2003/10/12  (based on DEFAULT 1.14)
#
# FreeCOM national customization file
#
#       Language:    8bit CP850, CP858 Spanish (Spain)
#       Author:      FreeCOM maintainer
#       Translation: Aitor SANTAMARIA MERINO
# 
# This file is used to generate all the messages that command.com
# outputs.  This file is the input to the fixstrs program, and it
# outputs strings.h and strings.dat.  The .DAT file is appended to
# the command.exe file, and then renamed to command.com.  The .H
# file contains all the info for the program to retreive the
# messages.
#
# The format of this file is simple.  Blank lines and lines starting
# with "#" are ignored.
# Each message starts with a label name that will be used to refer to
# the message in the program.  A label starts with a colon ":".
# A label has a version ID attached to it delimited by a hash sign, e.g.:
#	:TEXT_LABEL#1
# This version is incremented each time the contents of the string has
# undergo a larger change. The same language definition may contain the
# same label up to one time, regardless of the version. FIXSTRS compares
# both the label and the version ID and both must match.
# A missing version is assumed as "#0".
#
# All lines after the label are the message until a line with a
# single "." or "," in the first column.  The difference is the
# period (".") signifies that there will be a final carrage return when
# the message is displayed, but a comma does not.
#
# The body may contain backslash escape sequences as known from C; there
# are the usual \# (where '#' is a lowercase letter except 'x' or one of
# "[]{}?"), \\ (to embed a backslash itself)
# \x?? (where '??' are up to two hexadecimal digits), \0 (to embed a NUL
# character), \, and \. (to specify a period or comma in the first column
# of a line) and the single \ at the end of the line to suppress to append
# a newline character. Note: There is NO octal sequence except the short \0!
# There is a known bug (or feature): [ignore the very first hash mark]
#:TEXT_LABEL#2
#
#\
#,
# Although the first data line appends the newline, the second does not,
# though the comma removes the newline from the first line.

# Defining prompts
# Some prompts may cause an user interaction. Those ones should be in sync
# with the issued text. To define how to interprete a pressed key, they
# are mapped into metakeys like that: [ignore first hash sign]

## Return value: a -> Yes; else -> No
#:PROMPT_YES_NO#1
#YyNn\n\r{CBREAK}
#aabb b b       b
# (Yes/No) ? \
#.

# All strings, which label start with "PROMPT_", are parsed as prompts.
# The first two lines of the body are special; the first one enumerates all
# valid keys, the second one assigns arbitary metakeys. Metakeys may
# range from 'a' through 'z'; spaces are ignored; everything else cause
# an error. The comment preceeding the prompt definition associates the
# metakeys with their meaning.
# The remaining lines of the body contain the text to be displayed.
#
# Above example defines a native Yes/No prompt with a space behind the question
# mark and no appended newline.
# The metakey 'a' means "User answered with 'Yes'" and 'b' means no.
# The keys 'Y' and 'y' are mapped to metakey 'a' (aka Yes) and the keys
# 'N', 'n', Enter and ^Break are mapped to metakey 'b' (aka No).
# The spaces between the 'b's in the second line had been inserted to
# align them with the corresponding keys of the first line, hence in order
# to enhance readibility of the association between the pressed keys and their
# mapping into a metakey.
#
# The first line (pressed keys) has to enumerate the ASCII value as returned
# by DOS or BIOS (INT-10); special keys normally expressed with ASCII code zero,
# but a non-zero scancode are NOT supported; this limit includes for instance
# the function keys F1 through F12 and the cursor keys and it is not possible
# to differ between the number pad and normal keys.
# The keys may be enumerated by their ASCII character, by a backslash sequence,
# or a symbolic name enclosed in curly brackets (see FIXSTRS.C "symkeys[]"
# array about the supported symnames).


#
#  These are error messages
#
## Issued if a single character option is unknown
:TEXT_ERROR_INVALID_SWITCH
Modificador no v�lido. - /%c
.

## Issued if a longname option is unknown
:TEXT_ERROR_INVALID_LSWITCH
Modificador no v�lido. - /%s
.

## Issued if the context, the type of argument etc. is invalid
:TEXT_ERROR_ILLFORMED_OPTION
Opci�n no v�lida: '%s'
.

:TEXT_ERROR_OPT_ARG
La opci�n '%s' no puede tener un par�metro
.

:TEXT_ERROR_OPT_NOARG
La opci�n '%s' requiere un par�metro
.

:TEXT_INVALID_NUMBER
N�mero especificado en '%s' no v�lido 
.

:TEXT_ERROR_CLOSE_QUOTE
Comillas sin cerrar: %c
.

:TEXT_ERROR_TEMPFILE
No se pudo crear archivo temporal
.

:TEXT_ERROR_TOO_MANY_PARAMETERS_STR
Demasiados par�metros. - '%s'
.

:TEXT_ERROR_TOO_MANY_PARAMETERS
Demasiados par�metros.
.

:TEXT_ERROR_INVALID_PARAMETER
Par�metro no v�lido. - '%s'
.

:TEXT_ERROR_PATH_NOT_FOUND
Ruta no encontrada.
.

:TEXT_ERROR_FILE_NOT_FOUND
Archivo no encontrado.
.

:TEXT_ERROR_SFILE_NOT_FOUND
Archivo no encontrado. - '%s'
.

:TEXT_ERROR_REQ_PARAM_MISSING
Falta par�metro obligatorio.
.

:TEXT_ERROR_INVALID_DRIVE
Unidad %c: no v�lida.
.

:TEXT_ERROR_BADCOMMAND#2
Orden o nombre de archivo no reconocido - "%s".
.

:TEXT_ERROR_OUT_OF_MEMORY
No hay memoria suficiente.
.

:TEXT_ERROR_OUT_OF_DOS_MEMORY#1
Error en petici�n de la memoria DOS requerida.
.

:TEXT_ERROR_CANNOTPIPE
No se puede redireccionar (no se puede abrir archivo temporal)
.

:TEXT_ERROR_LONG_LINE_BATCHFILE
La l�nea #%ld en el archivo por lotes '%s' es demasiado larga.
.

:TEXT_ERROR_BFILE_VANISHED
Archivo por lotes '%s' no encontrado.
.

:TEXT_ERROR_BFILE_LABEL
El archivo por lotes '%s' no contiene la etiqueta '%s'.
.

:TEXT_ERROR_DIRFCT_FAILED#1
%s fracas� para '%s'.
.
# The next three errors must remain in this order!
:TEXT_ERROR_SET_ENV_VAR
No se puede establecer la variable de entorno '%s'.
El espacio del entorno puede estar lleno.
.
:TEXT_ERROR_ENV_VAR_NOT_FOUND
Variable de entorno '%s' no encontrada.
.
:TEXT_ERROR_NO_ENVIRONMENT
No hay espacio de entorno, quiz� por falta de memoria. Use la opci�n /E
.

# The next three errors must remain in this order!
:TEXT_ERROR_SET_ALIAS#1
No se puede establecer el alias '%s'. Quiz� no hay espacio para alias.
.
:TEXT_ERROR_ALIAS_NOT_FOUND#1
Alias '%s' no encontrado.
.
:TEXT_ERROR_NO_ALIAS_SEGMENT#1
No hay espacio para alias. Posiblemente falte memoria.
.

:TEXT_ERROR_SYNTAX_STR
Error de sintaxis. - '%s'
.

:TEXT_ERROR_SYNTAX
Error de sintaxis.
.

:TEXT_ERROR_FILENAME_TOO_LONG
Nombre de archivo demasiado largo. - '%s'
.

:TEXT_ERROR_SELFCOPY
No se puede copiar '%s' en s� mismo
.

:TEXT_ERROR_COMMAND_TOO_LONG
La l�nea de �rdenes es demasiado larga tras la expansi�n de los alias
.

:TEXT_ERROR_LINE_TOO_LONG
L�nea demasiado larga. No se puede ejecutar la orden.
.

:TEXT_ERROR_HISTORY_SIZE#1
Tama�o no v�lido del historial '%s'.
.

:TEXT_HISTORY_EMPTY#1
El historial de la l�nea de �rdenes est� vac�o.
.


:TEXT_ERROR_BAD_MCB_CHAIN
La cadena MCB est� corrompida, o el sistema no es compatible con MS-DOS.
.

:TEXT_ERROR_UNDEFINED_ERROR
Error indefinido %d.
.

:TEXT_ERROR_REGION_WARNING
Regi�n de memoria no v�lida %d - ser� ignorada.
.

:TEXT_ERROR_ON_OR_OFF
Se debe especificar ON u OFF.
.

:TEXT_ERROR_BAD_VARIABLE
Especificaci�n de variable no v�lida.
.

:TEXT_ERROR_IN_MISSING#1
FOR: se requiere IN.
.

:TEXT_ERROR_MISSING_PARENTHESES#1
Falta uno o ambos par�ntesis.
.

:TEXT_ERROR_DO_MISSING#1
FOR: se requiere DO.
.

:TEXT_ERROR_NO_COMMAND_AFTER_DO#1
FOR: No hay instrucci�n despu�s del DO.
.

:TEXT_ERROR_REDIRECT_FROM_FILE
No se puede redirigir la entrada desde el archivo '%s'.
.

:TEXT_ERROR_REDIRECT_TO_FILE
No se puede redirigir la salida al archivo '%s'.
.

:TEXT_ERROR_EMPTY_REDIRECTION#1
Redirecci�n nula.
.

:TEXT_ERROR_INVALID_DATE
Fecha no v�lida.
.

:TEXT_ERROR_INVALID_TIME
Hora no v�lida.
.

:TEXT_ERROR_NO_GOTO_LABEL
No se ha especificado etiqueta para GOTO.
.

:TEXT_CTTY_NOTIMPLEMENTED
La orden CTTY se ha exclu�do en esta versi�n de COMMAND.COM.
.

:TEXT_ERROR_NORW_DEVICE
Dispositivo no v�lido o no de lectura/escritura: '%s'.
.

:TEXT_ERROR_CTTY_DUP
No se pudo cambiar los descriptores de archivo a TTY '%s'.
.

:TEXT_ERROR_L_NOTIMPLEMENTED
/L a�n no est� implementado.
.

:TEXT_ERROR_U_NOTIMPLEMENTED
/U a�n no est� implementado.
.

:TEXT_ERROR_WRITING_DEST
Error al escribir al archivo de destino.
.

:TEXT_ERROR_CANNOT_OPEN_SOURCE
No se puede abrir archivo origen. - '%s'
.

:TEXT_ERROR_OPEN_FILE
No se puede abrir archivo origen '%s'
.

:TEXT_ERROR_READ_FILE
No se puede leer desde el archivo '%s'
.

:TEXT_ERROR_WRITE_FILE
No se puede escribir al archivo '%s'
.

:TEXT_ERROR_LEADING_PLUS
El car�cter de concatenaci�n '+' no puede preceder el argumento.
.

:TEXT_ERROR_TRAILING_PLUS
El car�cter de concatenaci�n '+' no puede suceder el argumento.
.

:TEXT_ERROR_NOTHING_TO_DO
No hay nada que hacer.
.

:TEXT_ERROR_COPY
COPY fracas�
.

:TEXT_ERROR_IF_EXIST_NO_FILENAME#1
IF EXIST: falta nombre de archivo
.
:TEXT_ERROR_IF_ERRORLEVEL_NO_NUMBER#1
IF ERRORLEVEL: falta n�mero
.
:TEXT_ERROR_IF_ERRORLEVEL_INVALID_NUMBER#1
IF ERRORLEVEL: n�mero no v�lido
.
:TEXT_ERROR_IF_MISSING_COMMAND#1
IF: se requiere una instrucci�n
.

:TEXT_NOT_IMPLEMENTED_YET
A�n no est� implementado.
.

:TEXT_FAILED_LOAD_STRINGS
No se pueden cargar los mensajes en memoria.
.

:TEXT_MSG_NOTIMPLEMENTED
La opci�n /MSG ha sido exclu�da de esta versi�n de COMMAND.COM.
.

:TEXT_MSG_ITEMS_DISPLAYED#1
Se visualizaron %u objetos.
.

:TEXT_CORRUPT_COMMAND_LINE
L�nea de �rdenes no v�lida. Error interno relacionado con el COMMAND.COM
en ejecuci�n. Por favor, informar de este error.
.

:TEXT_QUOTED_C_OR_K#1
Las opciones /C y /K no pueden ser entrecomilladas y se ignorar�n.
.

:TEXT_INIT_FULLY_QUALIFIED#1
La ruta hasta COMMAND.COM debe ser completa.
Debe incluir el n�mero de unidad y comenzar por barra inclinada.
Por ejemplo: C:\\FDOS

COMMAND.COM asumir� esta nueva ruta:
%s
.

:TEXT_ERROR_RESTORE_SESSION
La informaci�n sobre la sesi�n no ha podido ser restaurada, y cualquier
modificaci�n local se ha perdido. Consultar los mensajes de error indicados
arriba para entender el motivo de este problema.
.

:TEXT_ERROR_SAVE_SESSION
La informaci�n actual no se preservar� durante la llamada del programa.
Consultar los mensajes de error indicados arriba para entender el motivo
de este problema.
.

:TEXT_ERROR_CWD_FAILED#1%
La unidad %c: no responde.
.

:TEXT_ERROR_KSWAP_ALIAS_SIZE
Fallo en el intercambio: los alias requieren demasiada memoria.
.


:TEXT_ERROR_KSWAP_ALLOCMEM
Fallo en el intercambio: no se puede solicitar memoria lejana.
.

:TEXT_ERROR_ALIAS_OUT_OF_MEM#1
No hay espacio de alias suficiente.
.

:TEXT_ERROR_ALIAS_NO_SUCH#1
El alias '%s' no existe
.

:TEXT_ERROR_ALIAS_INSERT#1
No se pudo registrar el alias.
.

:TEXT_ALIAS_INVALID_NAME#1
Nombre de alias '%s' no v�lido.
.

:TEXT_ERROR_LOADING_CONTEXT#1
No se pudo cargar el m�dulo del contexto o el gestor de error cr�tico.
.

:TEXT_ERROR_CONTEXT_OUT_OF_MEMORY#1
No hay memoria para el contexto.
Si este fallo persiste, puede intentar aumentar los b�feres internos
(historial, pila de directorios, etc.)
.

:TEXT_ERROR_CONTEXT_LENGTH#1
El tama�o del contexto excede en %lu el l�mite m�ximo.
Se asumir� un tama�o de %u bytes.
.

:TEXT_ERROR_CONTEXT_ADD_STATUS#1
No se pudo registrar informaci�n sobre estado en el contexto. Este error
podr�a indicar corrupci�n de memoria o tama�o m�nimo de contexto no v�lido.
Por favor, informar al mantenedor de FreeCOM en:
freecom@freedos.org
.

:TEXT_ERROR_CONTEXT_AFTER_SWAP#1
Contexto no hallado tras el intercambio. Se crear� uno nuevo, aunque
las alias, etc. locales se han perdido.
.

:TEXT_ERROR_PERMISSION_DENIED#1%
%s: Permiso denegado
.

:TEXT_ERROR_NO_SUCH_FILE#1%
%s: No existe tal archivo o diretorio
.

:TEXT_ERROR_UNKNOWN_ERROR#1%
%s: Error desconocido
.

#
# Informational messages
#

:TEXT_MSG_PAUSE#1
Presione cualquier tecla para continuar . . .\
.

:TEXT_MSG_HISTORY_SIZE
El tama�o del historial es %d bytes.
.

:TEXT_MSG_DOSKEY
Las caracter�sticas de DOSKEY est�n ya presentes en el int�rprete.
.

:TEXT_MSG_ECHO_STATE
El estado de ECHO es %s
.

:TEXT_MSG_VERIFY_STATE
El estado de VERIFY es %s
.

:TEXT_MSG_FDDEBUG_STATE
La salida de DEBUG es %s.
.
:TEXT_MSG_FDDEBUG_TARGET
La salida de DEBUG se imprimir� a '%s'.
.

:TEXT_MSG_BREAK_STATE
El estado de BREAK es %s
.

:TEXT_MSG_LFNFOR_STATE#0%
LFNFOR es %s
.

:TEXT_MSG_LFNFOR_COMPLETE_STATE#0%
Autocompletar con LFN (nombres largos de archivo) es %s
.
:TEXT_MSG_CURRENT_DATE
La fecha actual es %s
.

## The three DATE prompts MUST be in this order!
:TEXT_MSG_ENTER_DATE_AMERICAN#1
Introduzca la nueva fecha (mm%sdd%s[ss]aa): \
.
:TEXT_MSG_ENTER_DATE_EUROPE#1
Introduzca la nueva fecha (dd%smm%s[ss]aa): \
.
:TEXT_MSG_ENTER_DATE_JAPANESE#1
Introduzca la nueva fecha ([ss]aa%smm%sdd): \
.

:TEXT_MSG_CURRENT_TIME
La hora actual es %s
.

:TEXT_STRING_PM#1
 pm\
.
:TEXT_STRING_AM#1
 am\
.

:TEXT_MSG_ENTER_TIME#1
Introduzca la nueva hora: \
.

# src-file <operation> target-file
:TEXT_MSG_COPYING
%s %s %s
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Used by Delete all (Y/N) --> let ENTER default to NO
# Return value: a -> Yes; else -> No
:PROMPT_DELETE_ALL#1
SsNn{CR}{LF}{CBREAK}
aabb   b   b       b
Todos los archivos en '%s' ser�n eliminados
�Desea continuar (S/N)? \
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Return value: a -> Yes; else -> No
:PROMPT_YES_NO#1
SsNn{LF}{CR}{CBREAK}{ESC}
aabb   a   a       b    b
 [S�=ENTER, No=ESC] ? \
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Attention: This prompt is issued via BIOS; any newline MUST be prefixed
#	by \r!
# Return value: a -> Yes; b -> No; c -> All; else -> Undefined
:PROMPT_CANCEL_BATCH#1
SsNnTtQq{LF}{CR}{CBREAK}{ESC}
aabbcccc   a   a       c    b
Se presion� Control-Break.\r
�Desea terminar el proceso por lotes '%s' (S�/No/Todo) ? \
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Return value: a -> Yes; b -> No; c -> All; d -> Quit
:PROMPT_OVERWRITE_FILE#1
SsNnTtCc{BREAK}{ENTER}{ESC}
aabbccdd      d      a    b
�Desea sobreescribir '%s' (S�/No/Todo/Cancelar) ? \
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Return value: a -> Yes; b -> No; c -> All; d -> Quit
:PROMPT_APPEND_FILE#1%
SsNnTtCc{BREAK}{ENTER}{ESC}
aabbccdd      d      a    b
�A�adir a '%s' (S�/No/Todo/Cancelar) ? \
.

# This prompt MUST include the pseudo key CBREAK!
# Note: This prompt ignores DOS NLS intentionally in order to
# keep interactive prompt & user-interaction in sync.
# Return value: a -> Yes; b -> No; c -> All; d -> Quit
:PROMPT_DELETE_FILE#1
SsNnTtCc{BREAK}{ENTER}{ESC}
aabbccdd      d      a    b
�Desea eliminar '%s' (S�/No/Todo/Cancelar) ? \
.

:TEXT_UNKNOWN_FILENAME#1
<<desconocido>>\
.

:TEXT_DIRSTACK_EMPTY
La pila de directorios est� vac�a.
.

## Strings to construct the DIR output
:TEXT_DIR_HDR_VOLUME#1
 El volumen de la unidad %c \
.
:TEXT_DIR_HDR_VOLUME_STRING
es %s
.
:TEXT_DIR_HDR_VOLUME_NONE
no tiene etiqueta
.
:TEXT_DIR_HDR_SERIAL_NUMBER
 El n�mero de serie del volumen es %04X-%04X
.
:TEXT_DIR_FTR_FILES#1
%10s archivo(s)\
.
:TEXT_DIR_FTR_BYTES
   %12s bytes
.
:TEXT_DIR_FTR_TOTAL_NUMBER
N�mero total de archivos listados:
.
:TEXT_DIR_FTR_DIRS#1
%10s directorio(s)\
.
:TEXT_DIR_FTR_BYTES_FREE
 %15s bytes libres
.
:TEXT_DIR_DIRECTORY
Directorio de %s
.
:TEXT_DIR_DIRECTORY_WITH_SPACE
 Directorio de %s
.
:TEXT_DIR_LINE_FILENAME_WIDE#1
%-15s\
.
:TEXT_DIR_LINE_FILENAME_BARE#1%
%s
.
:TEXT_DIR_LINE_FILENAME_SINGLE#1
%-13s\
.
:TEXT_DIR_LINE_FILENAME#1
%-8s %-3s \
.
:TEXT_DIR_LINE_SIZE_DIR#1
        <DIR> \
.
:TEXT_DIR_LINE_SIZE#1
   %10s \
.

:TEXT_FILE_COMPLATION_DISPLAY#1
%-14s\
.

:TEXT_MSG_PATH
PATH=%s
.
:TEXT_MSG_PATH_NONE#1
No se ha definido una ruta de b�squeda.
.

## The following names MUST be in this order!
:TEXT_WEEKDAY_SHORT_NAME_SUNDAY#1
Dom\
.
:TEXT_WEEKDAY_SHORT_NAME_MONDAY#1
Lun\
.
:TEXT_WEEKDAY_SHORT_NAME_TUESDAY#1
Mar\
.
:TEXT_WEEKDAY_SHORT_NAME_WEDNSDAY#1
Mi�\
.
:TEXT_WEEKDAY_SHORT_NAME_THURSDAY#1
Jue\
.
:TEXT_WEEKDAY_SHORT_NAME_FRIDAY#1
Vie\
.
:TEXT_WEEKDAY_SHORT_NAME_SATURDAY#1
S�b\
.

# Displayed by DEL how many files were removed.
# These three strings must be kept in order!
:TEXT_MSG_DEL_CNT_FILES#1
no se han eliminado archivos.
.
:TEXT_MSG_DEL_CNT_FILES_1#1
un archivo eliminado.
.
:TEXT_MSG_DEL_CNT_FILES_2#1
%u archivos eliminados.
.

:TEXT_MSG_SHOWCMD_INTERNAL_COMMANDS
�rdenes internas disponibles:
.

:TEXT_MSG_SHOWCMD_FEATURES

Caracter�sticas disponibles:
.

## Displayed within "?" <-> showcmd() to enumerate the included features
## Note the trailing single space
:TEXT_SHOWCMD_FEATURE_ALIASES#1
[alias] \
.
:TEXT_SHOWCMD_FEATURE_ENHANCED_INPUT#1
[edici�n de �rdenes avanzada] \
.
:TEXT_SHOWCMD_FEATURE_HISTORY#1
[historial] \
.
:TEXT_SHOWCMD_FEATURE_FILENAME_COMPLETION#1
[autocompletar nombres de archivo] \
.
:TEXT_SHOWCMD_FEATURE_SWAP_EXEC#1
[intercambio] \
.
:TEXT_SHOWCMD_FEATURE_CALL_LOGGING#1
[start logging] \
.
:TEXT_SHOWCMD_FEATURE_LAST_DIR#1
[�ltimo directorio utilizado] \
.
:TEXT_SHOWCMD_FEATURE_LONG_FILENAMES#1
[nombres largos de archivo] \
.
:TEXT_SHOWCMD_FEATURE_KERNEL_SWAP_SHELL#1
[kernel swap] \
.
:TEXT_SHOWCMD_FEATURE_XMS_SWAP#1
[intercambio con XMS] \
.
:TEXT_SHOWCMD_DEFAULT_TO_SWAP#1
[intercambio por defecto] \
.
:TEXT_SHOWCMD_FEATURE_INSTALLABLE_COMMANDS#1
[�rdenes instalables] \
.
:TEXT_SHOWCMD_FEATURE_NLS#1
[DOS NLS] \
.
:TEXT_SHOWCMD_FEATURE_DIRSTACK#1
[pila de directorios (PUSHD)] \
.
:TEXT_SHOWCMD_FEATURE_DEBUG#1
[depuraci�n de FreeCOM] \
.

:TEXT_MSG_INIT_BYPASS_AUTOEXEC#1

Pulse F8 para confirmaci�n individual, o F5 para omitir %s... \
.
:TEXT_MSG_INIT_BYPASSING_AUTOEXEC
Omitiendo '%s'.
.

:TEXT_MSG_VER_DOS_VERSION
Versi�n del DOS %u.%u
.

:TEXT_MSG_VER_EARLY_FREEDOS
N�cleo de FreeDOS (build 1933 o anterior)
.

:TEXT_MSG_VER_LATER_FREEDOS
N�cleo de FreeDOS versi�n %d.%d.%d
.


:TEXT_MSG_VER_WARRANTY
Copyright (C) 1994-2001 Tim Norman y otros.


Este programa se distribuye con la esperanza de que sea �til, pero
SIN NINGUNA GARANT�A, incluso sin la garant�a MERCANTIL impl�cita
o sin garantizar la CONVENIENCIA PARA UN PROP�SITO PARTICULAR.
V�ase la Licencia P�blica General de GNU para m�s detalles.

Env�e informes de errores a freedos-freecom@lists.sourceforge.net.
Las actualizaciones estar�n disponibles en http://freedos.sourceforge.net/freecom
.

:TEXT_MSG_VER_REDISTRIBUTION
Copyright (C) 1994-2001 Tim Norman y otros.

Este programa es software libre. Puede redistribuirlo y/o modificarlo
bajo los t�rminos de la Licencia P�blica General de GNU seg�n es publicada
por la Free Software Foundation, bien la versi�n 2 de dicha Licencia o bien
(seg�n su elecci�n) cualquier versi�n posterior.

Env�e informes de errores a freedos-freecom@lists.sourceforge.net.
Las actualizaciones estar�n disponibles en http://freedos.sourceforge.net/freecom
.

:TEXT_MSG_VER_DEVELOPERS

El int�rprete de �rdenes de FreeDOS ha sido desarrollado por varios
programadores, refi�rase al archivo adjunto HISTORY.TXT para m�s detalles.

Actualmente, est� mantenido por Steffen Kaiser mailto:freecom@freedos.org

Traducci�n al espa�ol por Aitor Santamar�a Merino mailto:nls@freedos.org

Env�e informes de errores a freedos-freecom@lists.sourceforge.net.
Las actualizaciones estar�n disponibles en http://freedos.sourceforge.net/freecom
.


# Displayed when the shell is to terminate, but has been started
# with /P option <-> shell cannot exist;
# This is a crash situation, because FreeCOM won't reach this situation
# normally otherwise
# All newlines must be prefixed by \r's !
:TEXT_MSG_REBOOT_NOW#1
\r\n\r
El int�rprete va a ser abortado, aunque esto no\r
est� permitido (habitualmente por el modificador "/P").\r
Deber� reiniciar su equipo, o si est� ejecut�ndose en\r
un entorno multitarea, terminar este proceso/tarea manualmente.\r
.

# Displayed during the initialization phase of FreeCOM, if its own
# filename could not be determined.
:TEXT_MSG_FREECOM_NOT_FOUND#1
El ejecutable de FreeCOM no ha sido encontrado.
Deber� especificar la ruta completa hacia COMMAND.COM
como primer argumento para COMMAND, por ejemplo:
C:\\FDOS
.


:TEXT_MEMORY_ENVIRONMENT#1
Segmento de entorno    : max %5u bytes; libre %5u bytes
.
:TEXT_MEMORY_CONTEXT#1
Segmento de contexto   : max %5u bytes; libre %5u bytes
.	
:TEXT_MEMORY_HEAP#1
Mont�culo (heap)       : free %5lu bytes
.
:TEXT_MEMORY_CTXT_ALIAS#1
\tAlias                : l�mite %5u bytes, actual %5u bytes, %5u objetos
.
:TEXT_MEMORY_CTXT_HISTORY#1
\tHistorial            : l�mite %5u bytes, actual %5u bytes, %5u objetos
.
:TEXT_MEMORY_CTXT_DIRSTACK#1
\tPila de directorios  : l�mite %5u bytes, actual %5u bytes, %5u objetos
.
:TEXT_MEMORY_CTXT_LASTDIR#1
\tCach� para �ltimo directorio   : usado  %5u bytes, %5u objetos
.
:TEXT_MEMORY_CTXT_BATCH#1
\tAnidamiento de proc. por lotes : usado  %5u bytes, %5u objetos
.
:TEXT_MEMORY_CTXT_SWAPINFO#1
\tInformaci�n de intercambio     : usado  %5u bytes, %5u objetos
.


## CHCP
:TEXT_ERROR_GET_CODEPAGE#1
Error al obtener el c�digo de p�gina actual del sistema.
.
:TEXT_ERROR_SET_CODEPAGE#1
Error al cambiar el c�digo de p�gina actual.
.
:TEXT_DISPLAY_CODEPAGE#1
El c�digo de p�gina actual es %u.
El c�digo de p�gina del sistema (apropiado) es: %u.
.

#
# Command help text
#

:TEXT_CMDHELP_ALIAS
Visualiza, establece o elimina alias.

ALIAS [variable[=][cadena]]

        variable  Nombre del alias.
        cadena    Secuencia de caracteres a asignar al alias.


Introduzca ALIAS sin par�metros para visualizar los alias activos.
.

:TEXT_CMDHELP_BEEP
Produce una se�al ac�stica.
.

:TEXT_CMDHELP_BREAK
Activa o desactiva la comprobaci�n extendida de Control+C.

BREAK [ON | OFF]

Introduzca BREAK sin par�metros para ver el estado actual de BREAK.
.

:TEXT_CMDHELP_CALL#1
Invoca a un archivo de proceso por lotes desde otro.

CALL [/S | /N] [unidad:][ruta]nombre-archivo [par�metros]

  par�metros         Par�metros cualesquiera requeridos por el archivo de
                     proceso por lotes.
/S y /N  fuerza e inhibe el intercambio de FreeCOM.
.

:TEXT_CMDHELP_CD
Muestra o cambia el directorio activo.

CHDIR [drive:][path]
CHDIR[..]
CD [drive:][path]
CD[..]
CD -

  ..   Especifica al directorio padre como directorio a cambiar.
  -    Con la caracter�stica "�ltimo directorio" activada, cambia al
       �ltimo directorio.

Introduzca CD unidad: para visualizar el directorio activo de la unidad
especificada.
Introduzca CD sin par�metros para visualizar el directorio activo de la
unidad activa.
V�ase tambi�n: CDD
.

:TEXT_CMDHELP_CDD
Muestra o cambia el nombre de la unidad y directorio activos.

CDD [unidad:][ruta]
CDD[..]

  ..   Especifica al directorio padre como directorio a cambiar.
  -    Con la caracter�stica "�ltimo directorio" activada, cambia al
       �ltimo directorio.

Si se introduce unidad:, se modifica la unidad activa; �sta es la �nica
diferencia con "CHDIR".
Introduzca CDD sin par�metros para visualizar el directorio activo de la
unidad activa.
.

:TEXT_CMDHELP_CHCP
Muestra o cambia el c�digo de p�gina del sistema.

CHCP [nnn]

  nnn   N�mero del c�digo de p�gina.

Introduzca CHCP sin par�metros para visualizar el c�digo de p�gina del sistema.
.

:TEXT_CMDHELP_CLS
Borra la pantalla.

CLS
.

:TEXT_CMDHELP_COMMAND
Inicia una nueva copia del int�rprete de �rdenes de FreeDOS.

COMMAND [[unidad:]ruta] [disp] [/E:nnnnn] [/L:nnnn] [/U:nnn] [/P] [/MSG]
                       [/LOW] [/Y [/[C|K] orden]]
  [unidad:]ruta   Especifica el directorio que contiene a COMMAND.COM.
  disp            Indica el dispositivo a usar para entrada/salida de �rdenes.
  /E:nnnnn        Establece el tama�o inicial del entorno a nnnnn bytes.
                  (nnnnn debe estar comprendido entre 256 y 32.768).
  /L:nnnn         Especifica el tama�o interno de los b�fers (requiere /P).
                  (nnnn debe estar comprendido entre 128 y 1.024).
  /U:nnn          Especifica el tama�o del b�fer de entrada (requiere /P).
                  (nnn debe estar comprendido entre 128 y 255).
  /P              Hace el nuevo int�rprete permanente (no se puede salir).
  /MSG            Almacena los mensajes de error en memoria (requiere /P).
  /LOW            Fuerza al int�rprete a mantener sus datos residentes en
                  el �rea de memoria baja.
  /Y              Ejecuta el programa BATCH especificado por /C o /K.
  /C orden        Ejecuta la orden especificada y sale.
  /K command      Ejecuta la orden especificada y se mantiene en ejecuci�n.
.

:TEXT_CMDHELP_COPY
Copia uno o m�s archivos a otro lugar.

COPY [/A | /B] origen [/A | /B] [+ origen [/A | /B] [+ ...]] [destino
  [/A | /B]] [/V] [/Y | /-Y]

  origen       Especifica los archivos que ser�n copiados
  /A           Indica que se trata de un archivo de texto ASCII.
  /B           Indica que se trata de un archivo binario.
  destino      Especifica el nuevo directorio y/o nombre para los archivos.
  /V           Verifica que los archivos han sido copiados correctamente.
  /Y           Elimina la confirmaci�n de sobreescritura de archivos ya
               existentes en destino.
  /-Y          Solicita obligatoriamente confirmaci�n de sobreescritura de
               archivos ya existentes en destino.

La opci�n /Y puede estar presente en la variable de entorno COPYCMD, y
puede ser ignorada especificando /-Y en la l�nea de �rdenes

Para concatenar archivos, especifique un nombre de archivo destino, pero
m�ltiples archivos en origen (usando comodines o bien arch1+arch2+arch3).
.

:TEXT_CMDHELP_CTTY
Cambia el dispositivo terminal usado para controlar el sistema.

CTTY dispositivo

  dispositivo     Dispositivo terminal que desea usar, por ejemplo COM1.
.

:TEXT_CMDHELP_DATE#1
Muestra o establece la fecha.

DATE [/D] [fecha]

Introduzca DATE sin par�metros para visualizar la fecha actual y la petici�n
de una nueva fecha. Presione ENTER para mantener la misma fecha.

/D   impide que DATE act�e de forma interactiva.
.

:TEXT_CMDHELP_DEL#2
Elimina uno o m�s archivos.

DEL [unidad:][ruta]archivo [/P] [/V]
ERASE [unidad:][ruta]archivo [/P] [/V]

  [unidad:][ruta]archivo  Especifica el/los archivo/s a eliminar. Utilice
                          varios archivos utilizando comodines.
  /P     Solicita confirmaci�n antes de borrar cada archivo.
  /V     Visualiza los archivos eliminados.       
.

:TEXT_CMDHELP_DIR#4
Muestra un listado de archivos y subdirectorios en un directorio.

DIR [unidad:][ruta][archivo] [/P] [/W] [/A[[:]atributos]]
  [/O[[:]orden]] [/S] [/B] [/L] [/V]

  [unidad:][ruta][archivo]
            Especifica la unidad, directorio y/o archivos a listar.
            (Puede ser una especificaci�n de archivo mejorada, o m�ltiples
            especificaciones de archivo.)
 /P         Efect�a una pausa despu�s de cada llenado completo de pantalla.
 /W         Usa formato de lista ancho.
 /A         Muestra los archivos con los atributos especificados.
            (por defecto se considera /ADHSRA)
 atributos   D  Directorios                R  Archivos de s�lo lectura
             H  Archivos ocultos           A  Archivos listos para archivar
             S  Archivos de sistema        -  Prefijo para negaci�n
 /O         Muestra los archivos ordenados.                     
 orden       N  Alfab�tico por nombre    S  Por tama�o (desde el menor)
             E  Alfab�tico por extensi�n D  Por fecha/hora (desde el m�s ant.)
             G  Agrupar directorios      -  Prefijo para invertir el orden
             U  Desordenado (orden natural)      (Por defecto: /ONG)
 /S         Muestra los archivos en el directorio y todos sus subdirectorios.
 /B         Usa formato simple (sin cabecera y resumen).         
 /L         Muestra el contenido en min�sculas.
 /Y o /4    Muestra el a�o con cuatro d�gitos

Los modificadores se pueden preestablecer en la variable de entorno DIRCMD.
Sus valores se pueden sobreescribir con el prefijo - antes del modificador
(por ejemplo, /-W).
.

:TEXT_CMDHELP_DOSKEY#1
La utilidad externa DOSKEY es ahora parte de FreeCOM.
Utilice las teclas de movimiento de cursor ARRIBA y ABAJO para recuperar el
historial de l�neas, y HISTORY para visualizarlo.
Utilice las teclas de movimiento de cursor DERECHA e IZQUIERDA, y las teclas
INICIO y FIN para navegar en la l�nea, y utilize INS para conmutar entre los
modos sobreescritura e inserci�n.
Utilice la tecla TAB para completar la palabra actual a un nombre de archivo;
presi�nela dos veces para mostrar todos los archivos coincidentes.
.

:TEXT_CMDHELP_ORIGINAL_DOSKEY#1
Edita y recupera l�neas de �rdenes, y crea macros.

DOSKEY [/opci�n ...] [nombre_macro=[cadena]]

  /BUFSIZE:n    Establece a n el tama�o del buffer de macros y �rdenes
                (por defecto: 512)
  /ECHO:on|off  Activa o desactiva el eco en la expansi�n de macros
                (por defecto: ON)
  /FILE:archivo Indica un archivo que contiene una lista de macros
  /HISTORY      Visualiza las �rdenes almacenadas en memoria
  /INSERT       Inserta nuevos caracteres en la l�nea al mecanografiar
  /KEYSIZE:m    Establece a m el tama�o del buffer de teclado
                (por defecto: 15)
  /LINE:k       Establece a k el tama�o m�ximo del buffer de edici�n de
                l�neas (por defecto: 128)
  /MACROS       Muestra todas las macros de DOSKEY
  /OVERSTRIKE   Sustituye nuevos caracteres en la l�nea al mecanografiar
                (por defecto)
  /REINSTALL    Instala una nueva copia de DOSKey
  nombre_macro  Establece un nombre para una nueva macro
  cadena        Establece las �rdenes a asignar a la macro         

   cursor ARRIBA y ABAJO para recuperar las l�neas de �rdenes
      Esc borra la l�nea de �rdenes actual
       F7 visualiza el historial de l�neas de �rdenes
   Alt+F7 elimina el historial de l�neas de �rdenes
[cars.]F8 busca la primera l�nea que comienza por [cars.]
       F9 elegir una l�nea de �rdenes por n�mero
  Alt+F10 elimina todas las definiciones de macros

Los siguientes son c�digos especiales que puede incluir en las definiciones
de macros de DOSKey:
  $T     Separador de �rdenes: permite m�s de una �rden en una macro
  $1-$9  Par�metros Batch: equivalente a %1-%9 en programas batch
  $*     S�mbolo que se reemplazar� por todo lo que sigue al nombre de la
         macro en la l�nea de �rdenes
.

:TEXT_CMDHELP_ECHO
Muestra mensajes, o activa/desactiva la repetici�n (eco) de la l�nea de �rdenes

  ECHO [ON | OFF]
  ECHO [mensaje]

Introduzca ECHO sin par�metros para visualizar el estado actual del eco.
.

:TEXT_CMDHELP_EXIT
Sale de la interfaz de �rdenes de FreeDOS.

EXIT
.


:TEXT_CMDHELP_FOR
Ejecuta la orden especificada para cada archivo en un conjunto de archivos.

FOR %variable IN (set) DO command [command-parameters]

  %variable  Especifica una variable a ser reemplazada.
  (conjunto) Especifica un conjunto de archivos. Se admiten comodines.    
  orden      Especifica la orden que se ejecutar� para cada archivo.
  par�metros Par�metros opcionales que la orden pueda requerir.

Para usar FOR en un programa batch, usar %%variable en lugar de
%variable.
.


:TEXT_CMDHELP_GOTO
Redirige la ejecuci�n de un programa batch a una cierta l�nea etiquetada.

GOTO etiqueta

  etiqueta  Especifica una cadena de caracteres usada como etiqueta.

Una etiqueta se crea en una l�nea exclusiva que comienza con el car�cter
dos puntos (:) seguido del nombre de la etiqueta.
.

:TEXT_CMDHELP_HISTORY#1
Historial de �rdenes.

HISTORY [tama�o]

Sin "tama�o", muestra los contenidos del historial de �rdenes actual.
Con "tama�o", modifica el tama�o del buffer para el historial.
.

:TEXT_CMDHELP_IF
Ejecuci�n condicional en programas batch.

IF [NOT] ERRORLEVEL n�mero  orden
IF [NOT] cadena1==cadena2  orden
IF [NOT] EXIST nombrearchivo orden

  NOT                 La orden s�lo se ejecutar� si la condici�n es falsa.
  ERRORLEVEL n�mero   La condici�n es verdadera si el programa anterior
                      devolvi� un c�digo de salida igual o mayor al n�mero
                      especificado.
  orden               Especifica la orden que se ejecutar� si la condici�n
                      se verifica.
  cadena1==cadena2    La condici�n es verdadera si ambas cadenas coinciden.
  EXIST nombrearchivo La condici�n es verdadera si el archivo dado existe.
.

:TEXT_CMDHELP_LFNFOR
Activa/Desactiva nombres largos de archivo para FOR o para autocompletar.

LFNFOR [ON | OFF]
LFNFOR COMPLETE [ON | OFF]

Introduzca LFNFOR o LFNFOR COMPLETE sin par�metros para mostrar el estado
actual de LFNFOR.
.

:TEXT_CMDHELP_LH
Carga un programa en memoria superior.

LOADHIGH [unidad:][ruta]nombrearchivo [par�metros]
LOADHIGH [/L:regi�n1[,tamM�n1][;regi�n2[,tamM�n2]...] [/S]]
         [unidad:][ruta]nombrearchivo [par�metros]

/L:regi�n1[,tamM�n1][;regi�n2[,tamM�n2]]...
            Especifica las regiones de memoria donde cargar el programa.
            Regi�n1 especifica el n�mero de la primera regi�n de memoria;
            tamM�n1 especifica en su caso el tama�o m�nimo de la regi�n.
            Regi�n2 especifica el n�mero de la segunda regi�n de memoria;
            tamM�n2 especifica en su caso el tama�o m�nimo de la regi�n
            y as� sucesivamente.
            Se pueden indicar tantas regiones como se desee.

/S          Reduce un bloque de memoria superior a su tama�o m�nimo mientras
            el programa se carga.

[unidad:][ruta]nombrearchivo
            Especifica la localizaci�n y nombre del programa.
.

:TEXT_CMDHELP_LOADFIX
Carga un programa por encima de los primeros 64KB de memoria y lo ejecuta.

LOADFIX [unidad:][ruta]nombrearchivo

Utilice LOADFIX para cargar un programa para el que se obtiene el mensaje de
error "Packed file corrupt" (programa comprimido corrupto) al tratar de
cargarlo en memoria.
.

:TEXT_CMDHELP_MD
Crea un directorio.

MKDIR [unidad:]ruta
MD [unidad:]ruta
.

:TEXT_CMDHELP_PATH
Establece o muestra una lista de rutas alternativas para archivos ejecutables.

PATH [[unidad:]ruta[;...]]
PATH ;

Introduzca PATH ; para eliminar todas las rutas alternativas, e indicar al
int�rprete que s�lo debe utilizar el directorio actual.
Introduzca PATH sin par�metros para mostrar las rutas alternativas actuales.
.

:TEXT_CMDHELP_PAUSE
Suspende la ejecuci�n de un programa batch hasta la pulsaci�n de una tecla,
y muestra el siguiente mensaje:
"Presione cualquier tecla para continuar . . ."
o cualquier otro mensaje especificado.

PAUSE [mensaje]
.

:TEXT_CMDHELP_PROMPT
Modifica el indicador de �rdenes.

PROMPT [cadena]

  cadena    Especifica el nuevo indicador de �rdenes.

El indicador puede constar de caracteres normales, y los siguientes c�digos
especiales:

  $Q   = (signo de igualdad)
  $$   $ (signo de d�lar)
  $T   Hora actual 
  $D   Fecha actual
  $P   Unidad y ruta actual  
  $V   Versi�n del int�rprete de �rdenes de FreeDOS
  $N   Unidad actual
  $G   > (signo de mayor-que)
  $L   < (signo de menor-que
  $B   | (barra vertial)
  $H   Retroceso (elimina el car�cter anterior)
  $E   C�digo escape (c�digo ASCII 27)
  $_   Retorno de carro e incremento de l�nea

Introduzca PROMPT sin par�metros para restablecer el indicador por defecto.
.

:TEXT_CMDHELP_PUSHD
Vuelca el directorio actual a la pila de directorios (con la posibilidad de
cambiar previamente a dicho directorio).

PUSHD [[unidad:]ruta]

  Donde [unidad:]ruta es la nueva ruta a la que deseas cambiar.
.

:TEXT_CMDHELP_POPD
Recupera un directorio de la pila de directorios, y cambia a �l.

POPD [*]
  El par�metro '*' borra la pila de directorios.
.

:TEXT_CMDHELP_DIRS
Muestra los contenidos de la pila de directorios.

DIRS
.

:TEXT_CMDHELP_RD
Elimina un directorio.

RMDIR [unidad:]ruta
RD [unidad:]ruta
.

:TEXT_CMDHELP_REM
Realiza comentarios en un archivo batch o en CONFIG.SYS.

REM [comentario]
.

:TEXT_CMDHELP_REN
Renombra uno o varios archivos o directorios.

RENAME [unidad:][ruta][directorio1 | archivo1] [directorio2 | archivo2]
REN [unidad:][ruta][directorio1 | archivo1] [directorio2 | archivo2]

N�tese que no se permite establecer una nueva unidad o ruta en destino.
Utilice la orden MOVE para tal prop�sito.
.

:TEXT_CMDHELP_SET#1
Muestra, establece o elimina variables de entorno.

SET [/C] [variable=[valor]]

  variable  Especifica el nombre de la variable de entorno.
  string    Especifica una serie de caracteres a asignar como valor.

* Si no se especifica un valor, la variable de entorno se elimina.

Introduzca SET sin par�metros para mostrar las variables de entorno actuales.

/C fuerza la distinci�n entre may�sculas y min�sculas. Por defecto, el nombre
de variable se pasa a may�sculas si no se encontraba previamente en el
entorno, en cuyo caso, su estado se mantiene.
.

:TEXT_CMDHELP_SHIFT#1
Modifica la posici�n de par�metros reemplazables en un programa batch.

SHIFT [DOWN]

DOWN desplaza la lista de argumentos hacia el principio (%0); en caso
caso contrario, hacia el final.
.

:TEXT_CMDHELP_TIME#1
Establece o muestra la hora del sistema.

TIME [/T] [hora]

Introduzca TIME sin par�metros para mostrar la hora actual, y preguntar por
una nueva. Pulse ENTER para mantener la misma hora.

/T impide que TIME funcione de forma interactiva.
.

:TEXT_CMDHELP_TRUENAME
Muestra la ruta completa hacia el archivo especificado.

TRUENAME [unidad:][ruta][nombrearchivo]
.

:TEXT_CMDHELP_TYPE
Muestra el contenido de archivos de texto.

TYPE [unidad:][ruta]nombrearchivo
.

:TEXT_CMDHELP_VER
Muestra la versi�n del int�rprete de �rdenes de FreeDOS y otra informaci�n.

VER [/R] [/W] [/D] [/C]

 /R         Muestra la versi�n del kernel y otra informaci�n.
 /W         Muestra la garant�a del int�rprete de �rdenes de FreeDOS.
 /D         Muestra informaci�n sobre la redistribuci�n del int�rprete.
 /C         Muestra la lista de contribuidores al int�rprete de �rdenes.
.

:TEXT_CMDHELP_VERIFY
Indica al sistema de archivos de FreeDOS que debe verificar la correcta
escritura de archivos al disco.

VERIFY [ON | OFF]

Introduzca VERIFY sin par�metros para visualizar el estado actual de VERIFY.
.

:TEXT_CMDHELP_FDDEBUG
Si se compila FreeDOS con soporte para depuraci�n, esta orden activa o
desactiva la producci�n de mensajes de depuraci�n, o indica su estado.

FDDEBUG [ON | OFF | archivo]

Indique FDDEBUG sin par�metros para visualizar el estado actual.
Si se especifica un archivo, todas las salidas se redirigir�n a dicho archivo;
los mensajes se a�adir�n al final del archivo si �ste existe. Los nombres
especiales "stdout" and "stderr" se pueden utilizar para redirigir la salida
hacia las salidas est�ndar de datos y de errores.
.

:TEXT_CMDHELP_VOL
Muestra la etiqueta de volumen y el n�mero de serie de un disco, si existen.

VOL [unidad:]
.

:TEXT_CMDHELP_QUESTION#1
Muestra la lista de �rdenes y caracter�sticas disponibles en el int�rprete.

?
?orden [argumentos]

La primera variante muestra las �rdenes internas y caracter�sticas
disponibles.
La segunda variante pregunta si se debe o no ejecutar la orden especificada,
como si estuviera activado el modo de b�squeda de errores.
.

:TEXT_CMDHELP_WHICH
Busca el ejecutable para la orden dada, y lo muestra.

WHICH {orden}
.

:TEXT_CMDHELP_MEMORY#1
Muestra la memoria que FreeCOM usa internamente

MEMORY

.


:TEXT_ERROR_COPY_PLUS_DESTINATION#1
El par�metro de destino de COPY no debe contener el car�cter suma ('+').
.

:TEXT_DELETE_FILE#1
Eliminando archivo "%s".
.


:TEXT_ERROR_WRITE_FILE_DISC_FULL#0%
No se puede escribir el archivo '%s';
Probablemente el disco est� lleno (se requieren %lu bytes)
.

# Displayed for BIGcopy(), when copying takes quite a long time.
# **_NO_END if the input file size is unknown.
# Both must end in \r rather than \n!!
:TEXT_COPY_COPIED_NO_END#0%
copiados %luKB/???KB\r\
.
:TEXT_COPY_COPIED#0%
copiados %luKB/%luKB\r\
.

:TEXT_ERROR_FCOM_IS_DEVICE#0%
FreeCOM no puede ser un dispositivo: "%s"
.
:TEXT_ERROR_FCOM_INVALID#0%
Este archivo no es un FreeCOM v�lido, o la versi�n no es compatible:
%s
.

:TEXT_ERROR_LOADING_STRINGS
Error al cargar las cadenas de caracteres en memoria, la ruta
indicada en %COMSPEC% no parece v�lida. Por favor, especifique otra
ruta hacia FreeCOM para tratar de recargar las cadenas, por ejemplo:
C:\\COMMAND.COM
o pulse ENTER para cancelar la carga de dichas cadenas.
.

:TEXT_TERMINATING
Abortando ejecuci�n.
.

:TEXT_HIDDEN_CRITER#0%
Se han eliminado %u peticiones de Error Cr�tico.
.

# The exit reasons MUST be kept in this order!
:TEXT_DISP_EXITCODE#0%
C�digo de salida (ERRORLEVEL): %u, motivo: %u (%s)
.
:TEXT_EXIT_REASON_NEG_1
Error en el API del DOS\
.
:TEXT_EXIT_REASON_0
salida con normalidad\
.
:TEXT_EXIT_REASON_1
salida por ^Break\
.
:TEXT_EXIT_REASON_2
salida por error cr�tico\
.
:TEXT_EXIT_REASON_3
salida residente en memoria\
.
