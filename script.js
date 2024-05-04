function getTag(id) {
    return document.getElementById(id);
}

function displayNone(id) {
    getTag(id).style.display = "none";
}

function displayBlock(id) {
    getTag(id).style.display = "block";
}

function registerEmail() {
    email = getTag("footerInput").value;
    if (email.includes("@") && email.includes(".")) {
        getTag("footerInput").style.color = "inherit";
        displayNone("errorMessage");
        alert("Email successfully registered!");
    } else {
        getTag("footerInput").style.color = "#f25f3a";
        displayBlock("errorMessage");
    }
}

function openMenu() {
    getTag("menuHamburger").innerHTML = getTag("menu").innerHTML;
    displayBlock("menuHamburger");
    displayBlock("iconClose");
    displayNone("iconHamburger");
    displayNone("introImage");
}

function closeMenu() {
    displayBlock("iconHamburger");
    displayBlock("introImage");
    displayNone("menuHamburger");
    displayNone("iconClose");
}
