Title: The name
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

