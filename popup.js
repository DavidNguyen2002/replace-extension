document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick () {
        var first = document.getElementById("first").value;
        var second = document.getElementById("second").value;
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, [first, second])
        })
    }
}, false)