var sampleRequests = [
'GET /wiki/HTTP/2 HTTP/1.1' +
'\nhost: en.wikipedia.org' +
'\naccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' +
'\naccept-encoding: gzip, deflate, sdch' +
'\naccept-language: en-US,en;q=0.8,uk;q=0.6' +
'\ncache-control: no-cache' +
'\ncookie: centralnotice_bannercount_fr12=5; centralnotice_bannercount_fr12=5; centralnotice_bannercount_fr12-wait=33; centralnotice_bannercount_fr14ty=1; centralnotice_bannercount_fr14ty-wait=5; strategy2015_only5times_A=2; strategy2015_only5times_A-wait=0%7C0%7C2; centralnotice_bannercount_storeMay2015=2; centralnotice_buckets_by_campaign=%7B%22WikiConference_USA%22%3A%7B%22val%22%3A0%2C%22start%22%3A1439942400%2C%22end%22%3A1443672000%7D%2C%22C1516_enUS_dsk_FR%22%3A%7B%22val%22%3A0%2C%22start%22%3A1443548700%2C%22end%22%3A1446144300%7D%7D; centralnotice_bannercount_fr15=2; GeoIP=US:WI:Oak_Creek:42.89:-87.89:v4; enwikimwuser-sessionId=b934d45d02139641; WMF-Last-Access=14-Oct-2015' +
'\ndnt: 1' +
'\npragma: no-cache' +
'\nreferer: https://en.wikipedia.org/wiki/Main_Page' +
'\nupgrade-insecure-requests: 1' +
'\nuser-agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
,
'GET /w/load.php?debug=false&lang=en&modules=ext.gadget.WatchlistBase%2CWatchlistGreenIndicators%7Cext.uls.nojs%7Cext.visualEditor.desktopArticleTarget.noscript%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.sectionAnchor%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Cwikibase.client.init&only=styles&skin=vector HTTP/1.1'+
'\nhost: en.wikipedia.org' +
'\naccept: text/css,*/*;q=0.1' +
'\naccept-encoding: gzip, deflate, sdch' +
'\naccept-language: en-US,en;q=0.8,uk;q=0.6' +
'\ncache-control: no-cache' +
'\ncookie: centralnotice_bannercount_fr12=5; centralnotice_bannercount_fr12-wait=33; centralnotice_bannercount_fr14ty=1; centralnotice_bannercount_fr14ty-wait=5; strategy2015_only5times_A=2; strategy2015_only5times_A-wait=0%7C0%7C2; centralnotice_bannercount_storeMay2015=2; centralnotice_buckets_by_campaign=%7B%22WikiConference_USA%22%3A%7B%22val%22%3A0%2C%22start%22%3A1439942400%2C%22end%22%3A1443672000%7D%2C%22C1516_enUS_dsk_FR%22%3A%7B%22val%22%3A0%2C%22start%22%3A1443548700%2C%22end%22%3A1446144300%7D%7D; centralnotice_bannercount_fr15=2; GeoIP=US:WI:Oak_Creek:42.89:-87.89:v4; enwikimwuser-sessionId=b934d45d02139641; WMF-Last-Access=14-Oct-2015' +
'\ndnt: 1' +
'\npragma: no-cache' +
'\nreferer: https://en.wikipedia.org/wiki/HTTP/2' +
'\nuser-agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
,
'GET /w/load.php?debug=false&lang=en&modules=site&only=styles&skin=vector HTTP/1.1' +
'\nhost: en.wikipedia.org' +
'\naccept: text/css,*/*;q=0.1' +
'\naccept-encoding: gzip, deflate, sdch' +
'\naccept-language: en-US,en;q=0.8,uk;q=0.6' +
'\ncache-control: no-cache' +
'\ncookie: centralnotice_bannercount_fr12=5; centralnotice_bannercount_fr12-wait=33; centralnotice_bannercount_fr14ty=1; centralnotice_bannercount_fr14ty-wait=5; strategy2015_only5times_A=2; strategy2015_only5times_A-wait=0%7C0%7C2; centralnotice_bannercount_storeMay2015=2; centralnotice_buckets_by_campaign=%7B%22WikiConference_USA%22%3A%7B%22val%22%3A0%2C%22start%22%3A1439942400%2C%22end%22%3A1443672000%7D%2C%22C1516_enUS_dsk_FR%22%3A%7B%22val%22%3A0%2C%22start%22%3A1443548700%2C%22end%22%3A1446144300%7D%7D; centralnotice_bannercount_fr15=2; GeoIP=US:WI:Oak_Creek:42.89:-87.89:v4; enwikimwuser-sessionId=b934d45d02139641; WMF-Last-Access=14-Oct-2015' +
'\ndnt: 1' +
'\npragma: no-cache' +
'\nreferer: https://en.wikipedia.org/wiki/HTTP/2' +
'\nuser-agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
,
'GET /static/images/wikimedia-button.png HTTP/1.1' +
'\nhost: en.wikipedia.org' +
'\naccept: image/webp,image/*,*/*;q=0.8' +
'\naccept-encoding: gzip, deflate, sdch' +
'\naccept-language: en-US,en;q=0.8,uk;q=0.6' +
'\ncache-control: no-cache' +
'\ncookie: centralnotice_bannercount_fr12=5; centralnotice_bannercount_fr12-wait=33; centralnotice_bannercount_fr14ty=1; centralnotice_bannercount_fr14ty-wait=5; strategy2015_only5times_A=2; strategy2015_only5times_A-wait=0%7C0%7C2; centralnotice_bannercount_storeMay2015=2; centralnotice_buckets_by_campaign=%7B%22WikiConference_USA%22%3A%7B%22val%22%3A0%2C%22start%22%3A1439942400%2C%22end%22%3A1443672000%7D%2C%22C1516_enUS_dsk_FR%22%3A%7B%22val%22%3A0%2C%22start%22%3A1443548700%2C%22end%22%3A1446144300%7D%7D; centralnotice_bannercount_fr15=2; GeoIP=US:WI:Oak_Creek:42.89:-87.89:v4; enwikimwuser-sessionId=b934d45d02139641; WMF-Last-Access=14-Oct-2015' +
'\ndnt: 1' +
'\npragma: no-cache' +
'\nreferer: https://en.wikipedia.org/wiki/HTTP/2' +
'\nuser-agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
];

