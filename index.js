module.exports = function( mdString ){
    return mdString.match(/\[([^\]]+)\]\(([^)]+)\)/g).toString().match(/[a-zA-Z0-9]+(:\/\/|.)([a-zA-Z0-9_\-]+)([\.][a-zA-Z0-9_\-]+)+([/][a-zA-Z0-9\~_\-]*)+([\.][a-zA-Z0-9_\-]+)*/g);
};
