chrome.runtime.onMessage.addListener(function (request) {
    var first = new RegExp(request[0], "gi");
    var second = request[1];

    $('body :not(script)').contents().filter(function () {
        return this.nodeType === 3;
    }).replaceWith(function () {
        return this.nodeValue.replace(first, second);
    });

})