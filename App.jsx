import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Students from './pages/Students.jsx';
import Courses from './pages/Courses.jsx';
import Enrollments from './pages/Enrollments.jsx';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark app-navbar">
        <div className="container">
          <span className="navbar-brand fw-bold">Course Enrollment Manager</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink end className="nav-link" to="/">Dashboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/students">Students</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/enrollments">Enrollments</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollments" element={<Enrollments />} />
        </Routes>
      </main>
    </>
  );
}
