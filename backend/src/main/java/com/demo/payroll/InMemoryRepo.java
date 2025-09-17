package com.demo.payroll;

import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class InMemoryRepo {
    private Map<String, Employee> employees = new ConcurrentHashMap<>();
    private List<PayrollRun> runs = Collections.synchronizedList(new ArrayList<>());

    public InMemoryRepo() {
        // seed a couple of employees
        saveEmployee(new Employee("Alex", "Rivera", "alex.rivera@example.com", 90000));
        saveEmployee(new Employee("Sam", "Lee", "sam.lee@example.com", 72000));
    }

    public List<Employee> getEmployees(){
        return new ArrayList<>(employees.values());
    }

    public Employee saveEmployee(Employee e){
        if (e.getId() == null || e.getId().isEmpty()) {
            e.setId(UUID.randomUUID().toString());
        }
        employees.put(e.getId(), e);
        return e;
    }

    public void deleteEmployee(String id){
        employees.remove(id);
    }

    public List<PayrollRun> getRuns(){
        return runs;
    }

    public void saveRun(PayrollRun run){
        runs.add(run);
    }
}
