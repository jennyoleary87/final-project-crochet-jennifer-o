import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import Button from './Button';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchProject = async () => {
        try {
            setLoading(true);

            if (!projectId || projectId === 'undefined') {
                setError('Invalid project ID');
                setLoading(false);
                return;
            }

            const response = await fetch(`http://localhost:8080/api/projects/details/${projectId}`);
            const data = await response.json();
            setProject(data);
            setError(null);
        } catch (error) {
            setError('Failed to fetch project details');
        } finally {
            setLoading(false);
        }
    };

    const deleteProject = async () => {
        if (!window.confirm('Delete this project?')) return;

        try {
            await fetch(`http://localhost:8080/api/projects/delete/${projectId}`, {
                method: 'DELETE',
            });
            navigate('/projects');
        } catch (error) {
            alert('Failed to delete project');
        }
    };

    useEffect(() => {
        fetchProject();
    }, [projectId]);

    if (loading) return <p>Loading...</p>;
    if (!project) return <p>No projects found</p>;

    return (
        <div>
            <Button onClick={() => navigate('/projects')}>← Back to Projects</Button>
            {editing ? (
                <ProjectForm
                    existingProject={project}
                    onSuccess={() => {
                        setEditing(false);
                        fetchProject();
                    }}
                />
            ) : (
                <div>
                    <h2>{project.name}</h2>
                    <div className="project-details-container">
                        <h3>Project Details:</h3>
                        <table className="details-table">
                            <tbody>
                                <tr>
                                    <td className="key">Description</td>
                                    <td>{project.details.description || 'No description'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Yarn</td>
                                    <td>{project.details.yarn || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Hook Size</td>
                                    <td>{project.details.hook || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Time Spent</td>
                                    <td>{project.details.timeSpent || 0} hours</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Button onClick={() => setEditing(true)}>Edit</Button>
                    <Button onClick={deleteProject}>Delete</Button>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;