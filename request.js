// Namespace
(function (window) {
  window.hpack = window.hpack || {};
})(window);


// Request
(function (hpack, Table) {
  hpack.Request = function () {
    var table = this.table = new Table();

    var firstLineRegex = /^([^ ]+) ([^ ]+) HTTP\/1\.1$/;
    var headerLineRegex = /^([^ ]+): (.+)$/;
    function parse(request) {
      var result = [];
      var lines = request.split('\r\n');
      for (var i in lines) {
        var parsed;
        if (i == 0) {
          parsed = firstLineRegex.exec(lines[i]);
          if (parsed !== null) {
            result.push({name: ':method', value: parsed[1]});
            result.push({name: ':scheme', value: 'https'});
            result.push({name: ':path', value: parsed[2]});
          }
        }
        else {
          var parsed = headerLineRegex.exec(lines[i]);
          if (parsed !== null) {
            var name = parsed[1].toLowerCase();
            if (name === 'cookie') {
              // special handling for cookie header ... split out each cookie
              var cookieParts = parsed[2].split('; ');
              for (var j in cookieParts) {
                result.push({name: name, value: cookieParts[j]});
              }
            }
            else if (name === 'host') {
              // host => :authority
              result.push({name: ':authority', value: parsed[2]});
            }
            else {
              // all other headers
              result.push({name: name, value: parsed[2]});
            }
          }
        }

        if (parsed === null) {
          return null; // failed parse
        }
      }

      return result;
    }

    function encodeHeader(header) {
      var result = {
        data: [],
        description: {
          name: header.name,
          value: header.value,
          indexedKey: false,
          indexedValue: false,
          addedToTable: false
        }
      }
      // Try to find this element in the static table
      var match = table.match(header.name, header.value);

      if (match === null) {
        // Non-indexed key, non-indexed value
        table.add(header.name, header.value);

        result.data = [0x80]
          .concat(hpack.textEnc.optimal(header.name))
          .concat(hpack.textEnc.optimal(header.value));
        result.description.addedToTable = true;
      }
      else if (match.nameOnly) {
        // Indexed name, non-indexed value
        table.add(header.name, header.value);

        var encodedNumber = window.hpack.numEnc.int(match.index, 6);
        encodedNumber[0] = 0x40 | encodedNumber[0];

        result.data = encodedNumber.concat(hpack.textEnc.optimal(header.value))
        result.description.indexedKey = true;
        result.description.addedToTable = true;
      }
      else {
        // Indexed name, indexed value
        var encodedNumber = window.hpack.numEnc.int(match.index, 7);
        encodedNumber[0] = 0x80 | encodedNumber[0];

        result.data = encodedNumber;
        result.description.indexedKey = true;
        result.description.indexedValue = true;
      }

      result.description.length = result.data.length;

      return result;
    }

    this.encode = function (request) {
      var result = {descriptions: [], data: []};
      request = parse(request);
      if (request === null) return null;

      for (var i in request) {
        var header = encodeHeader(request[i]);
        
        result.data = result.data.concat(header.data);
        result.descriptions.push(header.description);
      }

      result.data = new Uint16Array(result.data);
      return result;
    }
  };
})(window.hpack, window.hpack.Table)