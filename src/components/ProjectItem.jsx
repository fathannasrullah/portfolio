function ProjectItem(props) {
  return (
    <li className="project-item">
      <h1 className="Project-title">{props.title}</h1>
      <div className="img-box">
        <img src={props.image} alt="" />
      </div>
        <a href={props.link}>Visit Website</a>
    </li>
  )
}

export default ProjectItem