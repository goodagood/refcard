Title: express.js basics
Author: Andrew
Date: Wed Dec  4 08:07:26 UTC 2013
Categories: node.js,javascript,programming, express.js


Refer to: <http://expressjs.com/>

##It's simple:

Create an express application.

    var express = require('express');
    var app = express();

    app.get('/', function(req, res){
      res.send('hello world');
      });

      app.listen(3000);


Defining routes via app.VERB(), in this case "GET /" responding with the "Hello
World" string. The req and res are the exact same objects that node provides to
you, thus you may invoke res.pipe(), req.on('data', callback) and anything else
you would do without Express involved.

    app.get('/hello.txt', function(req, res){
        var body = 'Hello World';
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.end(body);
    });

Express augments these objects providing you with higher level methods such as
res.send(), which among other things adds the Content-Length for you:

    app.get('/hello.txt', function(req, res){
        res.send('Hello World');
    });



##set/get

app.set(name, value)

Assigns setting name to value.

    app.set('title', 'My Site');
    app.get('title');
    // => "My Site"

    app.get(name)

Get setting name value.

    app.get('title');
    // => undefined

    app.set('title', 'My Site');
    app.get('title');
    // => "My Site"


##Error handling

Error-handling middleware are just like regular middleware, however must be
defined with an arity of 4, that is the signature (err, req, res, next):

    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });

Though not mandatory error-handling middleware are typically defined very last,
below any other app.use() calls as shown here:

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(err, req, res, next){
        // logic
    });

Responses from within these middleware are completely arbitrary. You may wish
to respond with an HTML error page, a simple message, a JSON string, or
anything else you prefer.

For organizational, and higher-level framework purposes you may define several
of these error-handling middleware, much like you would with regular
middleware. For example suppose you wanted to define an error-handler for
requests made via XHR, and those without, you might do:

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);

Where the more generic logErrors may write request and error information to
stderr, loggly, or similar services:

    function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
    }

Where clientErrorHandler is defined as the following, note that the error is
explicitly passed along to the next.

    function clientErrorHandler(err, req, res, next) {
        if (req.xhr) {
            res.send(500, { error: 'Something blew up!' });
        } else {
            next(err);
        }
    }

The following errorHandler "catch-all" implementation may be defined as:

    function errorHandler(err, req, res, next) {
        res.status(500);
        res.render('error', { error: err });
    }


##Express behind proxies

Using Express behind a reverse proxy such as **Varnish or Nginx** is trivial,
however it does require configuration. By enabling the "trust proxy" setting
via `app.enable('trust proxy')`, Express will have knowledge that it's sitting
behind a proxy and that the `X-Forwarded-*` header fields may be trusted, which
otherwise may be easily spoofed.

Enabling this setting has several subtle effects. The first of which is that
`X-Forwarded-Proto` may be set by the reverse proxy to tell the app that it is
https or simply http. This value is reflected by req.protocol.

The second change this makes is the `req.ip` and `req.ips` values will be
populated with `X-Forwarded-For`'s list of addresses. 
