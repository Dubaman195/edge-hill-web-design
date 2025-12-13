document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("more").addEventListener("click", setKeyword);
});

function setKeyword() {
    document.getElementById("keywords").innerHTML += "<li><label>Keyword <input type='text' name='keyword'/></label></li>";
}