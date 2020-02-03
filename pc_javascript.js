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


//Book an appointment event listener
document.getElementById("scsbutton").addEventListener("click", setUpPage);

// function that calls ALL OTHER functions on the click of the button
function setUpPage() {
	verifyClient();
	verifyTime();
	verifyService();
	confirmation();
}

//A client type must be selected.  This is useful for data queries and formulating cost of service  All radio buttons share the same class "client".
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

//This function garantees at least the client contact information is sent to the receptionist to confirm details of an appointment request.  Since curly hair usually requires more of the stylist's   Overbooking is not allowed
function confirmation() {
	if(((document.getElementById("clientfn").value!="")&&(document.getElementById("clientln").value!="")&&(document.getElementById("clientphone").value!="") /*&& (document.getElementsByClassName("client").checked == true)*/)){
		document.getElementById("scsbutton").value="Thank you. Our receptionist will call you shortly to confirm your appointment.";
		document.getElementById("scsbutton").style="background-color:lightgreen";
	}
}