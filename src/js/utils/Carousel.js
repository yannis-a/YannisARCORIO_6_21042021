export default class Carousel {
    constructor() {
        this.currentIndex = 0;
    }


    init(currentMedia, currentMediaName) {
        let mediaArray = Array.from(document.getElementsByClassName('media'));


        mediaArray.forEach((media, index) => media.addEventListener("click", () => {
            let carouselMedia = $('#carousel-media');
            let carouselMediaName = $('#carousel-media-name');
            this.currentIndex = index;
            document.getElementById('carousel').style.display = 'block';
            carouselMedia.html(currentMedia[index])
            carouselMediaName.html(currentMediaName[index]);
        }))
        this.previous(document.querySelector('.left-arrow-carousel'), currentMedia, currentMediaName);
        this.next(document.querySelector('.right-arrow-carousel'), currentMedia, currentMediaName);
        this.close();
        this.keyboard(currentMedia, currentMediaName);
        return this
    }

    // return to previous media
    previous(elt, currentMedia, currentMediaName) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let carouselMedia = $('#carousel-media');
            let carouselMediaName = $('#carousel-media-name');

            if (this.currentIndex < 0) {
                this.currentIndex = currentMedia.length - 1;
                this.currentIndex = currentMediaName.length - 1;
            }

            carouselMedia.html(currentMedia[this.currentIndex])
            carouselMediaName.html(currentMediaName[this.currentIndex]);
        })
    }

    // turn to the next media
    next(elt, currentMedia, currentMediaName) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let carouselMedia = $('#carousel-media');
            let carouselMediaName = $('#carousel-media-name');

            if (this.currentIndex > currentMediaName.length - 1) {
                this.currentIndex = 0;
            }
            carouselMedia.html(currentMedia[this.currentIndex])
            carouselMediaName.html(currentMediaName[this.currentIndex]);
        })
    }

    close() {
        document.querySelector('.close-carousel-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('carousel');

            lightbox.style.display = 'none';
        })
    }

    keyboard(currentMedia, currentMediaName) {
        document.addEventListener('keydown', (key) => {
            let carouselMedia = $('#carousel-media');
            let carouselMediaName = $('#carousel-media-name');

            // ESCAPE TO CLOSE
            if (key.code == "Escape") {
                let lightBox = document.getElementById('carousel');
                lightBox.style.display = 'none';
            }

            // ARROW RIGHT TO STEP RIGHT
            else if (key.code == "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                carouselMedia.html(currentMedia[this.currentIndex])
                carouselMediaName.html(currentMediaName[this.currentIndex]);
            }

            // ARROW LEFT TO STEP LEFT
            else if (key.code == "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }
                carouselMedia.html(currentMedia[this.currentIndex])
                carouselMediaName.html(currentMediaName[this.currentIndex]);
            }
        });
    }
}