// Table module
(function () {
  window.Table = React.createClass({
    render: function() {
      var items = [];
      for (var key in this.props.table) {
        items.push(<tr key={key}><td className="text-right">{hpack.numEnc.hex(this.props.table[key].index)}</td><td>{this.props.table[key].name}</td><td>{this.props.table[key].value}</td></tr>);
      }
      return <table><tbody><tr><th className="text-right">#</th><th>Name</th><th>Value</th></tr>{items}</tbody></table>
    }
  });
})();

// App module
(function () {
  window.App = React.createClass({
    getInitialState: function () {
      return {
        oldRequest: sampleRequests[0],
        encodedRequest: null,
        request: new window.hpack.Request()
      }
    },
    sample0: function() {
      this.setState({oldRequest: sampleRequests[0]});
    },
    sample1: function() {
      this.setState({oldRequest: sampleRequests[1]});
    },
    sample2: function() {
      this.setState({oldRequest: sampleRequests[2]});
    },
    sample3: function() {
      this.setState({oldRequest: sampleRequests[3]});
    },
    onChange: function(e) {
      this.setState({oldRequest: e.target.value});
    },
    process: function() {
      this.setState({
        encodedRequest: this.state.request.encode(this.state.oldRequest.split('\n').join('\r\n'))
      });
    },
    render: function() {
      var encodedElements = [];
      var runningIndex = 0;
      if (this.state.encodedRequest !== null) {
        for (var i in this.state.encodedRequest.descriptions) {
          var d = this.state.encodedRequest.descriptions[i];
          var els = [];
          for (var j=0; j<d.length; j++) {
            var e = this.state.encodedRequest.data[runningIndex+j];
            els.push(<span key={j}>{window.hpack.numEnc.hex(e)} </span>);
          }
          runningIndex += d.length;
          encodedElements.push(<div style={{margin: 4}} key={i}>
            <div style={{color: '#999', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden'}}>
              <div>{d.name} = {d.value}</div>
              <div>{d.indexedKey ? 'Indexed' : 'Literal'} Key / {d.indexedValue ? 'Indexed' : 'Literal'} Value {d.index ? '('+window.hpack.numEnc.hex(d.index)+')' : ''}</div>
            </div>
            <div style={{fontFamily: 'monospace'}}>{els}</div>
          </div>);
        }
      }
      return (
        <div>
          <div className="col-xs-8">
            <h2>HTTP/1.1 Request <small>{this.state.oldRequest.split('\n').join('\r\n').length} bytes</small></h2>
            <textarea value={this.state.oldRequest} onChange={this.onChange} style={{width: '100%', height: '300px', fontFamily: 'monospace', whiteSpace: 'nowrap'}}></textarea>
            <div>
              <button className="btn btn-success" onClick={this.process}>Process</button>
              <span style={{marginLeft: 12}}>Load Sample:</span>
              <button className="btn btn-default" onClick={this.sample0}>HTML</button>
              <button className="btn btn-default" onClick={this.sample1}>CSS 1</button>
              <button className="btn btn-default" onClick={this.sample2}>CSS 2</button>
              <button className="btn btn-default" onClick={this.sample3}>Image</button>
            </div>
            {this.state.encodedRequest ? <h2>HTTP/2 Request <small>{this.state.encodedRequest ? this.state.encodedRequest.data.length : 0} bytes</small></h2> : null}
            {encodedElements}
          </div>
          <div className="col-xs-4">
            <TabPanel>
              <div title="Static Table"><Table table={this.state.request.table.staticTable()} /></div>
              <div title="Dynamic Table"><Table table={this.state.request.table.dynamicTable()} /></div>
            </TabPanel>
          </div>
        </div>
      );
    }
  });
})();

// Mount the app
(function (document) {
  ReactDOM.render(<App />, document.getElementById('App'));
})(window.document);
