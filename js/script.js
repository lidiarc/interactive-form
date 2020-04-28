const $initialFocus = $("#name");
const $otherTitle = $("#other-title");
const $newOption = $('<option selected="selected">Please select a T-shirt theme</option>');
const $newActivity = $('<div></div>');
const activities = $('.activities');
const $inputActivities = $('.activities input');
const nameField = $('#name');
const emailField = $('#mail');
const cardNumber = $('#cc-num');
const zipCode = $('#zip');
const cvvCode = $('#cvv');

let $totalActivityCost = 0;

//On page load, the cursor appears in the "Name" field.
$initialFocus.focus();

$otherTitle.hide();
$('.activities').append($newActivity);

$(document).ready( function() {
    //"Your job role" text field appears when user selects "Other" from the Job Role menu
    $("#title").on('change', function() {
        if ($(this).val() === "other") {
            $otherTitle.show();
            $otherTitle.focus();
        } else {
            $otherTitle.hide();
        }
    });

    // ● Hide the “Select Theme” `option` element in the “Design” menu.
    $('#design option:eq(0)').hide();

    // ● Update the “Color” field to read “Please select a T-shirt theme”.
    $('#color').prepend($newOption);

    // ● Hide the colors in the “Color” drop down menu.
    $('#colors-js-puns').hide();
    $('#color option').hide();

    // ● Get the value of the payment select element, and if it’s equal to ‘credit card’, set the
    // credit card payment section in the form to show, and set the other two options to hide.
    $('#payment option[value="select method"]').hide();
    $('#payment option[value="credit card"]').attr('selected', true);
    $('#paypal').hide();
    $('#bitcoin').hide();
    
    $('#payment').change( function() {
        if ($(this).val() === "credit card") {
            $('#credit-card').show();
            $('#paypal').hide();
            $('#bitcoin').hide();
        } else if ($(this).val() === "paypal") {
            $('#credit-card').hide();
            $('#paypal').show();
            $('#bitcoin').hide();
        } else if ($(this).val() === "bitcoin") {
            $('#credit-card').hide();
            $('#paypal').hide();
            $('#bitcoin').show();
        }
    });
});

$('#design').on('change', function() {
    const $heart_js = $("select#color option:gt(3)");
    const $js_puns = $('#color option');
    $newOption.attr('selected', true);
    $('#colors-js-puns').show();
    if ($(this).val() === 'js puns') {
        $js_puns.slice(1,4).show();
        $heart_js.hide();
        $newOption.attr('selected', false);
        $('#color option:eq(1)').attr('selected', true);
    } else {
        $js_puns.slice(1,4).hide();
        $heart_js.show();
        $newOption.attr('selected', false);
        $('#color option:eq(4)').attr('selected', true);
    }
    $newOption.attr('selected', true);
});

$($inputActivities).on('click', function(event) {
    const $inputClicked = $(event.target);

    const $nameInputClicked = $inputClicked.attr('name');

    $inputClicked.attr('checked', true);

    const $checked = $(this).prop("checked");
    
    const $dataCost = parseInt($(event.currentTarget).attr('data-cost'));

    const $dayTime = $(event.currentTarget).attr('data-day-and-time');

    if ($checked === true){
        $totalActivityCost += $dataCost;
    }else{
        $totalActivityCost -= $dataCost;
        $nameInputClicked.disabled = true;
    }

    $('.activities div').text('Total: $' + $totalActivityCost);
    //https://stackoverflow.com/questions/35057477/update-dom-reference-in-jquery-each
    
    $inputActivities.each( function(){
        if (($dayTime === $(this).attr('data-day-and-time')) && ($nameInputClicked !== $(this).attr('name'))){
            if ($checked){
                $(this).attr('disabled', true);
            } else {
                $(this).attr('disabled', false);
            }
        }
    });
});

