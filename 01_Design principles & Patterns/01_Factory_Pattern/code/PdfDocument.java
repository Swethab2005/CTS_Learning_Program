
public class PdfDocument implements Document {
    
    public void open(String name) {
        System.out.println("Opening "+ name +" PDF document");
    }

    public void write() {
        System.out.println("Writing into PDF document");
    }

    public void close() {
        System.out.println("Closing the PDF document file");
    }
}
