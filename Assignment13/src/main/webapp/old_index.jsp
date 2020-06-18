<jsp:include page="partials/header.jsp" />

<h1>
    Home page
</h1>
<% if(session.getAttribute("user") == null) { %>
<div>
    <a href="/login">Login</a>
</div>
<% } %>

<jsp:include page="partials/footer.jsp" />
