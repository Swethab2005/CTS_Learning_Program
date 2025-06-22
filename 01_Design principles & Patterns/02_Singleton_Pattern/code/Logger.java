

public class Logger {
    // private static Logger log=new Logger();  Eager Loading
    private static Logger log = null;         //  Lazy Loading 
    private Logger(){
          System.out.println("Logger Instantiated");
    }
    public static Logger getInstance(){
        if(log==null){
         log=new Logger();
        }
        return log;
    }

    // Achieving Thread Safety using Double checking in multithreaded environments
/*
    public static Logger getInstance(){

        if(log==null){
        synchronized(Logger.class){
         if(log==null){
           log=new Logger();
          } 
        }
    }
        return log;
    }
*/

     // Achieving Thread Safety using ** BILL PUGH ** in multithreaded environments
/*
    public static class LoggerHelper(){   // This class (static inner class) is loaded only once (by first thread)
                                           so other thread cannot instantiate it again also it is final.

       private static final Logger log = new Logger();   

    }
     
    public static Logger getInstance(){
         return LoggerHelper.log;
    }
    
*/

}
