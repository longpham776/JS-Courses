let board = document.createElement("div");
board.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/184d8c69187341.5b77be3f6e0a4.jpg')";
board.style.top = "100px";
board.style.left = "100px";
board.style.width = "600px";
board.style.height = "600px";
board.style.position = "absolute";
document.body.appendChild(board);

function createCover() {
    cover = document.createElement("div");
    cover.style.background = "orange";
    cover.style.width = "110px";
    cover.style.height = "110px";
    cover.style.top = "50px";
    cover.style.position = "absolute";
    return cover;
}
function createLabel(index) {
    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute";
    label.style.top = "35px";
    label.style.left = "45px";
    label.style.fontSize = "30px";
    return label;
}

// let label01 = createLabel(1);
// cover.appendChild(label01);

let khoangcach = 12, row = 4, totalCover = 20;
for (let col = 1; col <= 20; col++) {
    board.appendChild(createCover());
    cover.style.left = `${khoangcach}px`;
    cover.appendChild(createLabel(col));
    khoangcach += 120;
}
// create card
    // create image
    // create cover
    // create label
    // open
    // close
    // hide

// create 20 cards ( 20 index, 10 value )
    // display cards
    // shuffle cards
    // first card
    // second card
    // matched ? hide : close
