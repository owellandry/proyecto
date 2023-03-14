var uploadBtn = document.getElementById("upload-btn");
var fileInput = document.getElementById("file-input");

uploadBtn.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var dataUrl = reader.result;
        var link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = dataUrl;
        document.head.appendChild(link);
    }
    reader.readAsDataURL(file);
});

function saveFavicon(dataUrl) { 
    localStorage.setItem("favicon", dataUrl);
}


fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var dataUrl = reader.result;
        var link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = dataUrl;
        document.head.appendChild(link);
        saveFavicon(dataUrl);
    }
    reader.readAsDataURL(file);
});


function loadFavicon() {
    var favicon = localStorage.getItem("favicon");
    if (favicon) {
        var link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = favicon;
        document.head.appendChild(link);
    }
}


window.addEventListener("load", loadFavicon);