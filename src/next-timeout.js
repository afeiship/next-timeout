(function () {

  var global = global || window || self || this;

  var nx = global.nx || require('next-js-core2');

  nx.timeout = function(){};


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeout;
  }

}());
