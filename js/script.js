const $initialFocus = $("#name");
$initialFocus.focus();

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

$( window ).on('load', function(event) {
//$(document).ready( function() {
    event.preventDefault();
    
    $('#design option:eq(0)').hide();
    
    const $newOption = $('<option selected="selected">Please select a T-shirt theme</option>');
    $('#color').prepend($newOption);    
    
    $('#colors-js-puns').hide();
});

$('#design').on('change', function() {
//$('#design').change( function() {
    const $heart_js = $("select#color option:gt(3)");
    const $js_puns = $('#color option');
    if ($(this).val() === 'js puns') {
        $('#colors-js-puns').show();
        $js_puns.slice(1,4).show();
        $heart_js.hide();
    } else {
        $('#colors-js-puns').show();
        $js_puns.slice(1,4).hide();
        $heart_js.show();
    }
});

const $newActivity = $('<div></div>');
$('.activities').append($newActivity);

let $totalActivityCost = 0;

const activities = $('.activities');
const $inputActivities = $('.activities input');

$($inputActivities).on('click', function(event) {
//$('.activities input').on('click', function(event) {
    const $inputClicked = $(event.target);

    const $nameInputClicked = $inputClicked.attr('name');

    $inputClicked.attr('checked', true);

    const $checked = $(this).prop("checked");
    
    const $dataCost = parseInt($(event.currentTarget).attr('data-cost'));

    const $dayTime = $(event.currentTarget).attr('data-day-and-time');

    if ($checked === true){
        $totalActivityCost += $dataCost;
        console.log('Coste Total: ' + $totalActivityCost);
    }else{
        $totalActivityCost -= $dataCost;
        $nameInputClicked.disabled = true;
        console.log('Coste Total: ' + $totalActivityCost);
    }

    //$newActivity.textContent('Total $' + $totalActivityCost);
    $('.activities div').text('Total: $' + $totalActivityCost);
    
    for (let i = 0; i <= $inputActivities.length; i++) {
		let $index = $inputActivities.eq(i);
		if ($dayTime == $index.attr('data-day-and-time') && $nameInputClicked !== $index.attr('name')) {
			if ($checked) {
				$index.attr('disabled', true);
			} else {
				$index.attr('disabled', false);
			}
		}
	}
});


//$newActivity.replace('text', $label);
//$('.activities').val($label);
//$newActivity.attr('text', $label);
//$newActivity.attr('text', ' ' + $totalActivityCost.toString() + '$');
//$newActivity.html('textContent', ' ' + $totalActivityCost + '$');

//Put the first field in the `focus` state
//Use JavaScript to select the 'Name' input element and place focus on it.
// const initialFocus = document.getElementById("name");
// initialFocus.focus();

/*
$('#mail').click(function() {
    if($(this).val().indexOf('@', 0) == -1 || $(this).val().indexOf('.', 0) == -1) {
        $(this).prev().css("color","red");
        //alert('El correo electrónico introducido no es correcto.');
        return false;
    } else {

    }
  });
*/
/*
Add an “Other” option to the Job Role section
This is the one and only section of the project where you will have to make changes directly in the `index.html` file.
In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will 
display if JavaScript is disabled, but be hidden initially with JS. //
En su archivo JavaScript, oriente el campo de entrada "Otro" y ocúltelo inicialmente, 
para que se muestre si JavaScript está deshabilitado, pero se oculte inicialmente con JS.
*/

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

/*
Creating an element to display the total activity cost 
Create a DOM element, store it in a global variable and append it to the `.activity` section. You
can view the elements tab in the Chrome DevTools to check that your element is in the DOM.
Create a global variable to store total activity cost — initially set to 0 — don't use const since
you want to update this as needed.
*/
// ● Create an element to display the total activity cost

