import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    const reversed = [...projects].reverse();
    return (
        <div className='project-list'>
            {reversed.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;