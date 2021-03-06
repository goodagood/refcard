Title: Ruby pre-defined variables
Author: Andrew
Date: Sun Dec  1 02:23:49 UTC 2013
Categories: css,cheat-sheet,web


Refer to:

    http://overapi.com/ruby/

##Pre-defined Variables

    $!  The exception information message set by ‘raise’.
    $@  Array of backtrace of the last exception thrown.
    $&  The string matched by the last successful pattern match in this scope.
    $`  The string to the left of the last successful match.
    $'  The string to the right of the last successful match.
    $+  The last bracket matched by the last successful match.
    $1  The Nth group of the last successful match. May be > 1.
    $~  The information about the last match in the current scope.
    $=  The flag for case insensitive, nil by default.
    $/  The input record separator, newline by default.
    $\  The output record separator for the print and IO#write. Default is nil.
    $,  The output field separator for the print and Array#join.
    $;  The default separator for String#split.
    $.  The current input line number of the last file that was read.
    $<  The virtual concatenation file of the files given on command line.
    $>  The default output for print, printf. $stdout by default.
    $_  The last input line of string by gets or readline.
    $0  Contains the name of the script being executed. May be assignable.
    $*  Command line arguments given for the script sans args.
    $$  The process number of the Ruby running this script.
    $?  The status of the last executed child process.
    $:  Load path for scripts and binary modules by load or require.
    $"  The array contains the module names loaded by require.


    $DEBUG     The status of the -d switch.
    $FILENAME  Current input file from $<. Same as $<.filename.
    $LOAD_PATH The alias to the $:.
    $stderr    The current standard error output.
    $stdin     The current standard input.
    $stdout    The current standard output.
    $VERBOSE   The verbose flag, which is set by the -v switch.

  

    $-0  The alias to $/
    $-a  True if option -a is set. Read-only variable.
    $-d  The alias to $DEBUG.
    $-F  The alias to $;.
    $-i  In in-place-edit mode, this variable holds the extention, otherwise nil.
    $-I  The alias to $:.
    $-l  True if option -l is set. Read-only variable.
    $-p  True if option -p is set. Read-only variable.
    $-v  The alias to $VERBOSE.

Global Constant

    TRUE   The typical true value.
    FALSE  The false itself.
    NIL    The nil itself.
    STDIN  The standard input. The default value for $stdin.
    STDOUT The standard output. The default value for $stdout.
    STDERR The standard error output. The default value for $stderr.
    ENV    The hash contains current environment variables.
    ARGF   The alias to the $<.
    ARGV   The alias to the $*.
    DATA   The file object of the script, pointing just after __END__.
    RUBY_VERSION      The ruby version string (VERSION was depricated).
    RUBY_RELEASE_DATE The relase date string.
    RUBY_PLATFORM     The platform identifier


