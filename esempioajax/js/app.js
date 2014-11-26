var modulo = (function() {
    function jsonp(url, callback) {
        var callbackName = 'callback_' + Math.round(100000 * Math.random());
            window[callbackName] = function(data) {
                delete window[callbackName];
                document.body.removeChild(script);
                callback(data);
            };

        var script = document.createElement('script');
            script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
            document.body.appendChild(script);
    }

    var getDati = function(container) {
        jsonp('https://ajaxjsonpexample.herokuapp.com/', function(data) {
            document.getElementById(container).innerHTML = '<b>' + 
                                                    data[0].titolo 
                                                    + '</b><br />' 
                                                    + '<b>' 
                                                    + data[1].titolo + '</b>'
        });
    };
                
    return {
        getDati : getDati
    };
})();