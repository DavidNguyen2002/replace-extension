chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    let first = msg.msg[0];
    let second = msg.msg[1];
    let regex = new RegExp(first, "gi");

    let nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    let currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        currentNode.textContent = currentNode.textContent.replace(regex, second);
    }

    response('success!');
})