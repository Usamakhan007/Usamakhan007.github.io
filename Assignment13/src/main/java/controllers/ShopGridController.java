package controllers;

import data.Products;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ShopGridController", urlPatterns = "/shop")
public class ShopGridController extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getSession().setAttribute("products", Products.getInstance().getProducts());
        request.getRequestDispatcher("./shop-grid.jsp").forward(request, response);
    }
}
