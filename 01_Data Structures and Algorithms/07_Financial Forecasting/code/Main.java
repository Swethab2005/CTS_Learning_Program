import java.util.*;
public class Main {
    public static void main(String[] args) {
        double PrincipalAmount ;
        double Rate ;
        int totalYears ;
 
        Scanner sc=new Scanner(System.in);
        System.out.println("----------Financial Forecasting-----------");
        System.out.print("Enter the Initial Amount : ");
        PrincipalAmount =sc.nextDouble();
        System.out.print("Enter the Growth Rate : ");
        Rate=sc.nextDouble()/100;
        System.out.print("Enter the total Years to be calculated : ");
        totalYears=sc.nextInt();
      
        double FinalAmount= FinanceForecast.forecastValue(PrincipalAmount, Rate, totalYears);
        String format = String.format("₹%.2f", FinalAmount);
        System.out.println(" The Amount after "+totalYears+ " is "+ format);



    }
}
