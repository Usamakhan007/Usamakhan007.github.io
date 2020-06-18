package models;

import data.Products;

import java.util.ArrayList;

public class Cart {
    private ArrayList<Product> products;
    private Integer totalItems;
    private Double totalPrice;

    public Cart() {
        products = new ArrayList<Product>();
        totalItems = 0;
        totalPrice = 0.0;
    }

    public void add(Integer productId) {
        Product product = Products.getInstance().findProductById(productId);
        if(product != null) {
            products.add(product);
            totalItems = products.size();
        }
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public Integer getTotalItems() {
        return totalItems;
    }

    public Double getTotalPrice() {
        double sum = 0;
        for (Product p: products) {
            sum += p.getPrice();
        }

        return Math.round(sum * 100) / 100.0;
    }
}
