// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");
var modal4 = document.getElementById("modal-4");
var modal5 = document.getElementById("modal-5");
var modal6 = document.getElementById("modal-6");
var modal7 = document.getElementById("modal-7");
var modal8 = document.getElementById("modal-8");
var modal9 = document.getElementById("modal-9");
var modal10 = document.getElementById("modal-10");
var modal11 = document.getElementById("modal-11");
var modal12 = document.getElementById("modal-12");
var modal13 = document.getElementById("modal-13");
var modal14 = document.getElementById("modal-14");
var modal15 = document.getElementById("modal-15");
var modal16 = document.getElementById("modal-16");
var modal17 = document.getElementById("modal-17");
var modal18 = document.getElementById("modal-18");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("modal-1-btn");
var btn2 = document.getElementById("modal-2-btn");
var btn3 = document.getElementById("modal-3-btn");
var btn4 = document.getElementById("modal-4-btn");
var btn5 = document.getElementById("modal-5-btn");
var btn6 = document.getElementById("modal-6-btn");
var btn7 = document.getElementById("modal-7-btn");
var btn8 = document.getElementById("modal-8-btn");
var btn9 = document.getElementById("modal-9-btn");
var btn10 = document.getElementById("modal-10-btn");
var btn11 = document.getElementById("modal-11-btn");
var btn12 = document.getElementById("modal-12-btn");
var btn13 = document.getElementById("modal-13-btn");
var btn14 = document.getElementById("modal-14-btn");
var btn15 = document.getElementById("modal-15-btn");
var btn16 = document.getElementById("modal-16-btn");
var btn17 = document.getElementById("modal-17-btn");
var btn18 = document.getElementById("modal-18-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close-1")[0];
var span2 = document.getElementsByClassName("close-2")[0];
var span3 = document.getElementsByClassName("close-3")[0];
var span4 = document.getElementsByClassName("close-4")[0];
var span5 = document.getElementsByClassName("close-5")[0];
var span6 = document.getElementsByClassName("close-6")[0];
var span7 = document.getElementsByClassName("close-7")[0];
var span8 = document.getElementsByClassName("close-8")[0];
var span9 = document.getElementsByClassName("close-9")[0];
var span10 = document.getElementsByClassName("close-10")[0];
var span11 = document.getElementsByClassName("close-11")[0];
var span12 = document.getElementsByClassName("close-12")[0];
var span13 = document.getElementsByClassName("close-13")[0];
var span14 = document.getElementsByClassName("close-14")[0];
var span15 = document.getElementsByClassName("close-15")[0];
var span16 = document.getElementsByClassName("close-16")[0];
var span17 = document.getElementsByClassName("close-17")[0];
var span18 = document.getElementsByClassName("close-18")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

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
btn10.onclick = function() {
  modal10.style.display = "block";
}
btn11.onclick = function() {
  modal11.style.display = "block";
}
btn12.onclick = function() {
  modal12.style.display = "block";
}
btn13.onclick = function() {
  modal13.style.display = "block";
}
btn14.onclick = function() {
  modal14.style.display = "block";
}
btn15.onclick = function() {
  modal15.style.display = "block";
}
btn16.onclick = function() {
  modal16.style.display = "block";
}
btn17.onclick = function() {
  modal17.style.display = "block";
}
btn18.onclick = function() {
  modal18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

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
span10.onclick = function() {
  modal10.style.display = "none";
}
span11.onclick = function() {
  modal11.style.display = "none";
}
span12.onclick = function() {
  modal12.style.display = "none";
}
span13.onclick = function() {
  modal13.style.display = "none";
}
span14.onclick = function() {
  modal14.style.display = "none";
}
span15.onclick = function() {
  modal15.style.display = "none";
}
span16.onclick = function() {
  modal16.style.display = "none";
}
span17.onclick = function() {
  modal17.style.display = "none";
}
span18.onclick = function() {
  modal18.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 || event.target == modal9 || event.target == modal10 || event.target == modal11 || event.target == modal12 || event.target == modal13 || event.target == modal14 || event.target == modal15 || event.target == modal16 || event.target == modal17 || event.target == modal18 ) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal8.style.display = "none";
    modal9.style.display = "none";
    modal10.style.display = "none";
    modal11.style.display = "none";
    modal12.style.display = "none";
    modal13.style.display = "none";
    modal14.style.display = "none";
    modal15.style.display = "none";
    modal16.style.display = "none";
    modal17.style.display = "none";
    modal18.style.display = "none";
  }
}