/* YOUR CODE HERE! */
let boxes = document.getElementsByClassName('box')
let boxQuery = document.querySelector(".box-container");
let offset = [0, 0];
let boxNum = 1;
let maxNumber = 1;
let colorList = ["Green", "Yellow", "Pink", "Red", "Salmon", "Orange", "Gold", "Magenta", "Magenta", "Indigo", "Lime"];

[...boxes].forEach((box) => {
    funcs(box)
})

window.addEventListener("contextmenu", event => event.preventDefault());

function changeSize(element){
    if (element.contains("box-large")) {
        element.remove("box-large");
    } 
    else {
        element.add("box-large");
    }
}

function createNewObject(event){
    const newObj = document.createElement("div");
    newObj.className = "box";
    maxNumber++;
    newObj.innerHTML = maxNumber;
    newObj.style.left = event.target.getBoundingClientRect().right + 'px';
    newObj.style.top = event.target.getBoundingClientRect().bottom + 'px';
    return newObj;
}

function funcs(box) {

    box.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('box')) {
            mouseDown = true;
            offset = [event.target.offsetLeft - event.clientX, event.target.offsetTop - event.clientY];
        }
    })

    box.addEventListener('mouseup', (event) => {
        mouseDown = false;
    })

    box.addEventListener('mousemove', (event) => {
        if (event.which === 1 && mouseDown) {
            event.target.style.left = event.clientX + offset[0] + 'px';
            event.target.style.top = event.clientY + offset[1] + 'px';
        }
    })

    box.addEventListener('mousedown', (event) => {
        if (event.which === 3) {
            event.target.style.background = colorList[Math.floor(Math.random() * 10)];
        }
    })

    box.addEventListener('click', (event) => {
        if (event.shiftKey) {
            changeSize(event.target.classList);
        }
    })

    box.addEventListener('dblclick', (event) => {
        if (!event.altKey) {
            newObj = createNewObject(event)
            boxQuery.appendChild(newObj);
            boxes = document.getElementsByClassName('box');
            funcs(newObj);
            boxNum++;
        }
    })

    box.addEventListener('dblclick', (event) => {
        if (event.altKey && boxNum > 1) {
            boxNum--;
            boxQuery.removeChild(event.target);
        }
    })
}

