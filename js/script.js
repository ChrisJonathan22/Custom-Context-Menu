var contextMenu = document.getElementById("contextMenu");


function showContextMenu(event) {
        contextMenu.style.display = "block";
        contextMenu.style.left = event.clientX + "px";
        contextMenu.style.top = event.clientY + "px";
        return false;
}


window.addEventListener("click", hideContextMenu, false);

function hideContextMenu() {
        contextMenu.style.display = "none";
}

window.addEventListener("keydown", listenkeys, false);

function listenkeys(event) {
        var keyCode = event.which || event.keyCode;
        if(keyCode == 27){
                hideContextMenu();
        }
}
