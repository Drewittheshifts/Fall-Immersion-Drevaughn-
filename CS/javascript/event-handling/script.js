function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.
    // Variable = A storage container for data

    // Create a variable to store the tag we want to change 
    counter_number = document.getElementById('counter-number');

    //change the text of the tag we have stored in the variable above 
    counter_number.innerHTML = parseInt(counter_number.innerHTML) +1;
}
