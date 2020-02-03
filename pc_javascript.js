"use strict"
/*
Title: Javascript Functions to Book an Appointment at Super Curl Salon.
File Name: pc_javascript.js
Description: JS codes to verify input fields.  Submit button does not precess request until all required fields are addressed.  Upon clicking the submit button a  confirmation is displaed to the form page.
Author: Letisha Rahming
Creation Date: 1/28/2020
Date Completed:
Last Edited:1/28/2020
*/


//Book an appointment
document.getElementById("scsbutton").addEventListener("click", setUpPage);

// function that calls ALL OTHER functions on the click of the button
function setUpPage() {
	verifyClient();
	verifyTime();
	verifyService();
	confirmation();
}

function verifyClient() {
  var clientType = document.forms.form.elements.client[0];
  
	if (clientType.validity.valueMissing){
		window.alert("Please choose a client type");
	}else{ 
		/*window.alert("Thank you for choosing a client")*/;
  }
}

//A time of Day radio button must be selected.  All radio buttons share teh same class "time".
  function verifyTime() {
  var timeFrame = document.forms.form.elements.time[0];
  
	if (timeFrame.validity.valueMissing){
		window.alert("Please choose a time slot");
	}else{ 
	;
  }
}

//Absolutely one service must be chosen from either hair servies, barber services, or hair spa services.  All these radio buttons share the same class "sservice"
function verifyService() {
  var serviceType = document.forms.form.elements.sservice[0];
	if (serviceType.validity.valueMissing){
		window.alert("Please choose a salon service");
	}else{ 
		/*window.alert("Thank you for choosing a salon service")*/;
  }
}

function confirmation() {
	document.getElementById("confirm").innerHTML="Appointment request sent. \n Our receptionist will call you shortly to confirm the details of your appointment. \n Thank you for choosing Super Curl Salon for your styling needs.";
	}
