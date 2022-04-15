let cover = document.createElement("div");
cover.style.background = "orange";
cover.style.width = "100px";
cover.style.height = "100px";
cover.style.top = "100px";
cover.style.left = "100px";
cover.style.position = "absolute";
// document.body.appendChild(cover);
function createCover(index){
    cover = document.createElement("div");
    cover.style.background = "orange";
    cover.style.width = "100px";
    cover.style.height = "100px";
    cover.style.top = "100px";
    cover.style.left = "100px";
    cover.style.position = "absolute";
    return cover;
}
function createLabel(index){
    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute";
    label.style.top = "35px";
    label.style.left = "50px";
    label.style.fontSize = "30px";
    return label;
}

// let label01 = createLabel(1);
// cover.appendChild(label01);
let khoangcach =0;
for(let col=0;col<20;col++){
    document.body.appendChild()
    cover.style.left= `${khoangcach}px`;
    cover.appendChild(createLabel(col));
    khoangcach +=50;
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
