function creditCard(event) {
    let numberCard = event.target.value;
    numberCard = numberCard.replace(/\D/g, '');
    numberCard = numberCard.replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = numberCard;
}
function CVV(event) {
    let visaCard = event.target.value;

    visaCard = visaCard.replace(/\D/g, '');
    event.target.value = visaCard;
}
function zipCode(event) {
    let zipCodeCVV = event.target.value;

    zipCodeCVV = zipCodeCVV.replace(/\D/g, '');
    event.target.value = zipCodeCVV;
}


function formatString(event) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
        return;
    }

    var inputValue = event.target.value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
        /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
        /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
        /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
        /\/\//g, '/' // Prevent entering more than 1 `/`
    );

    var parts = inputValue.split('/');
    var month = parseInt(parts[0], 10);
    if (month > 12) {
        console.log("Invalid month");
        return;
    }

    event.target.value = inputValue;
}
function errorMessage() {
    

    var error1 = document.getElementById("error1");
    var numberCardValue = document.getElementById("numberCard").value;

    if (isNaN(numberCardValue) && numberCardValue.length !== 19) {
        document.getElementById("numberCard").style.border = "2px solid red";
        error1.textContent = "Please enter a 16-digit number";
        error1.style.color = "red";
    } else if (numberCardValue.length !== 19) {
        document.getElementById("numberCard").style.border = "2px solid red";
        error1.textContent = "Please enter a 16-digit number";
        error1.style.color = "red";
    } else {
        error1.textContent = "";
        document.getElementById("numberCard").style.border = "2px solid";
    }

    var error2 = document.getElementById("error2");

    if (isNaN(document.getElementById("visaCard").value) || document.getElementById("visaCard").value.length !== 3) {
        document.getElementById("visaCard").style.border = "2px solid red";
        error2.textContent = "Please enter a 3 number";
        error2.style.color = "red";
    } else {
        document.getElementById("visaCard").style.border = "2px solid";
        error2.textContent = "";
    }

    var error3 = document.getElementById("error3");

    if (isNaN(document.getElementById("code").value) || document.getElementById("code").value.length !== 12) {
        document.getElementById("code").style.border = "2px solid red";
        error3.textContent = "Please enter a 12 number";
        error3.style.color = "red";
    } else {
        document.getElementById("code").style.border = "2px solid";
        error3.textContent = "";
    }

    var error4 = document.getElementById("error4");
    var timeValue = document.getElementById("time").value;

    if (isNaN(timeValue)) {
        document.getElementById("time").style.border = "2px solid ";
        error4.textContent = "";
        error4.style.color = "red";
    } else if (timeValue.length !== 5) {
        document.getElementById("time").style.border = "2px solid red";
        error4.textContent = "Please enter a 5 number";
        error4.style.color = "red";
    }
}
document.getElementById("submitBtn").onclick = function() {
    
    errorMessage();

    
    var errorMessages = document.querySelectorAll('.err');

    
    var errors = Array.from(errorMessages).filter(function(error) {
        return error.textContent.trim().length > 0;
    });

    
    if (errors.length === 0) {
        
        var submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Loading...";

    
        setTimeout(function () {
            
            submitBtn.disabled = false;
            submitBtn.textContent = "Confirm Payment";

        
            checkEmptyErrors() === true
                document.getElementById("fullName").style.border = "3px solid green";
                document.getElementById("numberCard").style.border = "3px solid green";
                document.getElementById("visaCard").style.border = "3px solid green";
                document.getElementById("code").style.border = "3px solid green";
                document.getElementById("time").style.border = "3px solid green";
                var successMessage = document.getElementById("Successful");
                successMessage.textContent = "Payment successful!";
                successMessage.style.fontSize = "10px";
                successMessage.style.color = "green";
                
        }, 3000);
    } else {
        
    }
};

function selectEmptyErrors() {
    
    var errorElements = document.querySelectorAll('.err');
    var emptyErrors = [];

    
    errorElements.forEach(function(error) {
        if (error.textContent.trim() === "") {
            emptyErrors.push(error);
        }
    });

    return emptyErrors;
}

function checkEmptyErrors() {
    
    var emptyErrors = selectEmptyErrors();
    return emptyErrors.length === 0;
}


