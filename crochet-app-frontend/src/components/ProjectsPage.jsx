import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import Button from './Button';

const ProjectsPage = () => {
    const [showForm, setShowForm] = useState(false); // state for form visibility
    const [projects, setProjects] = useState([]); // array stores projects fetched from backend

    // fetch projects from backend
    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/projects');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            alert('Failed to fetch projects');
        }
    };

    // fetch projects when component first loads
    useEffect(() => {
        fetchProjects();
    }, []);

    // handle form submission success & update projects list
    const handleFormSuccess = () => {
        setShowForm(false);
        fetchProjects();
    };

    return (
        <div>
            <h1>Projects</h1>
            <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Project'}
            </Button>

            {/* conditionally render project form */}
            {showForm && (
                <section className="add-project-section">
                    <ProjectForm onSuccess={handleFormSuccess} />
                </section>
            )}

            <ProjectList projects={projects} />
        </div>
    );

};

export default ProjectsPage;
