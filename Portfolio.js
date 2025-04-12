// homepage open by default
window.onload = function() {
    openTab(null, 'home');
};

const squeakSound = new Audio("sounds/Untitled video - Made with Clipchamp (1).mp3");

let count = 0;

// Get the correct elements
const koreModel = document.getElementById("koreModelJS");
const countDisplay = document.getElementById("squishCounter");

// Add the click listener once
koreModel.addEventListener("mousedown", () => {
    // update squish counter
    count++;
    countDisplay.textContent = "squish counter: " + count;

    // play sound
    squeakSound.currentTime = 0;
    squeakSound.play();
});

// tab stuff
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    if (evt) {
        evt.currentTarget.classList.add("active");
    } else {
        document.querySelector(`.tablinks[onclick*="${tabName}"]`).classList.add("active");
    }
}

// collapsible in learning outcomes tab
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}