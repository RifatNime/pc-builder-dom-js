// document.getElementById('sixteenGB').addEventListener('click',function(){
//     const memoryCost  = document.getElementById('memory-cost');
//     memoryCost.innerText = 200; 
//     const bestPrice = document.getElementById('best-price').innerText;
//     const memoryPrice  = document.getElementById('memory-cost').innerText;
//     const storagePrice = document.getElementById('storage-cost').innerText;
//     const deliveryPrice = document.getElementById('delivery-cost').innerText;
//     const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

//     const total = document.getElementById('total-price');
//     total.innerText = totalPrice;

// });
// document.getElementById('sixteenGB').addEventListener('click',function(){
//     updatePrice('memory-cost', 300);

// });
// document.getElementById('eightGB').addEventListener('click',function(){
//     updatePrice('memory-cost', 0);

// });
// document.getElementById('ssd3').addEventListener('click', function(){
//     updatePrice('storage-cost',500);//jetake update korbo,koto korbo
// });
// document.getElementById('paid-delivery').addEventListener('click', function(){
//     updatePrice('delivery-cost',20);//jetake update korbo,koto korbo
// });



function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener("click", function () {
        updatePrice(updateId, price);

    });
}


onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3","storage-cost", 300);
onClick("free-delivery","delivery-cost", 0);
onClick("paid-delivery","delivery-cost", 20);

function updatePrice(itemId, price) {
 // console.log('click');
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;//p tag ta innerText not value ///jehutu quantity nai direct sum up 
// 4tai ak sathe sum up korte hobe

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice =
        parseFloat(bestPrice) +
        parseFloat(memoryPrice) +
        parseFloat(storagePrice) +
        parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
};

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click',function(){
    const code = document.getElementById('promo-input').value;

    if(code === fakeCode){
        const total = document.getElementById('total-price');
        let totalPrice= parseFloat(total.innerText);

        const discount = totalPrice * .2;

        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;//browser er inner text notun kore update korsi new discount price
        // total.value= '';
    }

    const pin = document.getElementById('promo-input').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == fakeCode){
        // console.log('yes');
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
    
    document.getElementById('promo-input').value = "";
});

// const room = document.querySelector("button-room");
// const buttons = document.querySelectorAll("btn1");
// room.addEventListener('click', e => {
//     if(btn1.getAttribute('id') == e.target.getAttribute('id')){
//         btn1.classList.add('active');
//     }
//     else{
//         btn1.classList.remove('active');
//     }
// })
$("p.btn1").click(function(){
    $("p.btn1").css("background-color", "black");
  $(this).css("background-color", "red");
});