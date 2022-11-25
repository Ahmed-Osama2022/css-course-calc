
/**
 * Global Variables
 */
const bar = document.getElementById('bar');
const precentage = document.getElementById('precentage');
const input = document.getElementById('input-box');
const result = document.getElementById('result');
const loader = document.getElementById('loader');
const error = document.getElementById('error');

/**
 * End with Global Variables
 */

/**
 * Start Event Listener on result button 
 */
result.addEventListener('click', (e) => {
   
    
    let num = input.value;
    // For test:
    // console.log(num);

    // Check if the user enter a value bigger than 88!!
    if (num > 88) {
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        },2000);
    } else {
         // Start the loader for a period of time:
        loader.style.display = 'block'; 
         setTimeout(() => {
           loader.style.display = 'none';
           }, 1150);
        // Using the formula:
        let output ;
        output = (num * 100) / 88;
        // For test:
        // console.log(output);
        // console.log(typeof(output));

        // Update the UI: 
        precentage.innerText = output.toFixed(2) + '%';
        bar.value = output;
        

}});

/**
 * Extract the formula
 * 88 => 100
 * 1 => x
 * x = 100/88
 * 
 */