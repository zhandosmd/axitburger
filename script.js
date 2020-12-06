
// // ******** slick slider ********
// $('.single-item').slick();

// ******** map ********
ymaps.ready(init);
function init() {
    var options = {
        center: [47.100573, 51.925173],
        zoom: 18
    }
    var myMap = new ymaps.Map("map", options);

    // creating a content layout.
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Click to see content',
        balloonContent: 'This is a our actual place'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin256.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-100, -70],
        iconContentLayout: MyIconContentLayout
    });
    var schoolPlace = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Click to see content',
        balloonContent: 'Here located school'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/school21.png',
        iconImageSize: [40, 40],
        iconImageOffset: [100, -80],
        iconContentLayout: MyIconContentLayout
    });
    var shopPlace = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Click to see content',
        balloonContent: 'Here located shop'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'images/shop312.png',
        iconImageSize: [30, 30],
        iconImageOffset: [60, 50],
        iconContentLayout: MyIconContentLayout
    });
    var myPolyline = new ymaps.Polyline([
        // Specifying the coordinates of the vertices of the polyline.
        [55.80, 37.50],
        [55.80, 37.40],
        [55.70, 37.50],
        [55.70, 37.40]
    ], {
        /**
         * Describing the properties of the geo object.
         *  The contents of the balloon.
         */
        balloonContent: "Polyline"
    }, {
        /**
         * Setting options for the geo object. Disabling the close button on a balloon.
         * 
         */
        balloonCloseButton: false,
        // The line color.
        strokeColor: "#000000",
        // Line width.
        strokeWidth: 4,
        // The transparency coefficient.
        strokeOpacity: 0.5
    });
    myMap.geoObjects
        .add(myPlacemark)
        .add(schoolPlace)
        .add(shopPlace)
        .add(myPolyline);

};
// ******** set date dynamically ********
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ******** fixed header ********
const header1 = document.querySelector(".header");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
    const scrollHeader = window.pageYOffset;
    const headerHeight = header1.getBoundingClientRect().height;
    if (scrollHeader > headerHeight) {
        header1.classList.add("header__fixed");
    } else {
        header1.classList.remove("header__fixed");
    }
});

// ******** BACK TO TOP BUTTON ********
mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
    const scrollHeader = window.pageYOffset;
    if (scrollHeader > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
});
mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// ******** smooth scroll ********
