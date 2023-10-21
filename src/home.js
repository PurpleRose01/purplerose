let sampleWorkPaths = {
    "one": "./../assets/portfolio menu.png",
    "two": "./../assets/portfolio restaurant.png",
    "three": "./../assets/portfolio gym.png",
    "four": "./../assets/portfolio salon.png"
}

let sampleWorkNames = {
    "one": "Menu Design for a Restaurant",
    "two": "Promotional Post for a Restaurant",
    "three": "Promotional Post for a Gym",
    "four": "Promotional Post for a Salon"
}

let sampleWorkDescriptions = {
    "one": "Menu design suitable for use in hard copy and soft copy formats.",
    "two":  "Promotional post design suitable for posts on all social media platforms",
    "three": "Promotional post design suitable for posts on all social media platforms",
    "four": "Promotional post design suitable for posts on all social media platforms"
}

let sampleWorkImage = document.getElementById("sampleWork");
let sampleWorkNameElement = document.getElementById("sampleWorkName");
let sampleWorkDescriptionElement = document.getElementById("sampleWorkDescription");
let activeButton = "./../assets/active slide.png";
let passiveButton = "./../assets/passive slide.png";
let previousActiveButton = document.getElementById("firstButton");


function changeSample(element){
    if (previousActiveButton){
        previousActiveButton.firstChild.src = passiveButton;
    }
    let buttonNumber = element.getAttribute("data-button-number");
    let samplePath = sampleWorkPaths[buttonNumber];
    sampleWorkImage.src = samplePath;
    element.firstChild.src = activeButton;
    previousActiveButton = element;

    let sampleName = sampleWorkNames[buttonNumber];
    let sampleDescription = sampleWorkDescriptions[buttonNumber];

    sampleWorkNameElement.innerText  = sampleName;
    sampleWorkDescriptionElement.innerText = sampleDescription;
}