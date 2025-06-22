

public class Singleton {
        public static void main(String[] args) {
            System.out.println();
            Logger l1 = Logger.getInstance();
            Logger l2 = Logger.getInstance();

        if (l1 == l2) {
        
            System.out.println("Singleton pattern executed successfully .");
            System.out.println();
        }
        else {
            System.out.println("Different instances so Singleton failed.");
        }
    }
}
