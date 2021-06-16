const dropForm = document.querySelector('#dropdownForm');
document.querySelector('#btm-drop').addEventListener('click', function() {
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
        dropForm.style.height = "0%";
    } else {
        dropForm.style.display = "block";
        dropForm.style.height = "100%";
    }

});
document.querySelector('#close-form').addEventListener('click', function() {
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
    } else {
        dropForm.style.display = "block";
    }

});