import React from 'react';
import './App.css';
import Header from './Header'; // Importe o componente Header

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="gallery-item">
         
        </div>
        
      </header>
      
      <main>
        <section className="gallery">
          <div className="gallery-item">
            <a href="https://www.instagram.com/eloycasagrande/?hl=pt" target="_blank" rel="noreferrer noopener">
              <img src="/img/eloy.webp" alt="Perfil do Eloy no Instagram" />
            </a>
            <div className="name">Eloy</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/vmanshreds/" target="_blank" rel="noreferrer noopener">
              <img src="/img/alessandro.jpg" alt="Perfil do Alessandro no Instagram" />
            </a>
            <div className="name">Alessandro</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/coreytaylor/" target="_blank" rel="noreferrer noopener">
              <img src="/img/Corey.jpg" alt="Perfil do Corey no Instagram" />
            </a>
            <div className="name">Corey</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/jamesroot/" target="_blank" rel="noreferrer noopener">
              <img src="/img/jin root.jpg" alt="Perfil do Jim Root no Instagram" />
            </a>
            <div className="name">Jim Root</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/tortilla_pfaff/" target="_blank" rel="noreferrer noopener">
              <img src="/img/michael.jpg" alt="Perfil do Michael no Instagram" />
            </a>
            <div className="name">Michael</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/7mick7/" target="_blank" rel="noreferrer noopener">
              <img src="/img/mick.avif" alt="Perfil do Mick no Instagram" />
            </a>
            <div className="name">Mick</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/mshawncrahan/" target="_blank" rel="noreferrer noopener">
              <img src="/img/shawn.jpg" alt="Perfil do Shawn no Instagram" />
            </a>
            <div className="name">Shawn</div>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/sidthe3rd/" target="_blank" rel="noreferrer noopener">
              <img src="/img/sid wilson.jpg" alt="Perfil do Sid Wilson no Instagram" />
            </a>
            <div className="name">Sid Wilson</div>
          </div>
        </section>
        
        <section className="history">
          <h2>História da Banda Slipknot</h2>
          <p>Slipknot é uma banda americana de heavy metal formada em Des Moines, Iowa, em 1995. A banda foi fundada por Shawn Crahan, Joey Jordison e Paul Gray. A formação atual consiste em Corey Taylor (vocal), Shawn Crahan (percussão), Jim Root (guitarra), Mick Thomson (guitarra), Sid Wilson (DJ), Craig Jones (samplers e teclados), Michael Pfaff (percussão), Alessandro Venturella (baixo) e Jay Weinberg (bateria).</p>
          <p>Conhecida por suas intensas performances ao vivo, a banda ganhou notoriedade com seu visual distinto de máscaras e macacões, além de sua música agressiva que mistura elementos de nu metal, death metal e thrash metal. O álbum de estreia autointitulado, lançado em 1999, alcançou sucesso comercial e crítico, seguido por vários álbuns aclamados como "Iowa" (2001), "Vol. 3: (The Subliminal Verses)" (2004) e "We Are Not Your Kind" (2019).</p>
          <p>A banda passou por várias mudanças de formação ao longo dos anos e enfrentou tragédias, incluindo a morte do baixista Paul Gray em 2010 e a saída do baterista Joey Jordison em 2013. Apesar desses desafios, Slipknot continuou a evoluir e permanecer uma das bandas mais influentes e populares do gênero.</p>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Slipknot Fan Page. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
