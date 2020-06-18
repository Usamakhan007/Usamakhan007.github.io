package models;

import java.util.Random;

public class Product {
    private String name;
    private Integer id;
    private String specs;
    private Double price;

    public Product(String name, String specs, Double price) {
        Random random = new Random();
        this.name = name;
        this.specs = specs;
        this.price = Math.round(random.nextDouble() * 100) / 10.0;
        this.id = random.nextInt();
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", id='" + id + '\'' +
                ", specs='" + specs + '\'' +
                ", price=" + price +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSpecs() {
        return specs;
    }

    public void setSpecs(String specs) {
        this.specs = specs;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
