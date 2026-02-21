import React from 'react';

const StudentList = ({ students, onEdit, onDelete, onView, onLoad }) => {
    return (
        <div className="student-list">
            <h2>Student List</h2>
            <button onClick={onLoad} className="btn btn-primary">Load Students</button>

            {students.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Section</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.section}</td>
                                <td>{student.marks}</td>
                                <td>{student.grade}</td>
                                <td>
                                    <button onClick={() => onView(student)} className="btn btn-info">View</button>
                                    <button onClick={() => onEdit(student)} className="btn btn-warning">Edit</button>
                                    <button onClick={() => onDelete(student.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students loaded. Click "Load Students" to fetch data.</p>
            )}
        </div>
    );
};

export default StudentList;
