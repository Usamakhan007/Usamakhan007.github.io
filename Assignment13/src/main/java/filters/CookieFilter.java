package filters;

import data.DB;
import models.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "CookieFilter")
public class CookieFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;
        Cookie[] cookies = request.getCookies();
        User user = null;
//        Boolean logout = request.getAttribute("logout") == null;

        if(cookies != null) {
            for(Cookie c: cookies) {
                if(c.getName().equals("user")) {
                    user = DB.getInstance().findByUsername(c.getValue());
                }
            }

            if(user != null) {
                request.setAttribute("username", user.getUsername());
//                HttpSession session = request.getSession();
//                session.setAttribute("user", user);

            }
        }

        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
