Title: CSS Cheat Sheet
Author: Andrew
Date: Sun Dec  1 02:23:49 UTC 2013
Categories: css,cheat-sheet,web


Refer to:

    http://www.css.su/


##Template, in HTML

put the style sheet into the document  Template: link to an external style sheet your-document.html:


    <!DOCTYPE HTML>
    <html>
    <head>
      <title>... replace with your document's title ...</title>
      <link rel="stylesheet" type="text/css" href="your_document.css" />
      <link rel="stylesheet" type="text/css" 
        media="print, handheld" href="another_document.css" />
      <style type="text/css">
        /* CSS Things */
        body {
          background: white;
          color: black
        } 
        /*......*/
      </style>
    </head>

    <body>
      <h1>your html</h1>
    </body>
    </html> 


##Syntax

    /* Comment */
    @import url("fancyfonts.css") media_type;

    @media media_type {
      selector {
        property: values;
        property: values;
      }
    }


##Media Types (media\_type) 

    all        : all devices 
    braille    : braille tactile feedback devices
    embossed   : paged braille printers 
    handheld   : handheld devices  
    print      : paged material   
    projection : projected presentations  
    screen     : color computer screens   
    speech     : speech synthesizers      
    tty        : media using a fixed-pitch character grid
    tv         : television-type devices         

More and details [about media types](http://www.w3.org/TR/CSS21/media.html)


##Selectors

###Most common: div span as example

    *      All elements,  universal selector
    div    type selector                        
    div *  Elements within <div>                        
    div  span    <span> within <div> (descendant selector)    
    div, span    <div> and <span> (grouping selectors)        
    div > span   <span> with <div> as parent (child selector) 
    div + span   <span> preceded by <div>...</div>            
                 (adjacent sibling selector)

  

    *.class  Elements of class="class", 
             where * can be any element (span, p, a, h1, etc.)
    .class   (class selector)                                    


    div.class      <div class="class"> (class selector)     
    *#item_id      Element with id="item_id"> (aid selector)    
    #item_id                                                                      
    div#item_id    <div id="item_id"> (id selector)           
                                                                                  
    *[attr]    Elements with sets attr attribute        
    [attr]     (attribute selector)                         
                                                                                  
                                                                                  
    div[attr]           <div attr="..."> (attribute selector)    
    div[attr="value"]   <div attr="value"> (attribute selector)
    div[attr~="value"]  <div attr="another value another"> 
    div[attr|="value"]  <div attr="value another"> 


    div:first-child   - First child of <div>  (pseudo-class)         
    div:first-line    - First line of <div>
    div:first-letter  - First letter of <div>
    div:before        - Element before <div>
    div:after         - Element after <div>
    a:link            - Non-active, unvisited links without mouse    
    :link             - over (link pseudo-class)                     
    a:visited         - Visited links (link pseudo-class)            
    :visited          -                                              
    div:hover         - <div> vhen mouse over (dynamic pseudo-class) 
    div:active        - Active <div> (dynamic pseudo-class)          
    div:focus         - <div> vith focus (dynamic pseudo-class)      
    div:lang(la)      - <div> with language la (language pseudo-class)


  More and [details about selectors](http://www.w3.org/TR/CSS21/selector.html)