/* 
Listening for changes in the activity section 
Add a change event listener to the activity section. Inside the listener, it will be helpful to have
a variable to reference the DOM `input` element that was just clicked.
● NOTE: It is helpful at this point to log out the variable you just created to double check
that its values is what you expect. Remember, you’ll need to click on the checkboxes in
the Activity section to run the code in this listener, including your log statements.
*/
// ● Listen for changes in the Activity section
// ● Create helpful variables to store important values

/*
Updating and displaying the total activity cost  
Let’s add another helpful variable in the Activity section’s change listener:
● Get the `data-cost` attribute value of the clicked element stored in the variable above.
Since you’ll be performing some simple arithmetic with the activity cost, you’ll need to
make sure the value is a number. There are helpful methods for turning strings into
numbers, which can be found with a Google search. And the `typeof` operator can be
used to log out the data type of a value or variable.
● NOTE: Again, it’s helpful here to log out the cost variable.
Still inside the Activity section’s change listener, you can use an `if/else` statement to check if
the clicked input element is checked or unchecked. If the input element is checked, add the cost
of the currently clicked activity to the total cost variable, else subtract the cost.
Finally, set the text of the total cost element (that you created above) equal to the string ‘Total:
$’ concatenated with the current value of the total cost variable (that you declared above). 
*/
// ● Update and display the total activity cost

/*
Disabling conflicting activities 
Still inside the Activity section’s change listener, let’s follow the same pattern we used to get
the cost of the currently clicked activity to get the day and time as well. First, we’ll add another
helpful variable:
● Get the `data-day-and-time` attribute value of the clicked element stored in a variable
above. NOTE: Now would be a good time to log out these most recent variables to
make sure they are what you think they are.
Now you need to accomplish the following tasks:
● When an activity is checked, disable any activity that occurs at the same day and time
(i.e. "conflicting activities") without disabling the activity that was just checked.
● And when an activity is unchecked, you want to enable any conflicting activities. 
To do this, you’ll need to loop over all the checkbox inputs in the Activity section. It will be
helpful to create a variable that targets the activity input element at the current iteration of the
loop. Remember, you do this with bracket notation, using the loop iterator in the brackets.
Something like this: `input[i]`. Be sure to log out the variable you just created to test its value.
Now that you’re looping over each activity, and capturing each one in a variable, it’s time to test
a few conditions. In order to disable or enable an activity in the loop, you need to know two
things about the activity at the current loop iteration:
Need help? ​Visit the unit-03 Slack channel 
Full Stack JavaScript
● First, does the activity occur at the same day and time as the activity that was just
clicked? We can check this by seeing if the activity in the current loop iteration has a
`data-day-and-time` attribute that is equal to the `data-day-and-time` attribute of the
element that was just clicked​.
● Second, is the activity is different than the activity that was just clicked? We can check
this by seeing if the activity that was just clicked is ​not equal​ to the activity in the
current loop iteration.
Both of these conditions should be checked in a single if statement using the `&&` operator.
If both conditions evaluate to "true", then this activity needs to be disabled or enabled
depending on whether the clicked activity was checked or unchecked. An `if/else` statement
will help here:
● If the clicked activity was checked, then set the matching activity element's `disabled`
property to `true`
● If the clicked activity was unchecked, then set the matching activity element's `disabled`
property to `false`.
*/
// ● Disable conflicting activities

/*
Payment Section 
Initially, the credit card section should be selected and displayed in the form, and the other two
payment options should be hidden. The user should be able to change payment options at any
time, but shouldn’t be able to select the “Select Payment Method” option. So you’ll need to
check the currently selected payment option, and hide and show the payment sections in the
form accordingly.
● Hide the “Select Payment Method” `option` so it doesn’t show up in the drop down
menu.
● Get the value of the payment select element, and if it’s equal to ‘credit card’, set the
credit card payment section in the form to show, and set the other two options to hide.
● Repeat the above step with the PayPal and BitCoin options so that the selected
payment is shown and the others are hidden.
*/