let imageIndex = 0; // index starts at 0

const displayImage = document.getElementById("displayImage");

const images = [ //defines "images" as the following array
    { src: "monument1sm.jpg", alt: "spaced"}, //array - 0
    { src: "monument2sm.jpg", alt: "spaced1"}, //array - 1
    { src: "monument3sm.jpg", alt: "spaced2"}, //array - 2
    { src: "monument4sm.jpg", alt: "spaced2"}, //array - 3
    { src: "monument5sm.jpg", alt: "spaced2"}, //array - 
]

function nextImage() { //function to be called by by an interaction with an element called "nextImage"
    if (imageIndex == images.length - 1) {imageIndex = -1};  //returns imageIndex to beginning of array when end met
    imageIndex++; //increases current index by 1
    displayImage.src = images[imageIndex].src; //displayImage will = the currentIndex # relative to images array                                                                           
}
function prevImage() {  //function to be called by an interaction with an element called "prevImage"
    if (imageIndex == 0) {imageIndex = images.length}  //returns imageIndex to end of array when beginning met
    imageIndex--; //decreases current index by 1
    displayImage.src = images[imageIndex].src; //displayImage will = the currentIndex # relative to images array
}

