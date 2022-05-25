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