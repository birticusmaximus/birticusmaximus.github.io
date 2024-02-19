document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    let images = Array.from({length: 25}, (v, k) => `images/image${k + 1}.jpeg`);
    shuffleArray(images);

    const imgElement = document.getElementById('currentImage');
    const nextButton = document.getElementById('nextButton');
    const refreshButton = document.getElementById('refreshButton');

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    });

    refreshButton.addEventListener('click', () => {
        shuffleArray(images);
        currentIndex = 0;
        imgElement.src = images[currentIndex];
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
