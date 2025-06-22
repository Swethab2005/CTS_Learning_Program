public class FinanceForecast {
    public static double forecastValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        double lastYear = forecastValue(principal, rate, years - 1);
        double currYear= lastYear * (1 + rate);
        return currYear;
    }
}
