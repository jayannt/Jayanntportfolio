// Projects loading and rendering
import { initScrollAnimations } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        renderProjects(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        showError('Unable to load projects. Please try again later.');
    }
}

async function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid) {
        console.error('Projects grid container not found');
        return;
    }
    
    try {
        const templateResponse = await fetch('components/project-card.html');
        const templateHTML = await templateResponse.text();
        
        projectsGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project, templateHTML);
            projectCard.classList.add('scroll-reveal', `stagger-${(index % 3) + 1}`);
            projectsGrid.appendChild(projectCard);
        });
        
        initScrollAnimations();
    } catch (error) {
        console.error('Error rendering projects:', error);
    }
}

function createProjectCard(project, template) {
    const card = document.createElement('div');
    
    let html = template
        .replace(/\{\{image\}\}/g, project.image)
        .replace(/\{\{title\}\}/g, project.title)
        .replace(/\{\{description\}\}/g, project.description)
        .replace(/\{\{demo\}\}/g, project.demo || '#')
        .replace(/\{\{github\}\}/g, project.github || '#');
    
    card.innerHTML = html;
    
    const tagsContainer = card.querySelector('.project-tags');
    if (tagsContainer && project.tags) {
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'project-tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
    }
    
    return card.firstElementChild;
}

function showError(message) {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="color: var(--text-light); font-size: 1.1rem;">${message}</p>
            </div>
        `;
    }
}

export { loadProjects, renderProjects };
