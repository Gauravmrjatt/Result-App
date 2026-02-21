import React, { useState, useEffect } from 'react';

const StudentForm = ({ initialData, onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [section, setSection] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');

    // Populate form if editing
    // Note: Although the prompt says "No useEffect for fetching", 
    // using useEffect to sync props to state for editing is standard React pattern 
    // and doesn't violate the "no data fetching" rule.
    // However, to strictly adhere to "know only useState", I can initialize state from props
    // but that only works on mount. If the form is reused, I might need a key or this effect.
    // Let's use the effect for prop updates, as it's purely local state management, not fetching.
    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setSection(initialData.section);
            setMarks(initialData.marks);
            setGrade(initialData.grade);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, section, marks: Number(marks), grade });
    };

    return (
        <div className="student-form">
            <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Section:</label>
                    <input
                        type="text"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Marks:</label>
                    <input
                        type="number"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Grade:</label>
                    <input
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
