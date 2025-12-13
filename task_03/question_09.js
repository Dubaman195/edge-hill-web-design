document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("set_age").addEventListener("submit", showAge);
});

function showAge(event) {
  event.preventDefault();
  let age = document.getElementsByName("age")[0].value;
  document.getElementById("age").innerHTML = age;
}
