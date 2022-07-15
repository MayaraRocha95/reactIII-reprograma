import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/projetos.svg'
import axios from 'axios'
import './portifolio.css'


const dados = [
  { title: 'Meu diário na Reprograma', gif: 'https://user-images.githubusercontent.com/98711190/178161970-3b64239e-4f91-454d-97de-6e75fab3da2a.gif', description: 'Meu primeiro projeto React', link: 'https://github.com/MayaraRocha95/meu-diario-reprograma' },
  { title: 'Projeto api com React', gif: 'https://user-images.githubusercontent.com/98711190/178314691-b84164b7-170c-4540-9cc0-cdf9e29fa166.gif', description: 'Consumindo uma api externa e renderizar os dados na tela.',link: 'https://github.com/MayaraRocha95/exercicios-semana2-react-reprograma' },
  { title: 'Projeto Dicas Git', gif: 'https://github.com/MayaraRocha95/sitedicas-git/raw/SiteGit/img/dicasgit.gif', description: 'Este projeto foi feito nas primeiras semanas da reprograma, para treinar meu aprendizado em Git, usando HTML,CSS.', link: 'https://site-dicas-git.netlify.app/' },
  { title: 'Projeto todo-list', gif: 'https://user-images.githubusercontent.com/98711190/178311237-3af4ea51-955e-48b4-bb6a-5619ece53578.gif', description: 'Projeto todo-list (Lista de tarefas) com a finalidade de treinar e consolidar conceitos básico e importantes do javascript, sempre seguindo as boas práticas de programação como pequenas funções e funções puras.', link: 'https://github.com/MayaraRocha95/projeto-todo-list2' },
]




function Portifolio() {
 const [repos, setRepo] = useState([])
 const baseUrl = 'https://api.github.com/users/MayaraRocha95/repos'

 useEffect(() => {
  axios
  .get(baseUrl)
  .then((response) => setRepo(response.data))
 },[])


  return(
    <>
 <Header 
 image={image} 
 description="ilustração de uma mulher em uma apresentação">
  Meus Projetos
  </Header>
  <div className='cartao-container'>
    {
      dados.map(projeto => {
        return(
          <div className="cartao" key={projeto.id}>
            <h1>{projeto.title}</h1>
            <img src={projeto.gif} alt="gif do projeto"/>
            <p>{projeto.description}</p>
            <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
              </a>
          </div>
        )
      })
    }

  </div>
  <h2 className="titulo">Outros Projetos no meu Github</h2>  
  <div className='card-container'>
    {
         repos.map( repo => {
    return(
      <div className="card" key={repo.id}>
     <h3>{repo.name}</h3>
     <p>{repo.description}</p>
     <a href={repo.html_url} className="enter-repo" target="_blank">
    <BsArrowReturnRight siz={16} color="#fff"/>
    </a>
            
      </div>
    )
  })
    }

  </div>
 </>
  )
  }
  
  export default Portifolio 