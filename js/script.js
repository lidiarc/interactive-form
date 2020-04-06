//Put the first field in the `focus` state
//Use JavaScript to select the 'Name' input element and place focus on it.
// const initialFocus = document.getElementById("name");
// initialFocus.focus();
const $initialFocus = $("#name");
$initialFocus.focus();

/*
Add an “Other” option to the Job Role section
This is the one and only section of the project where you will have to make changes directly in the `index.html` file.
In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will 
display if JavaScript is disabled, but be hidden initially with JS. //
En su archivo JavaScript, oriente el campo de entrada "Otro" y ocúltelo inicialmente, 
para que se muestre si JavaScript está deshabilitado, pero se oculte inicialmente con JS.
*/

const $otherTitle = $("#other-title");
$otherTitle.hide();

$(document).ready( function() {
    $("#title").change( function() {
    //Esta opción también funciona:   $("#title").on('change', function() {
        if ($(this).val() === "other") {
            $otherTitle.show();
        } else {
            $otherTitle.hide();
        }
    });
});

/*
The goal for the t-shirt section is to filter the available "Color" options by the selected 
theme in the "Design" field. Doing this ensures that the user cannot select an invalid combination
of values for the "Design" and "Color" fields.

When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
clear to the user that they need to select a theme before selecting a color. Use javaScript to:
*/

$( window ).on('load', function(event) {
//     console.log(event);
//$(document).ready( function() {
    event.preventDefault();
    // ● Hide the “Select Theme” `option` element in the “Design” menu.
    //$('#design option:eq(0)').remove();
    $('#design option:eq(0)').hide();
    //$('#design[option="Select Theme"]').hide();
    //$("#design#option").hide();

    // ● Update the “Color” field to read “Please select a T-shirt theme”.
    //$('#color').html($('<option textContent="Please select a T-shirt theme"></option>'));
    const $newOption = $('<option selected="selected">Please select a T-shirt theme</option>');
    $('#color').prepend($newOption);    
    
    // ● Hide the colors in the “Color” drop down menu.
    $('#color option').hide();
    // ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
    // you’re unsure of how to accomplish these steps.
});


/*
Then, when one of the two themes is selected, only the appropriate colors should show in the
“Color” drop down menu, and the “Color” field should update to the first available color. You’ll
use a `change` event listener on the “Design” menu `select` element to listen for changes. And
inside the event listener, you’ll use a conditional to determine what to hide, show and update.
*/
$('#design').change( function() {
    console.log($(this).val());
    // ● If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
    // down menu, show the three “js puns” option elements, and update the “Color” field to
    // the first available color.
    // ● If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
    // down menu, show the three “heart js” option elements, and update the “Color” field to
    // the first available color.
    // const $heart_js = $('option[value$="+JS shirt+"]');
    // console.log($heart_js);
    // const $heart_js2 = $("select#color option[text='JS shirt only)']");
    // console.log($heart_js2);
    const $heart_js = $("select#color option:gt(3)");
    const $js_puns = $('#color option');
    if ($(this).val() === 'js puns') {
        $js_puns.slice(1,4).show();
        $heart_js.hide();
    } else {
        $js_puns.slice(1,4).hide();
        $heart_js.show();
        //$("select#color option[value='+JS Puns+']" ).show();
        //$(this).attr(selected);
    }
});


/*
Like many code problems, there are multiple ways to complete this section of the project.
One option would be to simply reference each checkbox input, as well as the cost, and day 
and time from each input’s parent `label` element, and store those values in variables, 
or in an object as key value pairs.

Need help? Visit the unit-03 Slack channel

Full Stack JavaScript

Then, in an event handler that listens for ‘changes’ to the activity section, you could use 
a set of conditionals to disable conflicting activities, and add or subtract from the total 
cost element you create, depending on whether the checkbox was checked or unchecked.
But a preferred approach would be to come up with a dynamic solution that will work even if 
the cost, day or time of the activities were changed in the HTML. To do that, we'll:
*/


// ● Create an element to display the total activity cost
// ● Listen for changes in the Activity section
// ● Create helpful variables to store important values
// ● Update and display the total activity cost
// ● Disable conflicting activities
