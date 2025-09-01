function donationAmountInput(id, specific) {

    // take input amount and parse it
    const amountValue = document.getElementById(id).value;
    const parsedAmount = parseFloat(amountValue);

    // take donated amount
    const showDonatedAmount = document.getElementById('show-donated-amount').innerText;
    const ParsedShowDonatedAmount = parseFloat(showDonatedAmount);

    // total amount
    const total = parsedAmount + ParsedShowDonatedAmount;

    // add specific donation
    specificAmount(specific, parsedAmount);


    // show donated amount
    document.getElementById('show-donated-amount').innerText = parsedAmount + ParsedShowDonatedAmount;

    document.getElementById(id).value = '';


}