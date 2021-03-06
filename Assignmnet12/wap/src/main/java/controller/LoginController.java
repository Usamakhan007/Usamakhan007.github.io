package controller;

import dao.UserDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/")
public class LoginController extends HttpServlet {
    private UserDAO userDao;


    @Override
    public void init() throws ServletException {
        userDao = UserDAO.UserDAO();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");

        if (userDao.isValidUser(username, password)) {
            HttpSession session = request.getSession();
            session.setAttribute("loggedInUser", username);

            Cookie c;
            if ("yes".equals(remember)) {
                c = new Cookie("user", username);
                c.setMaxAge(30*24*60*60);
            } else {
                c = new Cookie("user", null);
                c.setMaxAge(0);
            }
            response.addCookie(c);

            if (userDao.getUserByName(username).getUsername()) {
                response.sendRedirect(request.getContextPath() + "/");
            } else {
            request.getSession().setAttribute("err_msg", "Username or password is invalid.");
            response.sendRedirect(request.getContextPath() + "/");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect(request.getContextPath() + "/");
    }
}
