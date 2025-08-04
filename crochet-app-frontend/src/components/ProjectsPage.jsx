import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import Button from './Button';

const API_URL = 'http://localhost:8080/api';

const ProjectsPage = () => {
    const [showForm, setShowForm] = useState(false);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/projects');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Project'}
            </Button>

            {showForm && (
                <ProjectForm
                    onSuccess={() => {
                        setShowForm(false);
                        fetchProjects();
                    }}
                />
            )}

            <ProjectList projects={projects} />
        </div>
    );

};

export default ProjectsPage;
