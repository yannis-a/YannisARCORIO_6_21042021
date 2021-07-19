import MediaFactory from './MediaFactory.js';
import Lightbox from '../utils/Carousel.js';
import Carousel from '../utils/Carousel.js';


export default class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    };

    getGallery(dataMedia) {
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];
        dataMedia.forEach(element => {
            let mediaHTML = mediaFactory.getMedia(element);

            if (id == element.photographerId) {
                $('#medias').append(
                    $('<article class="media-container"></article>').append(
                        $('<a href="#" title="' + element.title + '"></a>').append(
                            $("<div class=\"media-div\" aria-label=\"" + element.title + ",closeup view\"></div>").append(
                                mediaHTML
                            )
                        ),
                        $('<div class="media-infos"></div>').append(
                            $('<h2 class="media-title">' + element.title + '</h2>'),
                            $('<div class="media-like"></div>').append(
                                $('<span class="media-like-number"></span>').append(
                                    $('<a class="like-counter">' + element.likes + '</a>')
                                ),
                                $('<i class="fas fa-heart heart-btn" aria-label="likes" role="button" data-value="' + element.likes + '"></i>')
                            )
                        )
                    )
                )
                this.totalLike += parseInt(element.likes);
                currentMedia.push(mediaHTML);
                currentMediaName.push(element.title);
                new Carousel().init(currentMedia, currentMediaName);
            }
        })
        return this;
    };
}
