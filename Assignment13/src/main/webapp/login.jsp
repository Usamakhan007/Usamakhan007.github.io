<jsp:include page="partials/header.jsp"/>
<jsp:include page="partials/humberger.jsp"/>
<jsp:include page="partials/header-section.jsp"/>

<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="breadcrumb__text">
                    <h2>Login</h2>
                    <div class="breadcrumb__option">
                        <a href="">Home</a>
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->
<section class="checkout spad">
    <div class="container">
        <div class="checkout__form">
            <form action="/login" method="post">
                <div class="row">
                    <div class="columns twelve">
                        <p class="errors">${errors}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="checkout__input">
                            <p>Your Username<span>*</span></p>
                            <input class="u-full-width" name="username" value="${username}" type="text"
                                   placeholder="test"
                                   id="username">
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="checkout__input">
                            <p>Your Password<span>*</span></p>
                            <input class="u-full-width" name="password" type="password" placeholder="*****"
                                   id="password">
                        </div>
                    </div>
                </div>
                <div>
                    <label class="example-send-yourself-copy">
                        <input type="checkbox" name="remember_me" value="true">
                        <span class="label-body">Remember Me</span>
                    </label>
                </div>
                <div>
                    <input class="primary-btn" type="submit" value="Login">
                </div>
            </form>
        </div>
    </div>
</section>
<jsp:include page="partials/footer.jsp"/>
