module.exports = function(source) {
    this.cacheable && this.cacheable();
    var value = JSON.parse(source);
    this.value = [value];
    return "module.exports = " + JSON.stringify(value, undefined, "\t") + "\ndelete require.cache[module.id]";
}
