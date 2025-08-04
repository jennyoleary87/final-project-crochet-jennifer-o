import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import Button from './Button';

const ProjectDetails = () => {
    const { projectId } = useParams(); // get projectId from URL parameters
    const [project, setProject] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // fetch project details from backend
    const fetchProject = async () => {
        try {
            setLoading(true);

            // validate projectId before making API call
            if (!projectId || projectId === 'undefined') {
                throw new Error('Invalid project ID');
            }

            const response = await fetch(`http://localhost:8080/api/projects/details/${projectId}`);

            if (!response.ok) {
                throw new Error('Project not found');
            }

            const data = await response.json();
            setProject(data);
        } catch (error) {
            setError('Failed to fetch project details');
        } finally {
            setLoading(false);
        }
    };

    // delete project with user confirmation & navigate back to projects list
    const deleteProject = async () => {
        if (!window.confirm('Delete this project?')) {
            return;
        } try {
            const response = await fetch(`http://localhost:8080/api/projects/delete/${projectId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                navigate('/projects');
            } else {
                throw new Error('Failed to delete project');
            }
        } catch (error) {
            alert('Failed to delete project');
        }
    };

    // fetch project details when component first loads or projectId changes
    useEffect(() => {
        fetchProject();
    }, [projectId]);

    if (loading) return <p>Loading...</p>; // render loading state
    if (!project) return <p>No projects found</p>; // render if no project data is available

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
                                    <td>{project.details?.description || 'No description'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Yarn</td>
                                    <td>{project.details?.yarn || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Hook Size</td>
                                    <td>{project.details?.hook || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td className="key">Time Spent</td>
                                    <td>{project.details?.timeSpent || 0} hours</td>
                                </tr>
                                <tr>
                                    <td className='key'>User</td>
                                    <td>{project.user?.username || 'Unknown'}</td>
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