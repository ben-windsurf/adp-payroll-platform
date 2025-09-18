# ADP-Themed Payroll Platform (Demo)

A lightweight, non-scaling demo payroll platform with:
- **Frontend:** React (Vite) SPA
- **Backend:** Java 17 (Spring Boot 2.7) in-memory API

> Theming is inspired by ADP (color palette, tone). This is for educational/demo purposes — not affiliated with ADP.

## Run it locally

### 1) Start the backend
```bash
cd backend
mvn spring-boot:run
```

### 2) Start the frontend
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Configuration
Create `frontend/.env` (optional):
```
VITE_API_BASE_URL=http://localhost:8080/api
```

## Java Version Migration

This project has been migrated from Java 8 to Java 17:
- **Updated:** `backend/pom.xml` java.version property from 1.8 to 17
- **Compatibility:** Spring Boot 2.7.18 supports Java 17
- **Verification:** Build and startup tested successfully with Java 17.0.13
- **Requirements:** Java 17 or higher is now required to run the backend

## Notes
- Data is stored in memory and resets on server restart.
- Payroll math is simplified for demo purposes only.
