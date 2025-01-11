
let editMode = false;

function enableEdit() {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (username === "TheRip778" && password === "158228") {
        editMode = true;
        alert("Edit mode enabled!");
        activateEditableElements();
    } else {
        alert("Invalid credentials!");
    }
}

function activateEditableElements() {
    if (editMode) {
        document.querySelectorAll(".editable").forEach((element) => {
            element.contentEditable = true;
            element.style.border = "1px dashed red";
        });
    }
}

function saveChanges() {
    if (editMode) {
        document.querySelectorAll(".editable").forEach((element) => {
            element.contentEditable = false;
            element.style.border = "none";
        });
        alert("Changes saved!");
    } else {
        alert("You are not in edit mode!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.querySelector("#editButton");
    const saveButton = document.querySelector("#saveButton");

    if (editButton) {
        editButton.addEventListener("click", enableEdit);
    }

    if (saveButton) {
        saveButton.addEventListener("click", saveChanges);
    }
});
