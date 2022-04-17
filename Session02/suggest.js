const image = {
    1:"https://w7.pngwing.com/pngs/738/270/png-transparent-blueberry-drawing-watercolor-painting-muffin-blueberry-food-color-painting-thumbnail.png",
    2:"https://i.pinimg.com/474x/5f/3f/2d/5f3f2d3ba51cdf1e65e538c73630959b.jpg",
    3:"https://img.lovepik.com/free-png/20220119/lovepik-red-apple-png-image_401490389_wh860.png",
    4:"https://png.pngtree.com/png-vector/20220124/ourmid/pngtree-vector-hand-drawn-pineapple-pineapple-fruit-transparent-buckle-free-png-image_4272931.png",
    5:"https://static.vecteezy.com/system/resources/thumbnails/001/269/679/small_2x/coconut-isolated-on-white.jpg",
    6:"https://image.pngaaa.com/332/1060332-small.png",
    7:"https://img.lovepik.com/original_origin_pic/18/10/17/e5083a807c4d7e76ae50b7ad39b51623.png_wh860.png",
    8:"https://img.lovepik.com/element/40147/9716.png_860.png",
    9:"https://icon2.cleanpng.com/20180626/cb/kisspng-flavor-propylene-glycol-electronic-cigarette-aeros-dragonfruit-5b3291da34f035.1059511115300407942169.jpg",
    10:"https://img.freepik.com/free-vector/watermelon-fruit-vector-flat-design-graphic-2d-hd_542240-7.jpg?w=2000"
}
let board = document.createElement("div");
board.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-bamboo-forest-spring-shoot-background-design-image_275236.jpg')";
board.style.top = "50%";
board.style.left = "50%";
board.style.marginTop = "-250px";
board.style.marginLeft = "-300px";
board.style.width = "610px";
board.style.height = "500px";
board.style.position = "fixed";
document.body.appendChild(board);


function createImage(){
    img = document.createElement("img");
    img.style.width = "110px";
    img.style.height = "110px";
    img.style.top = "10px";
    img.style.position = "absolute";
    return img;
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
    label.style.textAlign = "center";
    label.style.fontSize = "30px";
    return label;
}

let length = 10,arrShuffle=[];

const arrImage=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

function shuffleCards(){
    arrImage.sort(function(){
        return 0.5 - Math.random()
    });
    return arrImage;
}

arrShuffle=[].concat(shuffleCards());

for (let i = 1; i <= 20; i++) {
    if(i <= 5){
        board.appendChild(createImage());
        img.appendChild(createCover());
        img.src = image[arrShuffle[i-1]];
        img.style.left = `${length}px`;
        cover.style.left = `${length}px`;
        cover.appendChild(createLabel(i));
        length += 120;
    }else if(i > 5 && i <= 10){
        board.appendChild(createImage());
        img.src = image[arrShuffle[i-1]];
        if(i == 6) length = 10;
        img.style.left = `${length}px`;
        img.style.top = "130px";
        img.appendChild(createLabel(i));
        length += 120;
    }else if(i > 10 && i <= 15){
        board.appendChild(createImage());
        img.src = image[arrShuffle[i-1]];
        if(i == 11) length = 10;
        img.style.left = `${length}px`;
        img.style.top = "250px";
        img.appendChild(createLabel(i));
        length += 120;
    }else if(i > 15 && i <= 20){
        board.appendChild(createImage());
        img.src = image[arrShuffle[i-1]];
        if(i == 16) length = 10;
        img.style.left = `${length}px`;
        img.style.top = "370px";
        img.appendChild(createLabel(i));
        length += 120;
    }
}
// for (let j = 1; j <= 20;j++){
//     if(j <= 5){
//         board.appendChild(createImage().appendChild(createCover()));
//         img.style.left = `${length}px`;
//         cover.style.left = `${length}px`;
//         cover.appendChild(createLabel(j));
//         length += 120;
//     }else if(j > 5 && j <= 10){
//         board.appendChild(createImage().appendChild(createCover()));
//         if(j == 6) length = 10;
//         img.style.left = `${length}px`;
//         img.style.top = "130px";
//         cover.style.left = `${length}px`;
//         cover.style.top = "130px";
//         cover.appendChild(createLabel(j));
//         length += 120;
//     }else if(j > 10 && j <= 15){
//         board.appendChild(createImage().appendChild(createCover()));
//         if(j == 11) length = 10;
//         img.style.left = `${length}px`;
//         img.style.top = "250px";
//         cover.style.left = `${length}px`;
//         cover.style.top = "250px";
//         cover.appendChild(createLabel(j));
//         length += 120;
//     }else if(j > 15 && j <= 20){
//         board.appendChild(createImage().appendChild(createCover()));
//         if(j == 16) length = 10;
//         img.style.left = `${length}px`;
//         img.style.top = "370px";
//         cover.style.left = `${length}px`;
//         cover.style.top = "370px";
//         cover.appendChild(createLabel(j));
//         length += 120;
//     }
// }
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
