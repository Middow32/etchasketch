for (i = 0; i < 16; i++) {
    
    const row = document.createElement("div");
    row.innerHTML = "";
    row.classList.add("row");

    document.getElementById("container").appendChild(row);

    var j = 0;

    for (j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.innerHTML = "";
        column.classList.add("column");
        row.appendChild(column);
        column.onmouseover = function() {
            this.style.backgroundColor = "blue";
        };
    }
}


