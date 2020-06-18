package enums;

import java.util.Random;

public enum ProductNames {
    Beef, Banana, Guava, Burger, Berries, Mango, Watermelon, Apple;

    public static ProductNames getRandom() {
        Random random = new Random();
        Integer range = values().length;
        return values()[random.nextInt(range)];
    }
}
