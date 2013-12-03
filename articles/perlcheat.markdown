Title: Perl Cheat Sheet
Author: Andrew
Date: Sun Dec  1 02:23:49 UTC 2013
Categories: perl,cheat-sheet,linux

Refer to:

    man perlcheat

perlcheat - Perl 5 Cheat Sheet

##The sheet

     CONTEXTS  SIGILS             ARRAYS        HASHES
     void      $scalar   whole:   @array        %hash
     scalar    @array    slice:   @array[0, 2]  @hash{'a', 'b'}
     list      %hash     element: $array[0]     $hash{'a'}
               &sub
               *glob    SCALAR VALUES
                        number, string, reference, glob, undef

     REFERENCES
     \     references      $$foo[1]       aka $foo->[1]
     $@%&* dereference     $$foo{bar}     aka $foo->{bar}
     []    anon. arrayref  ${$$foo[1]}[2] aka $foo->[1]->[2]
     {}    anon. hashref   ${$$foo[1]}[2] aka $foo->[1][2]
     \()   list of refs

                             NUMBERS vs STRINGS  
     OPERATOR PRECEDENCE     =          =        
     ->                      +          .        
     ++ --                   == !=      eq ne         
     **                      < > <= >=  lt gt le ge   
     ! ~ \ u+ u-             <=>        cmp           
     =~ !~                                            
     * / % x                 SYNTAX
     + - .                   for    (LIST) { }, for (a;b;c) { }
     << >>                   while  ( ) { }, until ( ) { }
     named uops              if     ( ) { } elsif ( ) { } else { }
     < > <= >= lt gt le ge   unless ( ) { } elsif ( ) { } else { }
     == != <=> eq ne cmp ~~  for equals foreach (ALWAYS)
     &
     | ^              REGEX METACHARS            REGEX MODIFIERS
     &&               ^     string begin         /i case insens.
     || //            $     str. end (before \n) /m line based ^$
     .. ...           +     one or more          /s . includes \n
     ?:               *     zero or more         /x ign. wh.space
     = += -= *= etc.  ?     zero or one          /g global
     , =>             {3,7} repeat in range      /o cmpl pat. once
     list ops         ()    capture
     not              (?:)  no capture       REGEX CHARCLASSES
     and              []    character class  .  == [^\n]
     or xor           |     alternation      \s == whitespace
                      \b    word boundary    \w == word characters
                      \z    string end       \d == digits
                                             \S, \W and \D negate

##DO and DON'T

     DO                 DON'T
     use strict;        "$foo"           
     use warnings;      $$variable_name  
     my $var;           `$userinput`     
     open() or die $!;  /$userinput/     
     use Modules;       


##LINKS

    perl.plover.com
    search.cpan.org
    cpan.org
    pm.org
    tpj.com
    perldoc.com
    perl.com
    use.perl.org
    perl.apache.org

##FUNCTION RETURN LISTS

     stat      localtime    caller        
      0 dev    0 second     0 package     
      1 ino    1 minute     1 filename    
      2 mode   2 hour       2 line        
      3 nlink  3 day        3 subroutine  
      4 uid    4 month-1    4 hasargs     
      5 gid    5 year-1900  5 wantarray   
      6 rdev   6 weekday    6 evaltext    
      7 size   7 yearday    7 is_require  
      8 atime  8 is_dst     8 hints       
      9 mtime               9 bitmask     
     10 ctime  just use                   
     11 blksz  POSIX::      3..9 only     
     12 blcks  strftime!    with EXPR     


##SPECIAL VARIABLES

     $_    default variable
     $0    program name
     $/    input separator
     $\    output separator
     $|    autoflush
     $!    sys/libcall error
     $@    eval error
     $$    process ID
     $.    line number
     @ARGV command line args
     @INC  include paths
     @_    subroutine args
     %ENV  environment          


##Info.

This `cheat sheet` is a handy reference, meant for beginning
Perl programmers. *Not everything* is mentioned, but __195__
features may already be overwhelming.


###ACKNOWLEDGEMENTS

The first version of this document appeared on Perl Monks,
where several people had useful suggestions. Thank you, Perl
Monks.

A special thanks to Damian Conway, who didn't only suggest
important changes, but also took the time to count the number
of listed features and make a Perl 6 version to show that
Perl will stay Perl.

##AUTHOR

Juerd Waalboer <#####@juerd.nl>, with the help of many Perl Monks.

##SEE ALSO

1. [the original PM post](http://perlmonks.org/?node_id=216602)
2. [Damian Conway's Perl 6 version](http://perlmonks.org/?node_id=238031)
3. [home of the Perl Cheat Sheet](http://juerd.nl/site.plp/perlcheat)



perl v5.14.2,  2011-09-26



