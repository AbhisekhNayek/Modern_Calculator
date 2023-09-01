$(document).ready(function () {
    // Initialize an empty expression
    var expression = "";

    // Attach click handlers to numeric buttons
    $('.numeric').click(function () {
        expression += $(this).val();
        $('#display').val(expression);
    });

    // Attach click handlers to operator buttons
    $('.operator').click(function () {
        expression += $(this).val();
        $('#display').val(expression);
    });

    // Clear button
    $('#clear').click(function () {
        expression = "";
        $('#display').val("");
    });

    // Equal button
    $('#equal').click(function () {
        try {
            var result = eval(expression);
            $('#display').val(result);
            expression = result.toString(); // Store the result for further calculations
        } catch (error) {
            alert("Invalid input!");
            $('#display').val("");
            expression = ""; // Clear the expression in case of an error
        }
    });

    // Additional operator functionality
    $('#dot').click(function () {
        // Check if there's already a dot in the current number
        if (expression === "" || expression.slice(-1) === '.') {
            return; // Do nothing if a dot is already present
        } else {
            expression += $(this).val();
            $('#display').val(expression);
        }
    });

    // Handling the percentage operator
    $('#percentage').click(function () {
        try {
            var result = eval(expression + '/100');
            $('#display').val(result);
            expression = result.toString(); // Store the result for further calculations
        } catch (error) {
            alert("Invalid input!");
            $('#display').val("");
            expression = ""; // Clear the expression in case of an error
        }
    });
});
