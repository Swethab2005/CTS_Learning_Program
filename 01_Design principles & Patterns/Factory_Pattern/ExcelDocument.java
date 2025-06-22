public class ExcelDocument implements Document {
    
    public void open(String name) {
        System.out.println("Opening" + name +" an Excel document");
    }

    public void write() {
        System.out.println("Writing into Excel document");
    }

    public void close() {
        System.out.println("Closing the Excel document file");
    }
}
