package filters;

import models.Cart;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "SessionFilter")
public class SessionFilter implements Filter {
    private HttpSession session;
    private HttpServletRequest request;
    private HttpServletResponse response;

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        request = (HttpServletRequest) req;
        session = request.getSession();

        if(session.getAttribute("user") != null) {
            request.setAttribute("redirectUrl", "/app");
        }

        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
