function deletehandler(id) {
    const clicked = document.getElementsByClassName(id);

    for (let i = clicked.length - 1; i >= 0; i--) {
        clicked[i].remove();
    }
}


function clickhandler() {
    const id = Math.random();

    const getauthor = document.getElementById("author-task");
    let saveauthor = getauthor.value;
    const newauthoritem = document.createElement("li");
    const noauthorvalue = "(No author specified)";

    if (!saveauthor) {

        saveauthor = noauthorvalue;
    }

    newauthoritem.innerText = saveauthor;
    newauthoritem.classList = `list-group-item d-flex justify-content-between align-items-center
     ${id}`;
    const listauthor = document.getElementById("appendauthor");
    listauthor.appendChild(newauthoritem);
    getauthor.value = ""




    const getbook = document.getElementById("book-task");
    let savebook = getbook.value;
    const newbookitem = document.createElement("li");
    const nobookvalue = "(No book specified)";
    if (!savebook) {

        savebook = nobookvalue;
    }

    newbookitem.innerText = savebook;

    newbookitem.classList = `list-group-item d-flex justify-content-between align-items-center ${id}`;
    const listbook = document.getElementById("appendbook");
    listbook.appendChild(newbookitem);
    getbook.value = ""

    const deletebutton = document.createElement("i");
    deletebutton.classList = "bi bi-trash3";
    deletebutton.style.marginLeft = "5px";
    deletebutton.addEventListener("click", () => deletehandler(id));
    newauthoritem.appendChild(deletebutton);
}



const savebutton = document.getElementById("savebutton");
savebutton.addEventListener("click", clickhandler);



const deletebutton = document.getElementById("deletebutton");
deletebutton.addEventListener("click", clickhandler);
