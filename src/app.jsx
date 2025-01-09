import './App.css';

function App() {
    return (
        <div className="App">
            {/* Hero Section */}
            <header className="App-header">
                <h1> Landing Page </h1>
                <p> Landing page para estudar react </p>
                <button>Saiba Mais</button>
            </header>

            {/* Sobre Nós */}
            <section id="about-us" style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
                <h2>Sobre Nós</h2>
                <p>
                    Focada em criar soluções inovadoras para
                    facilitar a vida das pessoas. Nosso objetivo é entregar valor
                    com tecnologia e criatividade.
                </p>
            </section>

            {/* Serviços */}
            <section id="services" style={{ padding: "20px" }}>
                <h2>Nossos Serviços</h2>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <h3>Desenvolvimento Web</h3>
                        <p>Sites rápidos, responsivos e modernos para o seu negócio.</p>
                    </div>
                    <div>
                        <h3>Marketing Digital</h3>
                        <p>Campanhas que conectam sua marca ao público-alvo certo.</p>
                    </div>
                    <div>
                        <h3>Consultoria</h3>
                        <p>Estratégias personalizadas para o crescimento do seu negócio.</p>
                    </div>
                </div>
            </section>

            {/* Rodapé */}
            <footer>
                <p>© 2025 Minha Landing Page</p>
            </footer>
        </div>
    );
}

export default App;

