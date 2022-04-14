//1. Viết hàm formatMoney: 1000 => '1,000', 10000.56 => 10,000.56
function FormatWMoney(money){
    let value = (money).toLocaleString(
        undefined, {minimumFractionDigits:2}
    );
    return console.log(value);
}
//2. Viết hàm formatWallet nhận vào 2 tham số, số tiền và số chữ số ở sau dấu phẩy
//formatWallet(1120, 2)  => '1.12K' 
function FormatWallet(money,x){
    if(money>=1000) money /= 1000;
    return console.log(money.toFixed(x)+"K");
}
//3. viết hàm tính giai thừa của 1 số bất kỳ
function factorial(num){
    let sum=1;
    for(let i=1;i<=num;i++){
        sum*=i;
    }
    return console.log(sum);
}
//4. Viết hàm trả về 1 phần từ bất kỳ trong mảng
const array = [0, 5, 13, 24, 7, 4.5, 17, 9.9, 4, 57];
function getRandomElement(array){
    console.log(array);
    let rand = array[Math.floor(Math.random()*array.length)];
    return console.log(rand);
}
//5. Viết hàm cắt ra 1 phần tử bất kỳ trong mảng
function pickOutRandomElement(array){
    console.log(array);
    let rand = array[Math.floor(Math.random()*array.length)];
    console.log(rand);
    for(let i=0;i<array.length;i++){
        if(rand === array[i]){
            array.splice(i,1);
       }    
    }
    return console.log(array);
}
//6. Cho 2 mảng bất kỳ. Viết hàm tìm ra những phần tử của mảng thứ 2 ko xuất hiện trong mảng đầu tiên
const arr1 = [0, 5, 13, 24, 7, 4.5, 17, 9.9, 4, 57];
const arr2 = [0, 4, 13, 14, 2, 17];
function findMissingElements(arr1, arr2){
    console.log(arr1);
    console.log(arr2);
    let arr3=[];
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            arr3.push(arr2[i]);
        }
    }
    return console.log("Phần tử mảng 2 không trùng: "+arr3);
}
//7. Cho 1 số tiền bất kỳ (n) Viết hàm tìm ra cách rút tiền với số tờ tiền nhỏ nhất.Có 4 mệnh giá (50$, 20$, 10$, 1$)
//    cashOut(324) => { 50:6, 20:1, 1:4}
const obj = {50:"",20:"", 10:"", 1:""};
function cashOut(money){
    if(money>=50){
        obj[50]=Math.floor(money/50);
        return cashOut(money-(50*Math.floor(money/50)));
    }else if(money>=20){
        obj[20]=Math.floor(money/20);
        return cashOut(money-(20*Math.floor(money/20)));
    }else if(money>=10){
        obj[10]=Math.floor(money/10);
        return cashOut(money-(10*Math.floor(money/10)));
    }else if(money>=1){
        obj[1]=Math.floor(money/1);
        return cashOut(money-(1*Math.floor(money/1)));
    }
    return console.log(obj);
}
//8. Đổi số la mã: cho 1 số < 1000, in ra số la mã tương ứng ( I:1, V:5, X:10, L:50, C:100, D:500 )
//    convertToRomanNumber(143) => CXLIII
let text ="";
const roman = {D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
function convertToRomanNumber(num){
    if(num == 0) return console.log(text);
    for(let i of Object.keys(roman)){
        let q = Math.floor(num/roman[i]);
        if(q>=1 && q<=9){
            num -= roman[i];
            text += i.repeat(q);
        }
    }
    return console.log(text);
}
//9. In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//    readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư.
const number = {0:"không",1:"một",2:"hai",3:"ba",4:"bốn",5:"năm",6:"sáu",7:"bảy",8:"tám",9:"chín",10:"mười"};
let str="";
function readNumber(num){
    if(num == 0) return console.log(str);
    let q = Math.floor(num/10000);
    if(q>=1 && q<=99){
        if(Math.floor(q/10) === 0){
            str += number[q]+" vạn ";
            return readNumber(num%10000);
        }else{
            str += number[Math.floor(q/10)]+" mươi "+number[q%10]+" vạn ";
            return readNumber(num%10000);
        }
    }else{
        q = Math.floor(num/1000);
        if(q>=1 && q<=99){
            if(Math.floor(q/10) === 0){
                str += number[q]+" ngàn ";
                return readNumber(num%1000);
            }else{
                str += number[Math.floor(q/10)]+" mươi "+number[q%10]+" ngàn ";
                return readNumber(num%1000);
            }
        }else{
            //str += number[q]+" ngàn ";
            q = Math.floor(num/100);
            if(q>=1 && q<=99){
                if(Math.floor(q/10) === 0){
                    str += number[q]+" trăm ";
                    return readNumber(num%100);
                }else{
                    str += number[Math.floor(q/10)]+" mươi "+number[q%10]+" trăm ";
                    return readNumber(num%100);
                }
            }else{
                //str += number[q]+" trăm ";
                q = Math.floor(num/10);
                if(q === 0){
                    if(num === 4){
                        str += "linh tư";
                    }else{
                        str += "linh "+number[num];
                    }
                }else{
                    if(num >= 10 && num <= 19){
                        if(num%10 === 5) str += number[q]+" mười lăm";
                        str += "mười "+number[num%10];
                    }else if(num >= 20 && num <= 99){
                        if(num%10 === 1){
                            str += number[q]+" mươi mốt";
                        }else if(num%10 === 4){
                            str += number[q]+" mươi tư";
                        }else if(num%10 === 5){
                            str += number[q]+" mươi lăm";
                        }else if(num%10 === 0){
                            str += number[q]+" mươi";
                        }
                        else{
                            str += number[q]+" mươi "+number[num%10];
                        }
                    }
                } 
            }
        }
    }
    return console.log(str);
}