// Form cannot be submitted (the page does not refresh when the submit button is clicked) 
// until the following requirements have been met:
$('button').on('click', function(e) {
//$('form').on('submit', function(e) {
    //e.stopPropagation();
    //e.preventDefault();

    //const activityVal = selectedActivity().val;
    //selectedActivity();
    if (nameContent().val === false) {
        e.preventDefault();
        alert('Please enter a correct name.');
        console.log('el campo nombre no está bien');
        
        // e.stopPropagation();
        //return false;
    } else if (emailContent().val === false) {
        //$("#mail").focus();
        alert('Please enter a correct email.');
        console.log('el campo email no está bien');
         e.preventDefault();
         //e.stopPropagation();
        //return false;
    } else if ($('.activities input:checked').length === 0){
        // -At least one checkbox under "Register for Activities" section must be selected.
        console.log("entra en if de activities");
        $('.activities legend').css({"color": "red"});
        alert('Please check any activity box.');
        e.preventDefault();
        // e.stopPropagation();
        //return false;
    } else if ($('#payment option[value="credit card"]').prop('selected')) {
        // -If "Credit Card" is the selected payment option, the three fields accept only numbers:
        //  a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value.
        //e.preventDefault();
        if (creditCardContent().val === false){
            alert('Please enter a credit card number.');
            console.log('invalid credit card number');
            e.preventDefault();
            // e.stopPropagation();
            //return false;
        } else if (zipCodeContent().val === false){
            alert('Please enter a zip code.');
            console.log('invalid zip code number');
            e.preventDefault();
            // e.stopPropagation();
            //return false;
        } else if (cvvCodeContent().val === false){
            e.preventDefault();
            // e.stopPropagation();
            alert('Please enter a cvv number.');
            console.log('invalid cvv code number');
            //return false;
        }
    }
    /*
    $('#payment').change( function(e) {
        
            
    });
    */
    console.log("Has hecho click");
    
    
});

// -Name field isn’t blank.
function isValidUsername(nameField) {
    return /^[a-z]+$/.test(nameField);
}

function nameContent(){
    if (!isValidUsername(nameField.val())){
        $('label[for="name"]').css({"color": "red"});
        nameField.css({"borderColor": "red"});
        $('#name').focus();
        console.log('nombre invalido');
        return false;
    } else {
        return true;
    }
}

// -Email field contains validly formatted e-mail address: (doesn’t have to check that it's a real
//  e-mail address, just that it's formatted like one: dave@teamtreehouse.com,for example).
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function emailContent(){
    if (!isValidEmail(emailField.val())){
        $('label[for="mail"]').css({"color": "red"});
        emailField.css({"borderColor": "red"});
        //$('#mail').focus();
        console.log('email invalido');
        return false;
        //e.preventDefault();
    } else {
        return true;
    }
}
  
// credit card: 13 to 16-digit
function isValidCreditCardNumber(cardNumber) {
    return /^[A-Za-z0-9]{13}(?:[A-Za-z0-9]{3})?$/.test(cardNumber);
}

function creditCardContent(){
    if (!isValidCreditCardNumber(cardNumber.val())){
        $('label[for="cc-num"]').css({"color": "red"});
        cardNumber.css({"borderColor": "red"});
        console.log('card number invalido');
        return false;
    } else {
        return true;
    }
}

// zip code: 5-digit
function isValidZipCode(zipCode) {
    return /^[A-Za-z0-9]{5}$/.test(zipCode);
}

function zipCodeContent(){
    if (!isValidZipCode(zipCode.val())){
        $('label[for="zip"]').css({"color": "red"});
        zipCode.css({"borderColor": "red"});
        console.log('zip code invalido');
        return false;
    } else {
        return true;
    }
}

//CVV value: 3-number
function isValidCvvCode(cvvCode) {
    return /^[0-9]{3}$/.test(cvvCode);
}

function cvvCodeContent(){
    if (!isValidCvvCode(cvvCode.val())){
        $('label[for="cvv"]').css({"color": "red"});
        cvvCode.css({"borderColor": "red"});
        console.log('cvv code invalido');
        return false;
    } else {
        return true;
    }
}



// On submission, the form provides an error indication or message for each field that requires validation:
// -Name field
// -Email field
// -“Register for Activities” checkboxes
// -Credit Card number, Zip code, and CVV, only if the credit card payment method is selected.



// When JavaScript is disabled, all form fields and payment information is displayed, including
// the "Other" field under the "Job Role" section.
//S2V3 jQuery Basics Videos

//https://www.w3schools.com/tags/att_button_type.asp
//Attribute Values <button type="button|submit|reset">

/*
$(document).ready(function() {
    $(document).on('submit', '#my-form', function() {
      // do your things
      return false;
     });
});
*/

/*
function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }
  
  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }
  */

  //usernameInput.addEventListener("input", createListener(isValidUsername));
  //$('#name').focusin(createListener(isValidUsername));
  //nameField.on("input", createListener(isValidUsername));
  
  //passwordInput.addEventListener("input", createListener(isValidPassword));
  
  //telephoneInput.addEventListener("input", createListener(isValidTelephone));
  
  //emailInput.addEventListener("input", createListener(isValidEmail));
  





//$('html').addClass('js');

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
*/
//● Hide the “Select Payment Method” `option` so it doesn’t show up in the drop down menu.

// ● Get the value of the payment select element, and if it’s equal to ‘credit card’, set the
// credit card payment section in the form to show, and set the other two options to hide.

// ● Repeat the above step with the PayPal and BitCoin options so that the selected
// payment is shown and the others are hidden.
