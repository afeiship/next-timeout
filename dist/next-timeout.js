(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.timeout = function(inCallback, inInterval){
    var timer = global.setTimeout(inCallback, inInterval || 0);
    return {
      destroy: function () {
        clearTimeout(timer);
        timer = null;
      }
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeout;
  }

}());
