Title: ack-grep gets good reason as 'grep' alternative
Author: Andrew
Date: Mon Dec  2 10:24:11 UTC 2013
Categories: shell,cheat-sheet,programming


Refer to: <http://beyondgrep.com/why-ack/>

    sudo apt-get install ack-grep

*We are going to short `ack-grep` as `ack` in the rest*

##Simple

Ack only searches the stuff that makes sense to search. Perl\'s regular
expressions are highly optimized.  It ignores VCS directories, ack searches
recursively by default, while ignoring .git, .svn, CVS and other
VCS directories.

    # Which would you rather type?
    $ grep pattern $(find . -type f | grep -v '\.svn')

    $ ack pattern

##Better search results

Since ack defaults to only searching source code, you get fewer false positives.

    VCS directories
    blib, the Perl build directory
    backup files like foo~ and #foo#
    binary files, core dumps, etc 

##Easy filetype specifications

    ack-grep -f # This lists files getten searched.

If you have a big project with many different languages combined, it\'s easy to
add --perl to search only Perl files, or use --nohtml to search everything
except HTML.

ack's filetype detection means more than just specifying a single file extension.

    # Which would you rather type? 

    $ grep pattern $(find . -name '*.pl' -or -name '*.pm' -or -name '*.pod' | grep -v .svn)

    $ ack --perl pattern 

Plus, ack does filetype detection that find can't. ack checks the shebang lines
of scripts without extensions.

##Creates lists of files without searching

Since ack can know to search only, say, Ruby files with the --ruby switch, you
can also generate a list of files in a tree with the -f switch.

    # List all Ruby files in the tree
    $ ack -f --ruby > all-ruby-files 

##Match highlighting

ack has flexible match highlighting, where you can specify the colors to use in
its output.

##Perl regular expressions

Perl leads the programming world with its regular expressions. ack uses Perl's
regular expressions, not a "Perl-compatible" subset.

You can also take advantage of Perl's match variables. For example, to generate
a list of all files #included in your C code, use this:

    ack --cc '#include\s+<(.*)>' --output '$1' -h 

##Command switches much like GNU grep

If you know GNU grep, you know most of ack's switches, too. Word-only searching
with -w, case-insensitive searching with -i, etc


