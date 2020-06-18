package controllers;

import models.Cart;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ConfirmationController", urlPatterns = "/confirmation")
public class ConfirmationController extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("order", (Cart) request.getSession().getAttribute("cart"));
        request.getSession().setAttribute("cart", new Cart());
        request.getRequestDispatcher("/confirmation.jsp").forward(request, response);
    }
}
