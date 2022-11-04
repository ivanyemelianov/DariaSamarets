// Get the modal
var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");
var modal4 = document.getElementById("modal-4");
var modal5 = document.getElementById("modal-5");
var modal6 = document.getElementById("modal-6");
var modal7 = document.getElementById("modal-7");
var modal8 = document.getElementById("modal-8");
var modal9 = document.getElementById("modal-9");

// Get the button that opens the modal
var btn1 = document.getElementById("modal-1-btn");
var btn2 = document.getElementById("modal-2-btn");
var btn3 = document.getElementById("modal-3-btn");
var btn4 = document.getElementById("modal-4-btn");
var btn5 = document.getElementById("modal-5-btn");
var btn6 = document.getElementById("modal-6-btn");
var btn7 = document.getElementById("modal-7-btn");
var btn8 = document.getElementById("modal-8-btn");
var btn9 = document.getElementById("modal-9-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-1")[0];
var span2 = document.getElementsByClassName("close-2")[0];
var span3 = document.getElementsByClassName("close-3")[0];
var span4 = document.getElementsByClassName("close-4")[0];
var span5 = document.getElementsByClassName("close-5")[0];
var span6 = document.getElementsByClassName("close-6")[0];
var span7 = document.getElementsByClassName("close-7")[0];
var span8 = document.getElementsByClassName("close-8")[0];
var span9 = document.getElementsByClassName("close-9")[0];


// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
  modal4.style.display = "block";
}

btn5.onclick = function() {
  modal5.style.display = "block";
}

btn6.onclick = function() {
  modal6.style.display = "block";
}

btn7.onclick = function() {
  modal7.style.display = "block";
}

btn8.onclick = function() {
  modal8.style.display = "block";
}

btn9.onclick = function() {
  modal9.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
span9.onclick = function() {
  modal9.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 || event.target == modal9 ) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal8.style.display = "none";
    modal9.style.display = "none";
  }
}