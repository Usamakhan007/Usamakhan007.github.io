package controllers;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ApplicationController", urlPatterns = "/app")
public class ApplicationController extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(request.getAttribute("redirectUrl") == null) {
            request.getRequestDispatcher("/app/index.jsp").forward(request, response);
        } else {
            response.sendRedirect((String) request.getAttribute("redirectUrl"));
        }

    }
}
