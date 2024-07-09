document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    // Exemplo de projetos - você pode adicionar os seus aqui
    const projects = [
        { title: 'jogo da velha', description: 'Descrição do projeto 1', link: 'jogo-da-velha/index.html' },
        { title:  'produtos', description: 'Descrição do projeto 2', link: 'site-produtos/index.html' },
        { title: 'aniversario', description: 'Descrição do projeto 3', link: 'site-aniversario/index.html' },
    ];

    // Adiciona os cards de projeto ao container
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver projeto</a>
        `;

        projectsContainer.appendChild(card);
    });
});
