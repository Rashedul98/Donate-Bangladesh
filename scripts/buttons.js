document.getElementById('Donation-btn').addEventListener('click', function () {
    document.getElementById('History-page').classList.add('hidden');
    document.getElementById('donation-page').classList.remove('hidden');
})

document.getElementById('History-btn').addEventListener('click', function () {
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('History-page').classList.remove('hidden');
})

