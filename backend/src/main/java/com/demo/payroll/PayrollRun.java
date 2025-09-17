package com.demo.payroll;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class PayrollRun {
    private Instant runDate;
    private double gross;
    private double taxes;
    private double net;
    private List<PayStub> stubs = new ArrayList<>();

    public PayrollRun(){}

    public Instant getRunDate(){ return runDate; }
    public double getGross(){ return gross; }
    public double getTaxes(){ return taxes; }
    public double getNet(){ return net; }
    public List<PayStub> getStubs(){ return stubs; }

    public void setRunDate(Instant v){ this.runDate = v; }
    public void setGross(double v){ this.gross = v; }
    public void setTaxes(double v){ this.taxes = v; }
    public void setNet(double v){ this.net = v; }
    public void setStubs(List<PayStub> v){ this.stubs = v; }
}
