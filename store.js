var removeCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons);

for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    console.log(cartItemContainer);
    var cartRows = cartItemContainer.getElementsByClassName('cart-row-element')
    console.log(cartRows);
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        console.log(cartRow);
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        console.log('priceElement', priceElement);
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(quantityElement);
        var price = parseFloat(priceElement.innerText.replace("€", ""))
        var quantity = quantityElement.value
        console.log(price * quantity);

    }
}