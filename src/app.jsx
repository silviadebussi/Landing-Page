import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Seja bem-vindo(a) ao meu portfólio</h1>
          <p>Desenvolvedora especializada em Java e Python</p>
          <button>Saiba Mais</button>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="about" className="section">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Sou uma desenvolvedora apaixonada por criar soluções inovadoras
          usando Java e Python. Com foco em escrever códigos limpos e eficientes,
          amo resolver problemas e aprender novas tecnologias.
        </p>
      </section>

      {/* Habilidades */}
      <section id="skills" className="section">
        <h2>Habilidades</h2>
        <div className="skills-container">
          <div className="skill">Java</div>
          <div className="skill">Python</div>
          <div className="skill">Spring Boot</div>
          <div className="skill">Django</div>
          <div className="skill">REST APIs</div>
          <div className="skill">Banco de Dados (SQL e NoSQL)</div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="section">
        <h2>Projetos</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Projeto 1</h3>
            <p>Descrição breve do projeto.</p>
            <button>Ver Mais</button>
          </div>
          <div className="project-card">
            <h3>Projeto 2</h3>
            <p>Descrição breve do projeto.</p>
            <button>Ver Mais</button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="section">
        <h2>Contato</h2>
        <p>Entre em contato comigo pelo e-mail ou nas redes sociais!</p>
        <div className="contact-links">
          <a href="silviadebussi2@gmail.com">Email</a>
          <a href="https://github.com/silviadebussi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/silvia-debussi-5b1aa5232/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© 2025 Silvia Debussi. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
