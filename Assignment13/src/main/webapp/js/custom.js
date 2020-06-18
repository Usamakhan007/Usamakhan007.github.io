$(function() {
    let shoppingCartButton = $('.fa-shopping-cart').parent();
    let shoppingBagElem = $('.fa-shopping-bag').parent();
    let totalPriceElem = $('.header__cart__price');
    let currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: "USD" });

    function updateItemsCount(cart) {
        shoppingBagElem.find("span").text(cart.totalItems);
        let totalPrice = cart.products.reduce(function(sum, item) {
            sum += item.price;
            return sum;
        },  0);

        totalPriceElem.find('span').text(currencyFormat.format(totalPrice));
    }

    let clickHandler = function(event) {
        event.preventDefault();
        let parent = $(this).closest(".labrat__product_item");


        $.ajax({
            url: "/cart",
            method: "post",
            data: {action: "add", productId: parent.data("productId")},
            success: function(response) {
                updateItemsCount(response);
            },
            catch: function(err) {
                console.error(err);
            }
        })
    }

    shoppingCartButton.click(clickHandler);
});
