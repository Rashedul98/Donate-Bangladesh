// Donation Button - hover effects
document.getElementById('Donation-btn').addEventListener('mouseover', function (event) {

    document.getElementById('History-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('History-btn').classList.remove('button-effect-hover');

    this.classList.add('bg-[#B4F461]');
    this.classList.add('button-effect-hover');

})

document.getElementById('Donation-btn').addEventListener('mouseout', function (event) {

    document.getElementById('Donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('Donation-btn').classList.remove('button-effect-hover');

})

// History Button - hover effects
document.getElementById('History-btn').addEventListener('mouseover', function (event) {
    event.stopImmediatePropagation();

    document.getElementById('Donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('Donation-btn').classList.remove('button-effect-hover');


    this.classList.add('bg-[#B4F461]');
    this.classList.add('button-effect-hover');

})

document.getElementById('Donation-btn').addEventListener('mouseout', function (event) {

    document.getElementById('History-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('History-btn').classList.remove('button-effect-hover');

})
