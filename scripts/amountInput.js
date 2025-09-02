function donationAmountInput(id, specific) {

    // take input amount and parse it
    const amountValue = document.getElementById(id).value;
    const parsedAmount = parseFloat(amountValue);
    console.log(parsedAmount);

    if (isNaN(parsedAmount)) {

        alert("please input numbers only");
        return;

    } else {


        // take donated amount
        const showDonatedAmount = document.getElementById('show-donated-amount').innerText;
        const ParsedShowDonatedAmount = parseFloat(showDonatedAmount);

        // add specific donation
        const defaultSpecificAmount = document.getElementById(specific).innerText;
        // parsing into float
        const parsedDefaultSpecificAmount = parseFloat(defaultSpecificAmount);
        // adding into specific donation
        document.getElementById(specific).innerText = parsedDefaultSpecificAmount + parsedAmount;


        // total amount
        const total = parsedAmount + ParsedShowDonatedAmount;
        // const total = ParsedShowDonatedAmount - parsedAmount;


        // Add updated donated amount and remove "Donate Now text"
        document.getElementById('show-donated-amount').classList.remove('hidden');
        document.getElementById("BDT-btn").classList.remove('hidden');
        document.getElementById('donte-now-text').classList.add('hidden');

        document.getElementById('show-donated-amount').innerText = total;

    }

    // Clear input fields
    document.getElementById(id).value = '';


}