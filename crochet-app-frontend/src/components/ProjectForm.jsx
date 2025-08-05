import React, { useState } from 'react';
import Button from './Button';

let initialProject = {
    name: '',
};

let initialDetails = {
    description: '',
    yarn: '',
    hook: 0,
    timeSpent: 0,
};

let errorMessages = {
    nameRequired: 'Project name is required.',
    descriptionRequired: 'Description is required.',
    yarnRequired: 'Yarn type is required.',
    hookRequired: 'Hook size is required.',
    timeSpentRequired: 'Time spent is required.',
};

const ProjectForm = ({ existingProject = null, onSuccess }) => {
    const [project, setProject] = useState(
        existingProject ? {
            name: existingProject.name || '',
        } : initialProject
    );

    const [details, setDetails] = useState(
        existingProject ? {
            description: existingProject.details?.description || '',
            yarn: existingProject.details?.yarn || '',
            hook: existingProject.details?.hook || 0,
            timeSpent: existingProject.details?.timeSpent || 0,
        } : initialDetails
    );

    const [hasErrors, setHasErrors] = useState(false);

    const isValid = (newProject) => {
        return (
            newProject.name &&
            newProject.details.description &&
            newProject.details.yarn &&
            newProject.details.hook > 0 &&
            newProject.details.timeSpent >= 0
        );
    };

    const handleProjectChange = (event) => {
        const updatedProject = {
            ...project,
            [event.target.id]: event.target.type === 'number'
                ? parseInt(event.target.value) || 0
                : event.target.value,
        };
        setProject(updatedProject);
    };

    const handleDetailsChange = (event) => {
        const updatedDetails = {
            ...details,
            [event.target.id]: event.target.type === 'number'
                ? parseFloat(event.target.value) || 0
                : event.target.value,
        };
        setDetails(updatedDetails);
    };

    const saveProject = async (projectData) => {
        const isEditing = existingProject?.id;
        const url = isEditing
            ? `http://localhost:8080/api/projects/update/${existingProject.id}`
            : 'http://localhost:8080/api/projects/add';
        const method = isEditing ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectData),
            });

            if (response.ok) {
                onSuccess();
            } else {
                const errorData = await response.json();
                console.error('Server error:', errorData);
                alert(`Error: ${errorData.message || 'Failed to save project'}`);
            }
        } catch (error) {
            alert('Error - please try again');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let newProject = { ...project };
        newProject.details = { ...details };

        if (!isValid(newProject)) {
            setHasErrors(true);
        } else {
            setHasErrors(false);
            saveProject(newProject);
        }
    };

    return (
        <main>
            <h3>{existingProject ? 'Edit Project' : 'Add Project'}</h3>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="form-item col-8">
                            <label htmlFor="name">Project Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={project.name}
                                onChange={handleProjectChange}
                                required
                            />
                            {hasErrors && project.name === '' && (
                                <div className="error-message">{errorMessages.nameRequired}</div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-item col-6">
                            <label htmlFor="yarn">Yarn Type:</label>
                            <input
                                type="text"
                                id="yarn"
                                value={details.yarn}
                                onChange={handleDetailsChange}
                                required
                            />
                            {hasErrors && details.yarn === '' && (
                                <div className="error-message">{errorMessages.yarnRequired}</div>
                            )}
                        </div>
                        <div className="form-item col-3">
                            <label htmlFor="hook">Hook Size:</label>
                            <input
                                type="number"
                                step="0.5"
                                id="hook"
                                value={details.hook}
                                onChange={handleDetailsChange}
                                required
                            />
                            {hasErrors && details.hook === 0 && (
                                <div className="error-message">{errorMessages.hookRequired}</div>
                            )}
                        </div>
                        <div className="form-item col-3">
                            <label htmlFor="timeSpent">Time Spent (hours):</label>
                            <input
                                type="number"
                                step="0.5"
                                id="timeSpent"
                                value={details.timeSpent}
                                onChange={handleDetailsChange}
                                required
                            />
                            {hasErrors && details.timeSpent < 0 && (
                                <div className="error-message">{errorMessages.timeSpentRequired}</div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-item col">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                value={details.description}
                                onChange={handleDetailsChange}
                                rows="4"
                                required
                            />
                            {hasErrors && details.description === '' && (
                                <div className="error-message">{errorMessages.descriptionRequired}</div>
                            )}
                        </div>
                    </div>
                </div>

                <Button type="submit" onClick={handleSubmit}>
                    {existingProject ? 'Update Project' : 'Add Project'}
                </Button>
            </form>
        </main>
    );
};

export default ProjectForm;