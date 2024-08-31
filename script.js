var typed = new Typed('#element', {
    strings: [' WELCOME TO MY CALCULATOR !'],
    typeSpeed: 30,
    html: true,
    showCursor: false,  // This will hide the cursor after typing
  });
  $(document).ready(function() {
    var display = $(".display");  // Reference to the display input
    var currentInput = "";        // Current input string
    var lastAnswer = "";          // Store last calculated answer
    
    // Handle button clicks
    $("button").click(function() {
        var value = $(this).val();

        if (value === "Clear") {
            currentInput = "";    // Clear the current input
            display.val("");      // Clear the display
        } else if (value === "Ans") {
            currentInput += lastAnswer;  // Use last answer in the current input
            display.val(currentInput);
        } else if (value === "=") {
            try {
                lastAnswer = eval(currentInput.replace('x', '*')); // Evaluate the expression
                display.val(lastAnswer);   // Display the result
                currentInput = lastAnswer; // Use result as the next input
            } catch (error) {
                display.val("Error");      // Display error if evaluation fails
                currentInput = "";
            }
        } else {
            currentInput += value;  // Append clicked button value to current input
            display.val(currentInput); // Update the display
        }
    });

    
});
