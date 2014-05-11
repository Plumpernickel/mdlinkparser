if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(require) {
    //The value returned from the function is
    //used as the module export visible to Node.
    return function ( mdString ){
    return mdString.match(/\[([^\]]+)\]\(([^)]+)\)/g).toString().match(/[a-zA-Z0-9]+(:\/\/|.)([a-zA-Z0-9_\-]+)([\.][a-zA-Z0-9_\-]+)+([/][a-zA-Z0-9\~_\-]*)+([\.][a-zA-Z0-9_\-]+)*/g);
    };
});
