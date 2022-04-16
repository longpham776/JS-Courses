let board = document.createElement("div");
board.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/184d8c69187341.5b77be3f6e0a4.jpg')";
board.style.top = "0";
board.style.left = "0";
board.style.width = "610px";
board.style.height = "610px";
board.style.position = "fixed";
board.style.zIndex = "100";
document.body.appendChild(board);

function createImage(){
    let img = document.createElement("img");
}

function createCover() {
    cover = document.createElement("div");
    cover.style.background = "orange";
    cover.style.width = "110px";
    cover.style.height = "110px";
    cover.style.top = "10px";
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

let khoangcach = 10, totalCover = 20;
for (let col = 1; col <= 20; col++) {
    if(col <= 5){
        board.appendChild(createCover());
        cover.style.left = `${khoangcach}px`;
        cover.appendChild(createLabel(col));
        khoangcach += 120;
    }else if(col > 5 && col <= 10){
        board.appendChild(createCover());
        if(col == 6) khoangcach = 10;
        cover.style.left = `${khoangcach}px`;
        cover.style.top = "130px";
        cover.appendChild(createLabel(col));
        khoangcach += 120;
    }else if(col > 10 && col <= 15){
        board.appendChild(createCover());
        if(col == 11) khoangcach = 10;
        cover.style.left = `${khoangcach}px`;
        cover.style.top = "250px";
        cover.appendChild(createLabel(col));
        khoangcach += 120;
    }else if(col > 15 && col <= 20){
        board.appendChild(createCover());
        if(col == 16) khoangcach = 10;
        cover.style.left = `${khoangcach}px`;
        cover.style.top = "370px";
        cover.appendChild(createLabel(col));
        khoangcach += 120;
    }
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
