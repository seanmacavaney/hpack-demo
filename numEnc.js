// Namespace
(function (window) {
  var hpack = window.hpack = window.hpack || {};
  hpack.numEnc = {};
})(window);


// integer encoding
// As described in HPACK§5.1
(function (numEnc) {
  numEnc.int = function (num, prefix) {
    prefix = (prefix >= 0 && prefix <= 8) ? prefix : 8;

    var criticalPoint = Math.pow(2, prefix) - 1;
    if (num < criticalPoint) {
      return [num];
    }
    else {
      num -= criticalPoint;
      var result = [criticalPoint];
      while (num >= 128) {
        result.push(num % 128 + 128);
        num =  (num / 128) >> 0;
      }
      result.push(num);
      return result;
    }
  };
})(window.hpack.numEnc);


// hex encoding
// Used for printing hex digits
(function (numEnc) {
  numEnc.hex = function (d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    return "0x" + hex;
  };
})(window.hpack.numEnc);
