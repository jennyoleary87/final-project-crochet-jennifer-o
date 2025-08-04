import React from "react";
import { useNavigate } from "react-router-dom";


const ProjectCard = ({ project }) => {

    const navigate = useNavigate();

    return (
        <div className="project-card" onClick={() => navigate(`/projects/${project.id}`)}>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">
                {project.details?.description || 'No description available'}
            </p>
        </div>
    );
}

export default ProjectCard;