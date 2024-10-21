let htmlinput = document.querySelector(".code-editor.html textarea");
let cssinput = document.querySelector(".code-editor.css textarea");
let jsinput = document.querySelector(".code-editor.js textarea");
let save = document.querySelector("#save");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector("#output");
let full = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");

// Function to save the HTML, CSS, and JS and display output
function saveCode() {
    output.contentDocument.body.innerHTML = htmlinput.value;
    output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
    output.contentWindow.eval(jsinput.value);
}

// Function to toggle full screen for the output
function toggleFullScreen() {
    outputContainer.classList.toggle("output-full-active");
    if (outputContainer.classList.contains("output-full-active")) {
        full.style.transform = "rotate(180deg)";
    } else {
        full.style.transform = "rotate(0deg)";
    }
}

// Function to copy code to clipboard
function copyCode(e) {
    if (e.classList.contains("copy1")) {
        navigator.clipboard.writeText(htmlinput.value);
    } else if (e.classList.contains("copy2")) {
        navigator.clipboard.writeText(cssinput.value);
    } else {
        navigator.clipboard.writeText(jsinput.value);
    }
}


save.addEventListener("click", saveCode);
save.addEventListener("touchstart", saveCode); 

full.addEventListener("click", toggleFullScreen);
full.addEventListener("touchstart", toggleFullScreen); 

copy.forEach((e) => {
    e.addEventListener("click", () => copyCode(e));
    e.addEventListener("touchstart", () => copyCode(e)); 
});
