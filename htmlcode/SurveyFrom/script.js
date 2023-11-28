// function validateName(name) {
//   // Validate name (only letters and up to 10 characters)
//   return /^[a-zA-Z]{1,10}$/.test(name);
// }

// this update code
function validateFirstName() {
  var firstNameInput = document.getElementById('firstName');
  var firstNameError = document.getElementById('firstNameError');
  var firstName = firstNameInput.value.trim();

  if (/^[a-zA-Z]+$/.test(firstName)) {
      firstNameError.textContent = '';
  } else {
      firstNameError.textContent = ' Please enter only letters.';
  }
}

function validateLastName() {
  var lastNameInput = document.getElementById('lastName');
  var lastNameError = document.getElementById('lastNameError');
  var lastName = lastNameInput.value.trim();

  if (/^[a-zA-Z]+$/.test(lastName)) {
      lastNameError.textContent = '';
  } else {
      lastNameError.textContent = ' Please enter only letters.';
  }
}

function validateDOB() {
  var dobInput = document.getElementById('dob');
  var dobError = document.getElementById('dobError');
  var dob = new Date(dobInput.value);

  if (!isNaN(dob.getTime()) && dob <= new Date()) {
      dobError.textContent = '';
  } else {
      dobError.textContent = 'Invalid date. Please enter a valid date.';
  }
}

function validateCountry() {
  var countryInput = document.getElementById('country');
  var countryError = document.getElementById('countryError');

  if (countryInput.value !== '') {
      countryError.textContent = '';
  } else {
      countryError.textContent = 'Please select a country.';
  }
}


function validateEmail() {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var email = emailInput.value.trim();

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = '';
  } else {
      emailError.textContent = 'Please enter a valid email address.';
  }
}
function validateMobile() {
    var mobileInput = document.getElementById('mobile');
    var mobileError = document.getElementById('mobileError');
    var mobile = mobileInput.value.trim();

    if (/^\d{10}$/.test(mobile)) {
        mobileError.textContent = '';
    } else {
        mobileError.textContent = 'Invalid mobile number.';
    }
}

function validateGender() {
  var genderInputs = document.querySelectorAll('input[name="gender"]:checked');
  var genderError = document.getElementById('genderError');

  if (genderInputs.length > 0) {
      genderError.textContent = '';
  } else {
      genderError.textContent = 'Please select at least one gender.';
  }
}









     //   main code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function submitForm() {
  if (validateForm()) {
    // Perform form validation here
    // You can check each field for validity

    // Display popup with form data
    displayPopup();
  }
}

// Add more validation functions as needed

// Rest of your script.js code


function submitForm() {
  // Perform form validation here
  // You can check each field for validity

  // Display popup with form data
  displayPopup();
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function displayPopup() {
  var popup = document.getElementById("popup");
  var popupData = document.getElementById("popupData");

  // Get form data
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var gender = getSelectedGender();
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  // Display form data in the popup
  popupData.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

  // Show the popup
  popup.style.display = "block";
}

function getSelectedGender() {
  var gender = "";
  var checkboxes = document.getElementsByName("gender");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      gender += checkboxes[i].nextSibling.textContent.trim() + " ";
    }
  }

  return gender.trim();
}

function closePopup() {
  var popup = document.getElementById("popup");

  // Hide the popup
  popup.style.display = "none";

  // Reset the form after closing the popup
  resetForm();
}