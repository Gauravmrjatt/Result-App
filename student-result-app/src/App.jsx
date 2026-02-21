import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'add', 'edit', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState(null);

  const handleLoadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('Failed to load students.');
      console.error(err);
    }
  };

  const handleAddClick = () => {
    setSelectedStudent(null);
    setCurrentView('add');
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setCurrentView('edit');
  };

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Please click "Load Students" to refresh.');
        // Per requirements: "After adding/editing/deleting → show an alert and let them click the "Load Students" button again"
        // So we don't auto-refresh here.
      } catch (err) {
        alert('Failed to delete student.');
        console.error(err);
      }
    }
  };

  const handleFormSubmit = async (studentData) => {
    try {
      if (currentView === 'add') {
        await createStudent(studentData);
        alert('Student added successfully! Please click "Load Students" to refresh.');
      } else if (currentView === 'edit') {
        await updateStudent(selectedStudent.id, studentData);
        alert('Student updated successfully! Please click "Load Students" to refresh.');
      }
      setCurrentView('list');
    } catch (err) {
      alert('Failed to save student.');
      console.error(err);
    }
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  return (
    <div className="container">
      <header>
        <h1>Student Result Management</h1>
      </header>

      {error && <div className="alert alert-danger">{error}</div>}

      <main>
        {currentView === 'list' && (
          <>
            <div className="actions">
              <button onClick={handleAddClick} className="btn btn-success">Add Student</button>
            </div>
            <StudentList
              students={students}
              onLoad={handleLoadStudents}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onView={handleViewClick}
            />
          </>
        )}

        {(currentView === 'add' || currentView === 'edit') && (
          <StudentForm
            initialData={selectedStudent}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        )}

        {currentView === 'details' && (
          <StudentDetails
            student={selectedStudent}
            onBack={handleCancel}
          />
        )}
      </main>
    </div>
  );
}

export default App;
