

public class WordDocument implements Document {
    
    public void open(String name) {
        System.out.println("Opening "+ name +" Word document");
    }

    public void write(){
       System.out.println("Writing into word documents");
    }

    public void close(){
        System.out.println("closing the word document file");
    }

}
