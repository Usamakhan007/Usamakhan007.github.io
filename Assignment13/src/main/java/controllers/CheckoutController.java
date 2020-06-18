package controllers;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CheckoutController", urlPatterns = "/checkout")
public class CheckoutController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("/confirmation");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(request.getAttribute("redirectUrl") != null) {
            response.sendRedirect("/login?redirectUrl=/checkout");
        } else {
            request.getRequestDispatcher("/checkout.jsp").forward(request,response);
        }
    }
}
