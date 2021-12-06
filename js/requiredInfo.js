/* 
 This document is used in Request Info page to check the required fields
*/

//function to check validation (Required field)
function checkReqFields() {
  var returnValue;
  var name = document.getElementById("txtName").value;
  var last = document.getElementById("txtLast").value;
  var email = document.getElementById("txtEmail").value
  var code = document.getElementById("txtCode").value
  var info = document.getElementById("txtInfo").value

  returnValue = true;
  // checks the first name
  if (name.trim() == "") {
      document.getElementById("reqTxtName").innerHTML = "* First Name is required.";
      returnValue = false;
  }
    // checks the last name
  if (last.trim() == "") {
      document.getElementById("reqTxtLast").innerHTML = "* Last Name is required.";
      returnValue = false;
  }
    // checks the email address
  if (email.trim() == "") {
    document.getElementById("reqTxtEmail").innerHTML = "* E-mail is required.";
    returnValue = false;
  }
  // checks the postal code
  if (code.trim() == "") {
  document.getElementById("reqTxtCode").innerHTML = "* Postal Code is required.";
  returnValue = false;
  }
  // checks the information field
  if (info.trim() == "") {
  document.getElementById("reqTxtInfo").innerHTML = "* This field is required.";
  returnValue = false;
  }
  return returnValue;
}