gohome = document.querySelector('#gohome')
cuponcode = document.querySelector('#cuponcode')
couponBtn = document.querySelector('#coupon');
PurchaseBtn = document.querySelector('#PurchaseBtn');
cart = document.querySelector('#cart');
totalPrice = document.querySelector('#totalPrice');
items = document.querySelectorAll('#items');
items.forEach(item => {
    item.addEventListener('click',(e)=>{
       itemName = item.querySelector('#itemName').innerText;
        itemPrice = item.querySelector('#itemPrice #price').innerText;
        priceToNumber = Number(itemPrice);
       totalPriceText = totalPrice.innerText;
       totalPricenumber = Number(totalPriceText);
       totalPricenumber = totalPricenumber + priceToNumber;
       totalPricenumber = totalPricenumber.toFixed(2);
       totalPrice.innerText = totalPricenumber;
       totalPriceAfterDiscount.innerText = totalPricenumber;
       li = document.createElement('li');
        li.innerText = itemName;
        cart.appendChild(li)
        if(totalPricenumber <= 0){
            PurchaseBtn.setAttribute('disabled',true)
           }else{
            PurchaseBtn.removeAttribute('disabled')
           };
           if(totalPricenumber<200){
            couponBtn.setAttribute('disabled',true)
           }else{
            couponBtn.removeAttribute('disabled')
           }
           if (couponBtn.disabled) {
            couponBtn.style.background = '#CBCCCF'
        }else{
            couponBtn.style.background = '#E969B2'
        }
    })
});
couponBtn.addEventListener('click',()=>{
   code =  cuponcode.innerText;
   cuponcodeinsert = document.querySelector('#cuponinsert').value;
    if (code == cuponcodeinsert) {
        totalPriceText = totalPrice.innerText;
       totalPricenumber = Number(totalPriceText);
       discounttaka = (totalPricenumber/100)*20;
       afterDiscountTotalPrice = totalPricenumber - discounttaka;
       totalPriceAfterDiscount = document.querySelector('#totalPriceAfterDiscount');
       totalPriceAfterDiscount.innerText = afterDiscountTotalPrice.toFixed(2);
       discountPrice = document.querySelector('#discountPrice');
       discountPrice.innerText = discounttaka.toFixed(2);
    }else{
        totalPriceAfterDiscount.innerText = totalPrice.innerText;
        discountPrice.innerText = '00'
    }
})
gohome.addEventListener('click',()=>{
    // window.location.href = 'index.html';
    totalPrice.innerText = '00';
    totalPriceAfterDiscount.innerText = '00';
    discountPrice.innerText ='00';
    cart.innerHTML ='';
})
cuponcode.addEventListener('click',()=>{
    document.querySelector('#cuponinsert').value = cuponcode.innerText;
})