document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownButton = document.querySelector(".custom-dropdown-toggle");
    const allSections = document.querySelectorAll(".partners-grid");

    function hideAllSections() {
        allSections.forEach(section => section.style.display = "none");
    }

    hideAllSections(); 
    
    const waterId = document.querySelector("#water");
    
    if ( waterId ) waterId.style.display = "grid";

    dropdownItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            const selectedSectionId = this.getAttribute("href").substring(1);
            
            hideAllSections();

            document.getElementById(selectedSectionId).style.display = "grid";

            dropdownButton.innerHTML = this.innerText + ' <span class="dropdown-arrow"></span>';
        });
    });
});

function redirectToContacts() {
    window.location.href = "index.html#contacts";
}
function redirectToMain() {
    window.location.href = "index.html";
}
function redirectToAbout() {
    window.location.href = "index.html#about-section";
}
function redirectToWater() {
    window.location.href = "our-products.html#water";
}
function redirectToAppetizers() {
    window.location.href = "our-products.html#appetizers";
}
function redirectToSyrop() {
    window.location.href = "our-products.html#syrop";
}
function redirectToSpicies() {
    window.location.href = "our-products.html#spicies";
}
function redirectToPasta() {
    window.location.href = "our-products.html#pasta";
}
function redirectToCan() {
    window.location.href = "our-products.html#can";
}
function redirectToKids() {
    window.location.href = "our-products.html#kids";
}
function redirectToSouce() {
    window.location.href = "our-products.html#souce";
}
