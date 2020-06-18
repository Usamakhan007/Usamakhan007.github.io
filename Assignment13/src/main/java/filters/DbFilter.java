package filters;

import data.DB;
import data.Products;
import models.Product;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "DbFilter")
public class DbFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        DB.getInstance();
        Products.getInstance();
        HttpServletRequest request = (HttpServletRequest) req;
        request.setAttribute("products", Products.getInstance().getProducts());
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {}

}
