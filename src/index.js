document.addEventListener("DOMContentLoaded", function () {
    const allSections = document.querySelectorAll(".partners-grid"); // All product sections
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownButton = document.querySelector(".custom-dropdown-toggle");

    function hideAllSections() {
        allSections.forEach(section => section.style.display = "none");
    }
    

    function showSectionFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {          
                section.style.display = "grid";
            } else {
                console.error(`No section found with ID '${hash}'`);
            }
        }
    }

    // Hide all sections initially
    hideAllSections();

    const waterId = document.querySelector("#water");
    
    if ( waterId ) waterId.style.display = "grid";
    // Show section based on URL hash on page load
    showSectionFromHash();

    // Listen for hash changes (if user clicks a link with #)
    window.addEventListener("hashchange", showSectionFromHash);

    // Handle dropdown click logic
    dropdownItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedSectionId = this.getAttribute("href").substring(1);

            hideAllSections();
            window.location.hash = selectedSectionId; 
            dropdownButton.innerHTML = this.innerText + ' <span class="dropdown-arrow"></span>';
        });
    });
});

// Redirect functions
function redirectToContacts() {
    window.location.href = "index.html#contacts";
}

function redirectToMain() {
    window.location.href = "index.html";
}

function redirectToAbout() {
    window.location.href = "index.html#about-section";
}

// Product Redirects
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
