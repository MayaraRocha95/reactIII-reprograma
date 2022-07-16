import Header from '../../components/Header/Header'
import image from '../../assets/sobre.svg'
import './sobre.css'
import Titulo from './Titulo'
import Paragrafo from './Paragrafo'
import Gifs from './Gifs'
import Button from './Button'

function Sobre() {
  return(
    <section>
      <Header 
    image={image} 
    description="ilustração de uma mulher em uma apresentação">
     Sobre mim
     </Header>
     <div className="button">
    <Button></Button>
     </div>
      <div className="first-container">
     <Titulo title="4 aprendizados na reprograma" />
    <div className="container">
      < Titulo title="Git" />
      < Gifs image="https://gifs.eco.br/wp-content/uploads/2022/02/animados-gifs-de-gato-assustado-0.gif" alt="gif animado de gatinho"/>
      <Paragrafo>Meu primeiro contato com o <b>Git </b>foi pânico, eu comecei a pensar que  programação não era para mim, então eu entrei na reprograma e entendi, foi como desbloquear uma fase do seu jogo favorito, comecei a praticar e agora consigo fazer  sozinha.</Paragrafo>
    </div>
    <div className="container">
      < Titulo title="HTML" />
      < Gifs image="https://i.pinimg.com/originals/35/84/f7/3584f74ae9cb973bdcd728c349f2aa3f.gif" alt="gif animado de gatinho"/>
      <Paragrafo>Meu primeiro contato com o <b>HTML</b> foi  descobrir como cada site funciona, e percebi que não era tão difícil, foi então que decidi me inscrever na reprograma e eu pensei "Eu consigo fazer isso".</Paragrafo>
    </div>
    <div className="container">
      < Titulo title="CSS" />
      < Gifs image="https://i.gifer.com/9lzE.gif" alt="gif animado de gatinho" />
      <Paragrafo>Meu primeiro contato com o <b>CSS</b> foi um mundo colorido, saber que cada coisa tem o jeito de ser e quando você faz pela primeira vez um site com CSS do modo que você gostaria de ver um site, é deixar sua marca e sua identidade em cada site feito.</Paragrafo>
    </div>
    <div className="container">
      < Titulo title="JavaScript" />
      < Gifs image="https://acegif.com/wp-content/uploads/cat-typing-8.gif" alt="gif animado de gatinho" />
      <Paragrafo>Meu primeiro contato com o <b>JavaScript </b> eu pensei "Posso fazer qualquer coisa com JavaScript", mas foi bem complicado para entrar na minha cabeça, então ainda continuo estudando, confesso que não sinto que sei tanto quanto  HTML e CSS, contudo isso não me desanima, continuo estudando cada vez mais, pois quero poder fazer qualquer coisa com essa linguagem. </Paragrafo>
   </div>
    </div>
    </section>
  )
  }
  
  export default Sobre 