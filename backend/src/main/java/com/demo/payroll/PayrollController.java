package com.demo.payroll;

import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/payroll")
public class PayrollController {
    private final InMemoryRepo repo;

    public PayrollController(InMemoryRepo repo){
        this.repo = repo;
    }

    public static enum Period { WEEKLY, BIWEEKLY, MONTHLY }

    public static class RunRequest {
        public Period period = Period.BIWEEKLY;
    }

    @GetMapping("/runs")
    public List<PayrollRun> runs(){
        return repo.getRuns();
    }

    @PostMapping("/run")
    public List<PayrollRun> run(@RequestBody RunRequest req){
        List<Employee> emps = repo.getEmployees();
        double divisor = 26.0; // BIWEEKLY default
        if (req.period == Period.WEEKLY) divisor = 52.0;
        if (req.period == Period.MONTHLY) divisor = 12.0;

        List<PayStub> stubs = new ArrayList<>();
        double totalGross = 0.0;
        double totalTaxes = 0.0;

        for (Employee e : emps) {
            double gross = e.getBaseSalary() / divisor;
            double federal = gross * 0.22;
            double state = gross * 0.05;
            double fica = gross * 0.0765;
            double taxes = federal + state + fica;
            double net = gross - taxes;
            totalGross += gross; totalTaxes += taxes;

            stubs.add(new PayStub(e.getId(), e.getFirstName() + " " + e.getLastName(), gross, taxes, net));
        }

        PayrollRun run = new PayrollRun();
        run.setRunDate(Instant.now());
        run.setGross(totalGross);
        run.setTaxes(totalTaxes);
        run.setNet(totalGross - totalTaxes);
        run.setStubs(stubs);

        repo.saveRun(run);
        return repo.getRuns();
    }
}
