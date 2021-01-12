// declration des variables
let btnPlus = Array.from(document.querySelectorAll(".qt-plus"));
let btnminus = Array.from(document.querySelectorAll(".qt-minus"));
let fullPrice = Array.from(document.querySelectorAll(".fullPrice"));
let price = Array.from(document.querySelectorAll(".price"));
let qte = Array.from(document.querySelectorAll(".qt"));
/*console.log(qte)*/
let total = document.querySelectorAll(".total");
/*let removeItem = document.querySelector(".removeItem");*/

let TotalOrder = document.querySelector(".TotalOrder");
/*let remove =document.querySelector(".remove");*/

// events
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    // alert("hello");
    // qte[i].innerHTML++;
    //qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    //fullPrice[i].innerHTML = qte[i].innerHTML * price[i].innerHTML;
    // console.log(fullPrice[i]);
    //numberProduct =numberProduct + 1;
    // numberProduct.innerHTML = Number(numberProduct.innerHTML) + 1;
    // TotalOrder.innerHTML =
    //   Number(TotalOrder.innerHTML) + Number(price[i].innerHTML);
    // console.log(TotalOrder);
  });
}

for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", () => {
    if (btnminus[i].nextElementSibling.innerHTML > 0) {
      btnminus[i].nextElementSibling.innerHTML--;
      fullPrice[i].innerHTML = Number(btnminus[i]) * Number(price[i]);
    } else {
      alert("la quantité minimale est 1. Voulez vous supprimer le product?");
    }
    fullPrice[i].innerHTML =
      Number(qte[i].innerHTML) * Number(price[i].innerHTML);
    totalQuantity();
    Totalprice();
  });
}

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    btnPlus[i].previousElementSibling.innerHTML++;
    //console.log("price[i].innerHTML",price[i].innerHTML);
    // console.log("qte[i].innerHTML",qte[i].innerHTML);
    fullPrice[i].innerHTML =
      Number(qte[i].innerHTML) * Number(price[i].innerHTML);

    totalQuantity();
    Totalprice();
  });
}

/*-----------------------------------------------------*/
/* like function */
let likesBtn = Array.from(document.querySelectorAll(".fa-heart"));
for (let like of likesBtn) {
  console.log(like.style.color);
  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "grey";
    } else {
      like.style.color = "red";
    }
  });
}

/*-----------------------------------------------------*/
/* remove function */
let product = Array.from(document.querySelectorAll(".product"));
let removeBtn = Array.from(document.querySelectorAll(".fa-trash-alt"));

for (let i in removeBtn) {
  removeBtn[i].addEventListener("click", () => {
    product[i].remove();
    totalQuantity();
    Totalprice();
  });
}
/*-----------------------------------------------------*/
/*       Total Price************************/
//function totalPrice(){
// let s = 0;
// for (let i in qte )
// {
//    s = S + Number(qte[i].innerHTML)*Number(price[i].innerHTML)
//  }
// console.log(s);
//}

/*-----------------------------------------------------*/
/*       Total Quantity************************/

function totalQuantity() {
  let numProduct =document.querySelector(".numberProduct");
  console.log('numProduct',numProduct)
  let qte = Array.from(document.querySelectorAll(".qt"));
  console.log('qteeeeee',qte)

  for(let i=0;i<qte.length;i++)
  {console.log("qte[i].innerHTML", qte[i]);}
  let Q = 0;
  for (let i in qte) {
    Q = Q + Number(qte[i].innerHTML);
    //console.log("qqqq", Q);
  }
  //console.log("qqq444444q", Q);
  numProduct.innerHTML =Q;
  console.log('numProduct.innerHTML',numProduct)
  return (numProduct.innerHTML);
}


function Totalprice() {
    let TotalOrder =document.querySelector(".TotalOrder");
    console.log('TotalOrder :',TotalOrder)
    let fullPrice = Array.from (document.querySelectorAll(".fullPrice"));

    console.log('fullPrice ',fullPrice)
  
    for(let i=0;i<fullPrice.length;i++) {
    //{console.log("qte[i].innerHTML", qte[i]);}
    let S = 0;
    for (let i in fullPrice) {
      S = S + Number(fullPrice[i].innerHTML);
      //console.log("qqqq", Q);
    }
    //console.log("qqq444444q", Q);
    TotalOrder.innerHTML =S;
    return (TotalOrder.innerHTML);
}
}