function showHistory(amount, tagName) {
    const div = document.createElement('div');
    const HistoryTag = document.getElementById(tagName).innerText;
    div.innerHTML = `
        <div class= "border border-gray-400 p-6 mt-8 rounded-lg">
            <h1 class= "text-base font-semibold"> ${amount} Tk is Donated for ${HistoryTag}</h1><br>
        </div>
    `
    document.getElementById('History-page').appendChild(div)
}