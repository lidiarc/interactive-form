//Porject 3 - Interactive Form
//Lidia Ramos
//v.43


//Global variables
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

//Element to display the total activity cost
let $totalActivityCost = 0;

//On page load, the cursor appears in the "Name" field.
$initialFocus.focus();

//A new option is added to the Job Role menu. It's a text field that's initially hidden until the "Other" option is selected.
$otherTitle.hide();

//Append element to the '.activity' section
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

    //Hide the “Select Theme” `option` element in the “Design” menu.
    $('#design option:eq(0)').hide();

    //Update the “Color” field to read “Please select a T-shirt theme”.
    $('#color').prepend($newOption);

    //Hide the colors in the “Color” drop down menu.
    $('#colors-js-puns').hide();
    $('#color option').hide();

    //Gets the value of the payment select element, and if it’s equal to ‘credit card’, set the
    //credit card payment section in the form to show, and the other two options are hidden.
    $('#payment option[value="select method"]').hide();
    $('#payment option[value="credit card"]').attr('selected', true);
    $('#paypal').hide();
    $('#bitcoin').hide();
    
    //If another payment method is selected, it's displayed and the others are hidden
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

//When one of the two themes is selected, only the appropriate colors are displayed in the "Color" drop-down menu
$('#design').on('change', function() {
    const $heart_js = $("select#color option:gt(3)");
    const $js_puns = $('#color option');
    $newOption.attr('selected', true);
    $('#colors-js-puns').show();

    //If "js puns" is selected, it hides the three "heart js" option elements in the "Color" drop-down menu, 
    //shows the three option elements "js puns" and updates the "Color" field to the first available color.
    if ($(this).val() === 'js puns') {
        $js_puns.slice(1,4).show();
        $heart_js.hide();
        $newOption.attr('selected', false);
        $('#color option:eq(1)').attr('selected', true);
    } else {
    // If "heart js" is selected, it hides the three "js puns" option items in the "Color" drop-down menu,
    // shows the three option elements "heart js" and updates the "Color" field to the first available color.
        $js_puns.slice(1,4).hide();
        $heart_js.show();
        $newOption.attr('selected', false);
        $('#color option:eq(4)').attr('selected', true);
    }
    $newOption.attr('selected', true);
});

//Event listner for updating and displaying the total activity cost 
$($inputActivities).on('click', function(event) {
    //the clicked input element
    const $inputClicked = $(event.target);

    const $nameInputClicked = $inputClicked.attr('name');

    $inputClicked.attr('checked', true);

    const $checked = $(this).prop("checked");

    //Gets the `data-cost` attribute value of the clicked element stored in the variable above
    const $dataCost = parseInt($(event.currentTarget).attr('data-cost'));

    const $dayTime = $(event.currentTarget).attr('data-day-and-time');

    // If the input element is checked, the cost of the currently clicked activity is added to the total cost variable,  otherwise the cost is subtracted.
    if ($checked === true){
        $totalActivityCost += $dataCost;
    }else{
        $totalActivityCost -= $dataCost;
        $nameInputClicked.disabled = true;
    }

    //Show the total activity cost
    $('.activities div').text('Total: $' + $totalActivityCost);
    
    //Disabling conflicting activities: when an activity is marked, any activity that occurs on the same day and time is disabled
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

// -Name field isn’t blank.
function isValidUsername(nameField) {
    return /^[a-z]+$/.test(nameField);
}

// -Email field contains validly formatted e-mail address: (doesn’t have to check that it's a real
//  e-mail address, just that it's formatted like one: dave@teamtreehouse.com,for example).
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
  
// credit card: 13 to 16-digit
function isValidCreditCardNumber(cardNumber) {
    return /^[0-9]{13}(?:[0-9]{0,3})?$/.test(cardNumber); //onli numbers
    //return /^[A-Za-z0-9]{13}(?:[A-Za-z0-9]{0,3})?$/.test(cardNumber); //accept numeric and non-numeric characters 
}

// zip code: 5-digit
function isValidZipCode(zipCode) {
    return /^[0-9]{5}$/.test(zipCode);
}

//CVV value: 3-numbers
function isValidCvvCode(cvvCode) {
    return /^[0-9]{3}$/.test(cvvCode);
}

// Form cannot be submitted (the page does not refresh when the submit button is clicked) 
// until the following requirements have been met:
$('button').on('click', function(e) {
//$('form').on('submit', function(e) {
    if (!isValidUsername(nameField.val())){
        e.preventDefault();
        $('label[for="name"]').css({"color": "red"});
        nameField.css({"borderColor": "red"});
        $('#name').focus();
        //console.log('nombre invalido');
    } else {
        $('label[for="name"]').css({"color": ""});
        nameField.css({"borderColor": ""});
        //console.log('name ok');
    }

    if (!isValidEmail(emailField.val())){
        e.preventDefault();
        $('label[for="mail"]').css({"color": "red"});
        emailField.css({"borderColor": "red"});
        //$('#mail').focus();
        console.log('email invalido');
    } else {
        $('label[for="mail"]').css({"color": ""});
        emailField.css({"borderColor": ""});
        console.log('email ok');
    }
    
    if ($('.activities input:checked').length === 0){
        // -At least one checkbox under "Register for Activities" section must be selected.
        console.log("entra en if de activities");
        $('.activities legend').css({"color": "red"});
        //alert('Please check any activity box.');
        e.preventDefault();
        // e.stopPropagation();
        //return false;
    } else {
        $('.activities legend').css({"color": ""});
    }
    
    if ($('#payment option[value="credit card"]').prop('selected')) {
        // -If "Credit Card" is the selected payment option, the three fields accept only numbers:
        //  a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value.
        
        if (!isValidCreditCardNumber(cardNumber.val())){
            e.preventDefault();
            $('label[for="cc-num"]').css({"color": "red"});
            cardNumber.css({"borderColor": "red"});
            console.log('card number invalido');
        } else {
            $('label[for="cc-num"]').css({"color": ""});
            cardNumber.css({"borderColor": ""});
        }

        if (!isValidZipCode(zipCode.val())){
            e.preventDefault();
            $('label[for="zip"]').css({"color": "red"});
            zipCode.css({"borderColor": "red"});
            console.log('zip code invalido');
        } else {
            $('label[for="zip"]').css({"color": ""});
            zipCode.css({"borderColor": ""});
        }

        if (!isValidCvvCode(cvvCode.val())){
            e.preventDefault();
            $('label[for="cvv"]').css({"color": "red"});
            cvvCode.css({"borderColor": "red"});
            console.log('cvv code invalido');
        } else {
            $('label[for="cvv"]').css({"color": ""});
            cvvCode.css({"borderColor": ""});
        }
    }
    console.log("Has hecho click");
});