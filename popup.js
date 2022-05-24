// document.addEventListener('DOMContentLoaded', function () {
    
//     document.querySelector('button').addEventListener('click', onclick, false)

//     function onclick () {
//         var first = document.getElementById("first").value;
//         var second = document.getElementById("second").value;
//         chrome.tabs.query({currentWindow: true, active: true},
//         function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, [first, second])
//         })
//     }
// }, false)



document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#replace-btn');
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    let firstmsg;
    let secondmsg;

    btn.addEventListener('click', () => {
        firstmsg = first.value;
        secondmsg = second.value;
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {msg: [firstmsg, secondmsg]});
        });
    });
});