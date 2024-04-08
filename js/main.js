window.addEventListener('load', function() {
    init();

    var downloadButton = document.getElementById('downloadButton');

    downloadButton.addEventListener('click', function() {
        console.log("Knop geklikt");
        if (typeof(Storage) !== "undefined") {
            var currentPageUrl = window.location.href;
            var currentPageTitle = document.title;
            localStorage.setItem(currentPageUrl, currentPageTitle);
            alert("Pagina toegevoegd aan je homescherm");
        } else {
            alert("Error");
        }
    });
});

var init = function() {
    console.log('Init gecalled');
    var algemeneVoorwaarden = document.querySelector('.link');
    algemeneVoorwaarden.addEventListener('click', openPopup);

    var cookiesLink = document.querySelector('.link.cookies');
    cookiesLink.addEventListener('click', openPopup);

    var privacyLink = document.querySelector('.link.privacy');
    privacyLink.addEventListener('click', openPopup);

    var closeAlgemeneVoorwaarden = document.querySelector('.close');
    closeAlgemeneVoorwaarden.addEventListener('click', closePopup);

    var zoomedImage = document.querySelector('.phone');
    zoomedImage.addEventListener('click', zoomImage);

    var aboutSection = document.querySelector('#about');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    observer.observe(aboutSection);
};

var openPopup = function() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
};

var closePopup = function() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
};

var zoomImage = function() {
    var image = document.querySelector('.zoomedPhone');
    image.style.display = 'none';
};
