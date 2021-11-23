//set memory,storage and delivery cost in float value
function setExtraPrice(costId, setCost) {
    const initialPrice = document.getElementById(costId);
    initialPrice.innerText = setCost;
    const getCostText = parseFloat(initialPrice.innerText);
    const total = totalPrice();
}

//total price
function totalPrice() {
    const bestPriceText = document.getElementById('best-price').innerText;
    const memoryCostText = document.getElementById('memory-amount').innerText;
    const storageCostText = document.getElementById('storage-amount').innerText;
    const deliveryCostText = document.getElementById('delivery-amount').innerText;

    const previousTotalPrice = document.getElementById('total-price');
    const finalTotalPrice = parseFloat(bestPriceText) + parseFloat(memoryCostText) + parseFloat(storageCostText) + parseFloat(deliveryCostText);
    const bottomTotal = document.getElementById('final-price');
    previousTotalPrice.innerText = finalTotalPrice;
    bottomTotal.innerText = finalTotalPrice;
    return finalTotalPrice;
}
//using promo-code to get discount
function usePromoCode() {
    const promoCode = document.getElementById('promo');
    const promoCodeValue = promoCode.value;
    if (promoCodeValue == 'stevekaku') {
        let finalPrice = totalPrice();
        let discount = finalPrice * 0.2;
        finalPrice = finalPrice - discount;
        const finalFinalPrice = document.getElementById('final-price');
        finalFinalPrice.innerText = finalPrice;
        promoCode.value = '';
    }
}

//memory price
document.getElementById('8GB-button').addEventListener('click', function () {
    setExtraPrice('memory-amount', 0);
});
document.getElementById('16GB-button').addEventListener('click', function () {
    setExtraPrice('memory-amount', 180);
});

//Storage cost
document.getElementById('256GB-storage-button').addEventListener('click', function () {
    setExtraPrice('storage-amount', 0);
});

document.getElementById('512GB-storage-button').addEventListener('click', function () {
    setExtraPrice('storage-amount', 100);
});

document.getElementById('1TB-storage-button').addEventListener('click', function () {
    setExtraPrice('storage-amount', 180);
});
//delivery
document.getElementById('August-25-button').addEventListener('click', function () {
    setExtraPrice('delivery-amount', 0);
});
document.getElementById('August-21-button').addEventListener('click', function () {
    setExtraPrice('delivery-amount', 20);
});
//apply for promo code
document.getElementById('apply-button').addEventListener('click', function () {
    usePromoCode();
});