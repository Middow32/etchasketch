for (i = 0; i < 256; i++) {

    if ((i%16) == 0)
    {
        var space = document.createElement("br");
        document.getElementById("container").appendChild(space);
    }
    const box = document.createElement("div");
    box.innerHTML = "";
    box.classList.add("grid");
    box.onmouseover = function() {
        this.style.backgroundColor = "blue";
    };
    document.getElementById("container").appendChild(box);

}

