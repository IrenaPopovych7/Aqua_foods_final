document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownButton = document.querySelector(".custom-dropdown-toggle");
    const allSections = document.querySelectorAll(".partners-grid");

    function hideAllSections() {
        allSections.forEach(section => section.style.display = "none");
    }

    // hideAllSections(); 
    
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

