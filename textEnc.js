// Namespace
(function (window) {
  var hpack = window.hpack = window.hpack || {};
  hpack.textEnc = {};
})(window);


// Basic Encoding
(function (textEnc, numEnc) {
  textEnc.basic = function (str) {
    var result = [];
    for (var i in str) {
      result.push(str.charCodeAt(i));
    }

    var len = numEnc.int(result.length, 7);

    return len.concat(result);
  }
})(window.hpack.textEnc, window.hpack.numEnc);


// Huffman Encoding
(function (textEnc, numEnc) {
  var huffmanCode = [{value: 0x1ff8, length: 13 },{value: 0x7fffd8, length: 23 },{value: 0xfffffe2, length: 28 },{value: 0xfffffe3, length: 28 },{value: 0xfffffe4, length: 28 },{value: 0xfffffe5, length: 28 },{value: 0xfffffe6, length: 28 },{value: 0xfffffe7, length: 28 },{value: 0xfffffe8, length: 28 },{value: 0xffffea, length: 24 },{value: 0x3ffffffc, length: 30 },{value: 0xfffffe9, length: 28 },{value: 0xfffffea, length: 28 },{value: 0x3ffffffd, length: 30 },{value: 0xfffffeb, length: 28 },{value: 0xfffffec, length: 28 },{value: 0xfffffed, length: 28 },{value: 0xfffffee, length: 28 },{value: 0xfffffef, length: 28 },{value: 0xffffff0, length: 28 },{value: 0xffffff1, length: 28 },{value: 0xffffff2, length: 28 },{value: 0x3ffffffe, length: 30 },{value: 0xffffff3, length: 28 },{value: 0xffffff4, length: 28 },{value: 0xffffff5, length: 28 },{value: 0xffffff6, length: 28 },{value: 0xffffff7, length: 28 },{value: 0xffffff8, length: 28 },{value: 0xffffff9, length: 28 },{value: 0xffffffa, length: 28 },{value: 0xffffffb, length: 28 },{value: 0x14, length: 6 },{value: 0x3f8, length: 10 },{value: 0x3f9, length: 10 },{value: 0xffa, length: 12 },{value: 0x1ff9, length: 13 },{value: 0x15, length: 6 },{value: 0xf8, length: 8 },{value: 0x7fa, length: 11 },{value: 0x3fa, length: 10 },{value: 0x3fb, length: 10 },{value: 0xf9, length: 8 },{value: 0x7fb, length: 11 },{value: 0xfa, length: 8 },{value: 0x16, length: 6 },{value: 0x17, length: 6 },{value: 0x18, length: 6 },{value: 0x0, length: 5 },{value: 0x1, length: 5 },{value: 0x2, length: 5 },{value: 0x19, length: 6 },{value: 0x1a, length: 6 },{value: 0x1b, length: 6 },{value: 0x1c, length: 6 },{value: 0x1d, length: 6 },{value: 0x1e, length: 6 },{value: 0x1f, length: 6 },{value: 0x5c, length: 7 },{value: 0xfb, length: 8 },{value: 0x7ffc, length: 15 },{value: 0x20, length: 6 },{value: 0xffb, length: 12 },{value: 0x3fc, length: 10 },{value: 0x1ffa, length: 13 },{value: 0x21, length: 6 },{value: 0x5d, length: 7 },{value: 0x5e, length: 7 },{value: 0x5f, length: 7 },{value: 0x60, length: 7 },{value: 0x61, length: 7 },{value: 0x62, length: 7 },{value: 0x63, length: 7 },{value: 0x64, length: 7 },{value: 0x65, length: 7 },{value: 0x66, length: 7 },{value: 0x67, length: 7 },{value: 0x68, length: 7 },{value: 0x69, length: 7 },{value: 0x6a, length: 7 },{value: 0x6b, length: 7 },{value: 0x6c, length: 7 },{value: 0x6d, length: 7 },{value: 0x6e, length: 7 },{value: 0x6f, length: 7 },{value: 0x70, length: 7 },{value: 0x71, length: 7 },{value: 0x72, length: 7 },{value: 0xfc, length: 8 },{value: 0x73, length: 7 },{value: 0xfd, length: 8 },{value: 0x1ffb, length: 13 },{value: 0x7fff0, length: 19 },{value: 0x1ffc, length: 13 },{value: 0x3ffc, length: 14 },{value: 0x22, length: 6 },{value: 0x7ffd, length: 15 },{value: 0x3, length: 5 },{value: 0x23, length: 6 },{value: 0x4, length: 5 },{value: 0x24, length: 6 },{value: 0x5, length: 5 },{value: 0x25, length: 6 },{value: 0x26, length: 6 },{value: 0x27, length: 6 },{value: 0x6, length: 5 },{value: 0x74, length: 7 },{value: 0x75, length: 7 },{value: 0x28, length: 6 },{value: 0x29, length: 6 },{value: 0x2a, length: 6 },{value: 0x7, length: 5 },{value: 0x2b, length: 6 },{value: 0x76, length: 7 },{value: 0x2c, length: 6 },{value: 0x8, length: 5 },{value: 0x9, length: 5 },{value: 0x2d, length: 6 },{value: 0x77, length: 7 },{value: 0x78, length: 7 },{value: 0x79, length: 7 },{value: 0x7a, length: 7 },{value: 0x7b, length: 7 },{value: 0x7ffe, length: 15 },{value: 0x7fc, length: 11 },{value: 0x3ffd, length: 14 },{value: 0x1ffd, length: 13 },{value: 0xffffffc, length: 28 },{value: 0xfffe6, length: 20 },{value: 0x3fffd2, length: 22 },{value: 0xfffe7, length: 20 },{value: 0xfffe8, length: 20 },{value: 0x3fffd3, length: 22 },{value: 0x3fffd4, length: 22 },{value: 0x3fffd5, length: 22 },{value: 0x7fffd9, length: 23 },{value: 0x3fffd6, length: 22 },{value: 0x7fffda, length: 23 },{value: 0x7fffdb, length: 23 },{value: 0x7fffdc, length: 23 },{value: 0x7fffdd, length: 23 },{value: 0x7fffde, length: 23 },{value: 0xffffeb, length: 24 },{value: 0x7fffdf, length: 23 },{value: 0xffffec, length: 24 },{value: 0xffffed, length: 24 },{value: 0x3fffd7, length: 22 },{value: 0x7fffe0, length: 23 },{value: 0xffffee, length: 24 },{value: 0x7fffe1, length: 23 },{value: 0x7fffe2, length: 23 },{value: 0x7fffe3, length: 23 },{value: 0x7fffe4, length: 23 },{value: 0x1fffdc, length: 21 },{value: 0x3fffd8, length: 22 },{value: 0x7fffe5, length: 23 },{value: 0x3fffd9, length: 22 },{value: 0x7fffe6, length: 23 },{value: 0x7fffe7, length: 23 },{value: 0xffffef, length: 24 },{value: 0x3fffda, length: 22 },{value: 0x1fffdd, length: 21 },{value: 0xfffe9, length: 20 },{value: 0x3fffdb, length: 22 },{value: 0x3fffdc, length: 22 },{value: 0x7fffe8, length: 23 },{value: 0x7fffe9, length: 23 },{value: 0x1fffde, length: 21 },{value: 0x7fffea, length: 23 },{value: 0x3fffdd, length: 22 },{value: 0x3fffde, length: 22 },{value: 0xfffff0, length: 24 },{value: 0x1fffdf, length: 21 },{value: 0x3fffdf, length: 22 },{value: 0x7fffeb, length: 23 },{value: 0x7fffec, length: 23 },{value: 0x1fffe0, length: 21 },{value: 0x1fffe1, length: 21 },{value: 0x3fffe0, length: 22 },{value: 0x1fffe2, length: 21 },{value: 0x7fffed, length: 23 },{value: 0x3fffe1, length: 22 },{value: 0x7fffee, length: 23 },{value: 0x7fffef, length: 23 },{value: 0xfffea, length: 20 },{value: 0x3fffe2, length: 22 },{value: 0x3fffe3, length: 22 },{value: 0x3fffe4, length: 22 },{value: 0x7ffff0, length: 23 },{value: 0x3fffe5, length: 22 },{value: 0x3fffe6, length: 22 },{value: 0x7ffff1, length: 23 },{value: 0x3ffffe0, length: 26 },{value: 0x3ffffe1, length: 26 },{value: 0xfffeb, length: 20 },{value: 0x7fff1, length: 19 },{value: 0x3fffe7, length: 22 },{value: 0x7ffff2, length: 23 },{value: 0x3fffe8, length: 22 },{value: 0x1ffffec, length: 25 },{value: 0x3ffffe2, length: 26 },{value: 0x3ffffe3, length: 26 },{value: 0x3ffffe4, length: 26 },{value: 0x7ffffde, length: 27 },{value: 0x7ffffdf, length: 27 },{value: 0x3ffffe5, length: 26 },{value: 0xfffff1, length: 24 },{value: 0x1ffffed, length: 25 },{value: 0x7fff2, length: 19 },{value: 0x1fffe3, length: 21 },{value: 0x3ffffe6, length: 26 },{value: 0x7ffffe0, length: 27 },{value: 0x7ffffe1, length: 27 },{value: 0x3ffffe7, length: 26 },{value: 0x7ffffe2, length: 27 },{value: 0xfffff2, length: 24 },{value: 0x1fffe4, length: 21 },{value: 0x1fffe5, length: 21 },{value: 0x3ffffe8, length: 26 },{value: 0x3ffffe9, length: 26 },{value: 0xffffffd, length: 28 },{value: 0x7ffffe3, length: 27 },{value: 0x7ffffe4, length: 27 },{value: 0x7ffffe5, length: 27 },{value: 0xfffec, length: 20 },{value: 0xfffff3, length: 24 },{value: 0xfffed, length: 20 },{value: 0x1fffe6, length: 21 },{value: 0x3fffe9, length: 22 },{value: 0x1fffe7, length: 21 },{value: 0x1fffe8, length: 21 },{value: 0x7ffff3, length: 23 },{value: 0x3fffea, length: 22 },{value: 0x3fffeb, length: 22 },{value: 0x1ffffee, length: 25 },{value: 0x1ffffef, length: 25 },{value: 0xfffff4, length: 24 },{value: 0xfffff5, length: 24 },{value: 0x3ffffea, length: 26 },{value: 0x7ffff4, length: 23 },{value: 0x3ffffeb, length: 26 },{value: 0x7ffffe6, length: 27 },{value: 0x3ffffec, length: 26 },{value: 0x3ffffed, length: 26 },{value: 0x7ffffe7, length: 27 },{value: 0x7ffffe8, length: 27 },{value: 0x7ffffe9, length: 27 },{value: 0x7ffffea, length: 27 },{value: 0x7ffffeb, length: 27 },{value: 0xffffffe, length: 28 },{value: 0x7ffffec, length: 27 },{value: 0x7ffffed, length: 27 },{value: 0x7ffffee, length: 27 },{value: 0x7ffffef, length: 27 },{value: 0x7fffff0, length: 27 },{value: 0x3ffffee, length: 26 },{value: 0x3fffffff, length: 30 }];

  var BITS_PER_BYTE = 8;

  textEnc.huffman = function (str) {
    var result = [];
    var current = 0;
    var clen = 0;
    for (var i in str) {
      var h = huffmanCode[str.charCodeAt(i)];
      var next = { value: h.value, length: h.length };

      while (next.length > 0) {
        var shift = Math.min(BITS_PER_BYTE-clen, next.length);
        var part = (next.value & (Math.pow(2, next.length) - Math.pow(2, next.length - shift)));
        current = (current << shift) + (part >> (next.length - shift));
        next.value -= part;
        next.length -= shift;
        clen += shift;
        if (clen === BITS_PER_BYTE) {
          result.push(current);
          current = 0;
          clen = 0;
        }
      }
    }
    if (clen > 0) {
      result.push((current << (BITS_PER_BYTE-clen)) + Math.pow(2, BITS_PER_BYTE-clen) - 1);
    }

    var len = numEnc.int(result.length, 7);
    len[0] = len[0] | 0x80; // Mark as huffman encoded

    return len.concat(result);
  }
})(window.hpack.textEnc, window.hpack.numEnc);


// Optimal Encoding
(function (textEnc) {
  // Returns the shorter of either basic-encoded or huffman-encoded values.
  // If of equal length, returns basic-encoded value.
  textEnc.optimal = function (str) {
    var basic = textEnc.basic(str);
    var huffman = textEnc.huffman(str);
    if (huffman.length < basic.length) {
      return huffman;
    }
    else {
      return basic;
    }
  };
})(window.hpack.textEnc);
