var link = document.querySelector(".search-button");
var formwrap = document.querySelector(".search-form-wrapper");
var form = document.querySelector(".search-form");
var datein = form.querySelector("[name=date-in]");
var dateout = form.querySelector("[name=date-out]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var storageadults = localStorage.getItem("adults");
var storagechildren = localStorage.getItem("children");

if (storageadults) {
      adults.value = storageadults;
    }

if (storagechildren) {
      children.value = storagechildren;
    }

link.addEventListener("click", function(event) {
event.preventDefault();
if (formwrap.classList.contains("search-form-error")){
    formwrap.classList.remove("search-form-error");
  }
formwrap.classList.toggle("search-form-hidden");
formwrap.classList.toggle("search-form-show");
datein.focus();
});

form.addEventListener("submit", function(event) {

  if (formwrap.classList.contains("search-form-error")){
    formwrap.classList.remove("search-form-error");
  }

  if (!datein.value || !dateout.value || !adults.value || !children.value) {
    event.preventDefault();
    formwrap.classList.add("search-form-error");
  }
  else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }

});

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (formwrap.classList.contains("search-form-show")) {
        formwrap.classList.toggle("search-form-hidden");
      }
      if (formwrap.classList.contains("search-form-error")){
      formwrap.classList.remove("search-form-error");
      }
   }
 });
