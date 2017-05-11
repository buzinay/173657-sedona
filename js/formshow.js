var link = document.querySelector(".search-button");
var formwrap = document.querySelector(".search-form-wrapper");
var form = document.querySelector(".search-form");
var datein = form.querySelector("[name=date-in]");
var dateout = form.querySelector("[name=date-out]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");

formwrap.classList.toggle("search-form-hidden");

link.addEventListener("click", function(event) {
    event.preventDefault();
    if (formwrap.classList.contains("search-form-error")) {
        formwrap.classList.remove("search-form-error");
      }
    formwrap.classList.toggle("search-form-hidden");
    datein.focus();
  });

form.addEventListener("submit", function(event) {
    if (formwrap.classList.contains("search-form-error")) {
      formwrap.classList.remove("search-form-error");
    }

    if (!datein.value || !dateout.value || !adults.value || !children.value) {
      event.preventDefault();
      formwrap.classList.add("search-form-error");
    }
  });

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (!formwrap.classList.contains("search-form-hidden")) {
        formwrap.classList.toggle("search-form-hidden");
      }
      if (formwrap.classList.contains("search-form-error")){
        formwrap.classList.remove("search-form-error");
      }
   }
 });
