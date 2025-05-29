// homepage open by default
window.onload = function() {
    openTab(null, 'home');
};

///////////// drawing board (https://www.youtube.com/watch?v=mRDo-QXVUv8&ab_channel=JavaScriptAcademy)
const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

let isPainting = false;
let lineWidth = 5;

// Resize canvas to full screen
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Set default stroke color in input and context
document.getElementById("stroke").value = "#c625a0";
ctx.strokeStyle = "#c625a0";

// Toolbar events
toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
});

// Drawing logic
const draw = (x, y) => {
    if (!isPainting) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
};

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    isPainting = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvas.addEventListener('mouseup', () => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    draw(x, y);
});


////// kore model stuff
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

////// tab stuff
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

/////// collapsible in learning outcomes tab
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}