function showHistory(amount, tagName) {

    // hide h1 element
    // document.getElementById('history-h1').classList.add('hidden');

    const div = document.createElement('div');
    const HistoryTag = document.getElementById(tagName).innerText;
    const Time = new Date();
    div.innerHTML = `
        <div class= "border border-gray-400 p-6 mt-8 rounded-lg flex flex-col justify-center">
            <h1 class= "text-base font-semibold"> ${amount} Tk is Donated for ${HistoryTag}</h1>
            <h1>Date: ${Time}</h1>
        </div>
    `
    document.getElementById('History-page').appendChild(div)
}