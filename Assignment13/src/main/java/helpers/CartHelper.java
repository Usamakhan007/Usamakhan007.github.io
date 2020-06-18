package helpers;

import models.Cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class CartHelper {
    public static void processRequest(HttpServletRequest request, HttpSession session) {
        String action = request.getParameter("action");

        if(action.equals("add")) {
            Cart cart = (Cart) session.getAttribute("cart");
            Integer productId = Integer.valueOf(request.getParameter("productId"));
            cart.add(productId);
        }
    }
}
