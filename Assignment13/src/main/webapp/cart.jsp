<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="partials/header.jsp"/>
<jsp:include page="partials/humberger.jsp"/>
<jsp:include page="partials/header-section.jsp"/>
<jsp:include page="partials/hero-normal.jsp"/>


<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="breadcrumb__text">
                    <h2>Shopping Cart</h2>
                    <div class="breadcrumb__option">
                        <a href="./index.html">Home</a>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Shoping Cart Section Begin -->
<section class="shoping-cart spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__table">
                    <table>
                        <thead>
                        <tr>
                            <th class="shoping__product">Products</th>
                            <th>Price</th>
<%--                            <th>Quantity</th>--%>
<%--                            <th>Total</th>--%>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach var="item" items="${cart.products}">
                            <tr>
                                <td class="shoping__cart__item">
                                    <img src="img/cart/cart-1.jpg" alt="">
                                    <h5>${item.name}</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    $${item.price}
                                </td>
<%--                                <td class="shoping__cart__quantity">--%>
<%--                                    <div class="quantity">--%>
<%--                                        <div class="pro-qty">--%>
<%--                                            <input type="text" value="1">--%>
<%--                                        </div>--%>
<%--                                    </div>--%>
<%--                                </td>--%>
<%--                                <td class="shoping__cart__total">--%>
<%--                                    $${item.price}--%>
<%--                                </td>--%>
                                <td class="shoping__cart__item__close">
                                    <span class="icon_close"></span>
                                </td>
                            </tr>
                        </c:forEach>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__btns">
                    <a href="/shop" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                    <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                        Upadate Cart</a>
                </div>
            </div>
            <div class="col-lg-6">
<%--                <div class="shoping__continue">--%>
<%--                    <div class="shoping__discount">--%>
<%--                        <h5>Discount Codes</h5>--%>
<%--                        <form action="#">--%>
<%--                            <input type="text" placeholder="Enter your coupon code">--%>
<%--                            <button type="submit" class="site-btn">APPLY COUPON</button>--%>
<%--                        </form>--%>
<%--                    </div>--%>
<%--                </div>--%>
            </div>
            <div class="col-lg-6">
                <div class="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                        <li>Subtotal <span>$${cart.totalPrice}</span></li>
                        <li>Total <span>$${cart.totalPrice}</span></li>
                    </ul>
                    <a href="/checkout" class="primary-btn">PROCEED TO CHECKOUT</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Shoping Cart Section End -->

<jsp:include page="partials/footer.jsp"/>