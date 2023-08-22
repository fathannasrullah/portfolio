import LinkAbout from "./LinkAbout"
import ProjectItem from "./ProjectItem"

import { CgChevronUp } from "react-icons/cg"
import bookshelf  from "../assets/images/bookshelf.png"
import quotes  from "../assets/images/random-quote-machine.png"
import piaCianni from "../assets/images/pia-cianni.png"
import kuyMasak from "../assets/images/kuy-masak.png"
import calculator from "../assets/images/kalkulator.png"
import tictactoe from "../assets/images/tic-tac-toe.png"

function Projects() {
  const projects = [
    {
      imageUrl: '',
      title: 'Toko Online',
      link: 'https://tokoonlineku.vercel.app'
    },
    {
      imageUrl: bookshelf,
      title: "Bookshelf",
      link: "https://nfathan.github.io/bookshelf/"
    },
    {
      imageUrl: quotes,
      title: "Random Quote",
      link: "https://nfathan.github.io/random-quote-machine/"
    },
    {
      imageUrl: '',
      title: 'Users',
      link: 'https://fathannasrullah.github.io/project/users'
    },
    {
      imageUrl: calculator,
      title: "Calculator",
      link: "https://nfathan.github.io/calculator-app/"
    },
    {
      imageUrl: piaCianni,
      title: "Pia Cianni",
      link: "https://nfathan.github.io/piacianni/"
    },
    {
      imageUrl: tictactoe,
      title: "Tictactoe Game",
      link: "https://nfathan.github.io/tictactoe-game/"
    },
    {
      imageUrl: kuyMasak,
      title: "Kuy Masak",
      link: "https://nfathan.github.io/kuy-masak-app/"
    }
  ]

  return (
    <div className="container">
      <section className="LinkAbout top" >
        <LinkAbout CgChevronUp={CgChevronUp} />
      </section>
      <section className="Projects">
        <ul className="project-list">
          {
            projects.map((projectItem, index) => {
              return (
                <ProjectItem
                  key={index}
                  title={projectItem.title}
                  image={projectItem.imageUrl}
                  link={projectItem.link}
                />
              )
            })
          }
        </ul>
      </section>
      <section className="LinkAbout bottom" >
        <LinkAbout CgChevronUp={CgChevronUp}/>
      </section>
    </div>
  )
}

export default Projects