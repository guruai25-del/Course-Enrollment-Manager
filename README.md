# Course Enrollment Manager

React + Bootstrap front end with JSON Server as the mock REST API.

## Run

```bash
npm install
npm start        # starts JSON Server on :3001 and Vite on :5173
```

Or in two terminals: `npm run api` and `npm run dev`.

Open http://localhost:5173

## Structure

- `db.json` – JSON Server data (students, courses, enrollments)
- `src/api.js` – Axios CRUD helpers
- `src/pages/` – Dashboard, Students, Courses, Enrollments
- `src/components/Alert.jsx` – reusable alert component
