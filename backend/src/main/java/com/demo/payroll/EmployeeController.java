package com.demo.payroll;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final InMemoryRepo repo;

    public EmployeeController(InMemoryRepo repo){
        this.repo = repo;
    }

    @GetMapping
    public List<Employee> list(){
        return repo.getEmployees();
    }

    @PostMapping
    public Employee create(@RequestBody Employee e){
        return repo.saveEmployee(e);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        repo.deleteEmployee(id);
    }
}
