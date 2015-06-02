var elId;

function lightbox(id) {
    document.getElementById("lightbox-background").classList.remove("invisible");
    document.getElementById(id).classList.remove("invisible");
    elId = id;
}

function closelightbox() {
    document.getElementById("lightbox-background").classList.add("invisible");
    document.getElementById(elId).classList.add("invisible");
}