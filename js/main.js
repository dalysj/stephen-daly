document.addEventListener('DOMContentLoaded', () => {
    // declare a function to expand an image in the modal view
    const expandImageInModalView = (element) => {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        const captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    };

    // get all project images
    const projectImages = document.querySelectorAll('#project-images img');

    // iterate through each image
    for (let image of projectImages) {
        // assign a click listener to each image
        image.addEventListener('click', () => {
            expandImageInModalView(image);
        });
    }
});
