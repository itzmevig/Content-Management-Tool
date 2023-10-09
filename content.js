document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const addTextButton = document.getElementById("addText");
    const imageInput = document.getElementById("imageInput");
    const addImageButton = document.getElementById("addImage");
    const contentPreview = document.getElementById("contentPreview");

    addTextButton.addEventListener("click", function() {
        const text = textInput.value;
        const newTextElement = document.createElement("p");
        newTextElement.textContent = text;
        contentPreview.appendChild(newTextElement);
        textInput.value = "";
    });

    addImageButton.addEventListener("change", function() {
        const file = imageInput.files[0];
        if (file) {
            const imageElement = document.createElement("img");
            imageElement.src = URL.createObjectURL(file);
            contentPreview.appendChild(imageElement);
            imageInput.value = "";
        }
    });
});
