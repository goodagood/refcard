Title: Javascript quick-reference, addedbytes
Author: Andrew
Date: Mon Dec  2 10:24:11 UTC 2013
Categories: javascript,cheat-sheet,programming


Refer to: <addedbytes.com>

##Methods

Object

    toString toLocaleString
    valueOf  hasOwnProperty
    isPrototypeOf
    propertyIsEnumerable

String

    charAt  charCodeAt
    fromCharCode
    concat     indexOf
    lastIndexOf
    localeCompare
    match      replace
    search       slice
    split    substring
    substr toLowerCase
    toUpperCase
    toLocaleLowerCase
    toLocaleUpperCase

RegEx

    test match exec

Array

    concat  join    push
    pop  reverse   shift
    slice   sort  splice
    unshift

Number

    toFixed     toExponential
    toPrecision          Date
    parse        toDateString
    toTimeString      getDate
    getDay        getFullYear
    getHours  getMilliseconds
    getMinutes       getMonth
    getSeconds        getTime
    getTimezoneOffset
    getYear           setDate
    setHours  setMilliseconds
    setMinutes       setMonth
    setSeconds        setYear
    toLocaleTimeString

##XMLHttpRequest 

Safari, Mozilla, Opera: 

    var req = new XMLHttpRequest();

Internet Explorer:

    var req = new
    ActiveXObject("Microsoft.XMLHTTP");

##REGULAR EXPRESSIONS

Regular expressions in JavaScript take the form:

    var RegEx = /pattern/modifiers;


##DOM Methods

Document

    clear       createDocument
    createDocumentFragment
    createElement  createEvent
    createEventObject
    createRange createTextNode
    getElementsByTagName
    getElementById      write

Node

    addEventListener     appendChild
    attachEvent            cloneNode
    createTextRange      detachEvent
    dispatchEvent          fireEvent
    getAttributeNS  getAttributeNode
    hasChildNodes       hasAttribute
    hasAttributes       insertBefore
    removeChild  removeEventListener
    replaceChild      scrollIntoView

Form

    submit

DOM Collections

    item

Range

    collapse
    createContextualFragment
    moveEnd
    moveStart
    parentElement
    select
    setStartBefore
    Style
    getPropertyValue
    setProperty

Event

    initEvent
    preventDefault
    stopPropagation

XMLSerializer

    serializeToString

XMLHTTP

    open
    send

XMLDOM

    loadXML

DOMParser

    parseFromString

##Functions

Window

    alert   blur
    clearTimeout
    close  focus
    open   print
    setTimeout

Built In

    eval      parseInt
    parseFloat   isNaN
    isFinite decodeURI
    decodeURIComponent
    encodeURI
    encodeURIComponent
    escape    unescape

##JAVASCRIPT IN HTML

External JavaScript File

    <script type="text/javascript"
    src="javascript.js"></script>

Inline JavaScript

    <script type="text/javascript">
    <!--
    // JavaScript Here
    //-->
    </script>


##XMLHttpRequest readyState Values

    0 Uninitiated
    1 Loading
    2 Loaded
    3 Interactive
    4 Complete

##Event Handlers

    onAbort   onMouseDown
    onBlur    onMouseMove
    onChange   onMouseOut
    onClick   onMouseOver
    onDblClick  onMouseUp
    onDragDrop     onMove
    onError       onReset
    onFocus      onResize
    onKeyDown    onSelect
    onKeyPress   onSubmit
    onKeyUp      onUnload
    onLoad

