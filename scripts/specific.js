function specificAmount(id, amount) {
    // taking default specific amount for each 
    const defaultSpecificAmount = document.getElementById(id).innerText;

    // parsing into float
    const parsedDefaultSpecificAmount = parseFloat(defaultSpecificAmount);

    // adding into specific donation
    document.getElementById(id).innerText = parsedDefaultSpecificAmount + amount;


}