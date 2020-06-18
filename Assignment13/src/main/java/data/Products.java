package data;

import enums.ProductNames;
import models.Product;
import java.util.ArrayList;
import java.util.Random;

public class Products {
    private ArrayList<Product> products;
    private static Products instance;
    private Random random = new Random();

    private Products(){}

    public static Products getInstance() {
        if(instance == null) {
            instance = new Products();
            instance.init();
        }

        return instance;
    }

    private void init() {
        products = new ArrayList<Product>();
        for(int i = 0; i < 30; i++) {
            Product product = new Product(ProductNames.getRandom().toString(), "Good quality best price", random.nextDouble());
            products.add(product);
        }
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public Product findProductById(Integer productId) {
        Product product = null;

        for(int i = 0; i < products.size(); i++) {
            Product current = products.get(i);
            if(current.getId().equals(productId)) {
                product = current;
                break;
            }
        }

        return product;
    }
}
