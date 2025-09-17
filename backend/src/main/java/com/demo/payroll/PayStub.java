package com.demo.payroll;

public class PayStub {
    private String employeeId;
    private String employeeName;
    private double gross;
    private double taxes;
    private double net;

    public PayStub(){}

    public PayStub(String employeeId, String employeeName, double gross, double taxes, double net){
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.gross = gross;
        this.taxes = taxes;
        this.net = net;
    }

    public String getEmployeeId(){ return employeeId; }
    public String getEmployeeName(){ return employeeName; }
    public double getGross(){ return gross; }
    public double getTaxes(){ return taxes; }
    public double getNet(){ return net; }

    public void setEmployeeId(String v){ this.employeeId = v; }
    public void setEmployeeName(String v){ this.employeeName = v; }
    public void setGross(double v){ this.gross = v; }
    public void setTaxes(double v){ this.taxes = v; }
    public void setNet(double v){ this.net = v; }
}
