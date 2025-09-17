# ADP-Themed Payroll — Backend (Java 8)

Spring Boot (Java 8 compatible) in-memory payroll API.

## Quick start

```bash
cd backend
./mvnw spring-boot:run   # if you add Maven Wrapper
# or with Maven installed:
mvn spring-boot:run
```

The API will be available at http://localhost:8080/api

### Key endpoints
- `GET /api/health` — health check
- `GET /api/employees` — list
- `POST /api/employees` — create (JSON body: firstName, lastName, email, baseSalary)
- `DELETE /api/employees/{id}` — remove
- `GET /api/payroll/runs` — list payroll runs
- `POST /api/payroll/run` — execute a run (body: `{ "period": "WEEKLY" | "BIWEEKLY" | "MONTHLY" }`)
