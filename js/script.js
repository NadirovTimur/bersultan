var modal = document.getElementById('modal1');


var btn = document.getElementById("show1");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal_diagnostic = document.getElementById('modal_diagnostic');


// var diagnostic = document.getElementsByClassName("diagnostic");


var span1 = document.getElementsByClassName("close")[1];


diagnostic.onclick = function () {
    modal_diagnostic.style.display = "block";
}


span1.onclick = function () {
    modal_diagnostic.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal_diagnostic) {
        modal_diagnostic.style.display = "none";
    }
}

var wheels = document.getElementById("wheels");



wheels.onclick = function () {
    modal_diagnostic.style.display = "block";
}

engines.onclick = function () {
    modal_diagnostic.style.display = "block";
}

wheels1.onclick = function () {
    modal_diagnostic.style.display = "block";
}

engines1.onclick = function () {
    modal_diagnostic.style.display = "block";
}
