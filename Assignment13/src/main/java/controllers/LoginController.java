package controllers;

import helpers.LoginHelper;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet(name = "LoginController", urlPatterns = "/login")
public class LoginController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Boolean validation = LoginHelper.processLoginInfo(request, response, session);

        if(validation) {
            String redirectUrl = (String) request.getSession().getAttribute("redirectUrl");
            System.out.println(request.getSession().getAttribute("redirectUrl"));

            if(redirectUrl != null) {
                response.sendRedirect(redirectUrl);
            } else {
                response.sendRedirect("/app");
            }
        } else {
            session.setAttribute("errors", String.join("<br />", LoginHelper.getErrors()));
            LoginHelper.clearErrors();
            response.sendRedirect("/login");
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(request.getParameter("redirectUrl") != null) {
            request.getSession().setAttribute("redirectUrl", (String) request.getParameter("redirectUrl"));
        }

        if(request.getAttribute("redirectUrl") == null) {
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        } else {
            response.sendRedirect((String) request.getAttribute("redirectUrl"));
        }
    }
}
