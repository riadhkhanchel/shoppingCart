//console.log("eee");

// declration des variables
let btnPlus = document.querySelectorAll(".qt-plus");
let btnminus =  document.querySelectorAll(".qt-minus");
let fullPrice= document.querySelectorAll(".fullPrice");
let price = document.querySelectorAll(".price");
let qte = document.querySelectorAll(".qt");
let total =document.querySelectorAll(".total");
/*let removeItem = document.querySelector(".removeItem");*/
let numberProduct= document.querySelector(".numberProduct");
let TotalOrder= document.querySelector(".TotalOrder");
/*let remove =document.querySelector(".remove");*/


// events
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    // alert("hello");
    // qte[i].innerHTML++;
    qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    fullPrice[i].innerHTML = qte[i].innerHTML * price[i].innerHTML;
    console.log(fullPrice[i]);
    //numberProduct =numberProduct + 1;
    numberProduct.innerHTML= Number(numberProduct.innerHTML) + 1;
    TotalOrder.innerHTML =Number(TotalOrder.innerHTML)+ Number(price[i].innerHTML);
  console.log(TotalOrder);
  });
}


for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", () => {
       if (Number(qte[i].innerHTML <= 0)) {

      return alert("quantité minimale 0.");
    } else {
      qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
      //console.log(price[i].innerHTML );
     fullPrice[i].innerHTML = qte[i].innerHTML * price[i].innerHTML;
     numberProduct.innerHTML= Number(numberProduct.innerHTML) - 1;
     TotalOrder.innerHTML =Number(TotalOrder.innerHTML)- Number(price[i].innerHTML);

    //console.log(numberProduct);
    } 
    });
  }
  
let sum =0; 
  function computetotal() {
    for (var i = 0; i < qte.length; i++) {
      sum += qte[i];
      console.log(sum);
    }
      }

/*-----------------------------------------------------*/
/* like function */
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    console.log("1111111")
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
   clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
  count.textContent--;
  }
});
/*-----------------------------------------------------*/


/*-----------------------------------------------------*/
/* remove function */
let product=document.querySelectorAll(".product");
let remove=document.querySelectorAll(".remove");

console.log(remove);
console.log(product);
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click",() => {
    console.log(remove[i]);
    delete(remove[i]);
    })};
  /*-----------------------------------------------------*/


