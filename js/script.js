//Put the first field in the `focus` state
//Use JavaScript to select the 'Name' input element and place focus on it.
const initialFocus = document.getElementById("name");
initialFocus.focus();


/*
Add an “Other” option to the Job Role section
This is the one and only section of the project where you will have to make changes directly in the `index.html` file.
In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will 
display if JavaScript is disabled, but be hidden initially with JS. //
En su archivo JavaScript, oriente el campo de entrada "Otro" y ocúltelo inicialmente, 
para que se muestre si JavaScript está deshabilitado, pero se oculte inicialmente con JS.
*/
const selectOption = document.getElementById("title");
const otherTitle = document.getElementById("other-title");

//otherTitle.style.visibility = 'hidden';

selectOption.addEventListener('onchange', () => {
    if (selectOption.value === 'other'){
        otherTitle.style.visibility = 'visible';
    }
});

/*
The goal for the t-shirt section is to filter the available "Color" options by the selected 
theme in the "Design" field. Doing this ensures that the user cannot select an invalid combination
of values for the "Design" and "Color" fields.

When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
clear to the user that they need to select a theme before selecting a color. Use javaScript to:
*/

// ● Hide the “Select Theme” `option` element in the “Design” menu.
// ● Update the “Color” field to read “Please select a T-shirt theme”.
// ● Hide the colors in the “Color” drop down menu.
// ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
// you’re unsure of how to accomplish these steps.

/*
Then, when one of the two themes is selected, only the appropriate colors should show in the
“Color” drop down menu, and the “Color” field should update to the first available color. You’ll
use a `change` event listener on the “Design” menu `select` element to listen for changes. And
inside the event listener, you’ll use a conditional to determine what to hide, show and update.
*/

// ● If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
// down menu, show the three “js puns” option elements, and update the “Color” field to
// the first available color.
// ● If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
// down menu, show the three “heart js” option elements, and update the “Color” field to
// the first available color.

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
