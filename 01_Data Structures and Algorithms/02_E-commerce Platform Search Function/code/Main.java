import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of products: ");
        int n = scanner.nextInt();
        scanner.nextLine();

        Product[] products = new Product[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Enter details for product " + (i + 1));
            System.out.print("Product ID: ");
            int id = scanner.nextInt();
            scanner.nextLine();

            System.out.print("Product Name: ");
            String name = scanner.nextLine();

            System.out.print("Category: ");
            String category = scanner.nextLine();

            products[i] = new Product(id, name, category);
        }

        System.out.print("\nEnter the Product ID to search: ");
        int targetId = scanner.nextInt();

        int linearIndex = ProductSearch.linearSearch(products, targetId);
        if (linearIndex != -1) {
            System.out.println("\nProduct found using Linear Search:");
            ProductSearch.displayProduct(products[linearIndex]);
        } else {
            System.out.println("\nProduct not found using Linear Search.");
        }

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int binaryIndex = ProductSearch.binarySearch(products, targetId);
        if (binaryIndex != -1) {
            System.out.println("\nProduct found using Binary Search:");
            ProductSearch.displayProduct(products[binaryIndex]);
        } else {
            System.out.println("\nProduct not found using Binary Search.");
        }
    }
}
