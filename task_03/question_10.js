document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("left").addEventListener("click", () => setAlignment("left"));
  document.getElementById("center").addEventListener("click", () => setAlignment("center"));
  document.getElementById("right").addEventListener("click", () => setAlignment("right"));
  document.getElementById("justify").addEventListener("click", () => setAlignment("justify"));
});

function setAlignment(al) {
  document.querySelectorAll("p").forEach(p => {
    p.style.textAlign = al;
  });
}
