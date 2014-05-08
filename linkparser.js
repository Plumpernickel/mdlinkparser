module.exports = function( mdString ){
    return mdString.match(/\[([^\]]+)\]\(([^)]+)\)/g);
};
