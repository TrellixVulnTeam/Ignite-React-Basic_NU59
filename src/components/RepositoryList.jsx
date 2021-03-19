import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
       <RepositoryItem 
       repository={repository.name} 
       description={repository.description}
       link={repository.link}
       />
       <RepositoryItem
       repository={repository.name} 
       description={repository.description}
       link={repository.link}
       />
       <RepositoryItem
       repository={repository.name} 
       description={repository.description}
       link={repository.link}
       />
       <RepositoryItem
       repository={repository.name} 
       description={repository.description}
       link={repository.link}
       />
      </ul>
    </section>
  )
}