// Namespace
(function (window) {
  window.hpack = window.hpack || {};
})(window);

// Table Class
(function (hpack) {
  var staticTable = [{ name: ":authority" },{ name: ":method", value: "GET" },{ name: ":method", value: "POST" },{ name: ":path", value: "/" },{ name: ":path", value: "/index.html" },{ name: ":scheme", value: "http" },{ name: ":scheme", value: "https" },{ name: ":status", value: "200" },{ name: ":status", value: "204" },{ name: ":status", value: "206" },{ name: ":status", value: "304" },{ name: ":status", value: "400" },{ name: ":status", value: "404" },{ name: ":status", value: "500" },{ name: "accept-charset" },{ name: "accept-encoding", value: "gzip, deflate" },{ name: "accept-language" },{ name: "accept-ranges" },{ name: "accept" },{ name: "access-control-allow-origin" },{ name: "age" },{ name: "allow" },{ name: "authorization" },{ name: "cache-control" },{ name: "content-disposition" },{ name: "content-encoding" },{ name: "content-language" },{ name: "content-length" },{ name: "content-location" },{ name: "content-range" },{ name: "content-type" },{ name: "cookie" },{ name: "date" },{ name: "etag" },{ name: "expect" },{ name: "expires" },{ name: "from" },{ name: "host" },{ name: "if-match" },{ name: "if-modified-since" },{ name: "if-none-match" },{ name: "if-range" },{ name: "if-unmodified-since" },{ name: "last-modified" },{ name: "link" },{ name: "location" },{ name: "max-forwards" },{ name: "proxy-authenticate" },{ name: "proxy-authorization" },{ name: "range" },{ name: "referer" },{ name: "refresh" },{ name: "retry-after" },{ name: "server" },{ name: "set-cookie" },{ name: "strict-transport-security" },{ name: "transfer-encoding" },{ name: "user-agent" },{ name: "vary" },{ name: "via" },{ name: "www-authenticate" }];

  hpack.Table = function () {
    var dynamicTable = [];

    this.staticTable = function() {
      var result = staticTable.slice();
      for (var i in result) {
        result[i].index = parseFloat(i) + 1;
      }
      return result;
    };

    this.dynamicTable = function() {
      var result = dynamicTable.slice();
      for (var i in result) {
        result[i].index = parseFloat(i) + staticTable.length + 1;
      }
      return result;
    };

    this.add = function (name, value) {
      dynamicTable.unshift({name: name, value: value});
    };

    this.match = function (name, value) {
      var nameIndex = -1;
      var it = this.iterator();
      var el;
      while (el = it.next()) {
        if (el.name === name) {
          if (el.value === value) {
            return {
              index: el.index,
              nameOnly: false
            }
          }
          else if (nameIndex === -1) {
            nameIndex = el.index;
          }
        }
      }

      if (nameIndex !== -1) {
        return {
          index: nameIndex,
          nameOnly: true
        }
      }

      return null;
    };

    this.iterator = function () {
      var staticTable = this.staticTable();
      var dynamicTable = this.dynamicTable();
      var context = staticTable;

      var localIndex = -1;
      var globalIndex = 0;
      return {
        next: function () {
          globalIndex++;
          localIndex++;
          if (localIndex >= context.length) {
            if (context === staticTable) {
              context = dynamicTable;
              localIndex = 0;
              if (context.length === 0) { return null; }
            }
            else { return null; }
          }
          return {
            index: globalIndex,
            name: context[localIndex].name,
            value: context[localIndex].value
          };
        }
      }
    };
  };
})(window.hpack);
