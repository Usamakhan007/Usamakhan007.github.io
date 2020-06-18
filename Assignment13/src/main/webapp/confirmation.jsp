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
                    <h2>Thank you</h2>
                    <div class="breadcrumb__option">
                        <a href="">Home</a>
                        <span>Confirmation</span>
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
            <div class="col-md-12">
                <p>
                   Thank you for the order
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__table">
                    <table>
                        <thead>
                        <tr>
                            <th class="shoping__product">Products</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach var="item" items="${order.products}">
                            <tr>
                                <td class="shoping__cart__item">
                                    <img src="img/cart/cart-1.jpg" alt="">
                                    <h5>${item.name}</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    $${item.price}
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
                    <a href="/shop" class="primary-btn cart-btn">SHOP AGAIN</a>
                </div>
            </div>
            <div class="col-lg-6">
            </div>
            <div class="col-lg-6">
                <div class="shoping__checkout">
                    <h5>Total</h5>
                    <ul>
                        <li>Subtotal <span>$${order.totalPrice}</span></li>
                        <li>Total <span>$${order.totalPrice}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Shoping Cart Section End -->

<jsp:include page="partials/footer.jsp"/>