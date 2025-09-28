// Handles showing or hiding the cupcake details on click
function toggleDocs(event) {

    if (event.target && event.target.className == 'cupcake-name') {

        let next = event.target.nextElementSibling;


        if (next.classList.contains("hide")) {
            next.classList.remove("hide");

        } else {
            next.classList.add("hide");
        }
    }
}

document.addEventListener('click', toggleDocs, true);