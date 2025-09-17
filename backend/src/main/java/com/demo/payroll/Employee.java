package com.demo.payroll;

import java.util.UUID;

public class Employee {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private double baseSalary;

    public Employee() {
        this.id = UUID.randomUUID().toString();
    }

    public Employee(String firstName, String lastName, String email, double baseSalary) {
        this();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.baseSalary = baseSalary;
    }

    public String getId(){ return id; }
    public String getFirstName(){ return firstName; }
    public String getLastName(){ return lastName; }
    public String getEmail(){ return email; }
    public double getBaseSalary(){ return baseSalary; }

    public void setId(String id){ this.id = id; }
    public void setFirstName(String v){ this.firstName = v; }
    public void setLastName(String v){ this.lastName = v; }
    public void setEmail(String v){ this.email = v; }
    public void setBaseSalary(double v){ this.baseSalary = v; }
}
