import { Link } from "react-router-dom"

function LinkProjects(props) {
  return (
    <section className="LinkProjects">
      <Link to="/products">
        <p>Projects </p>
        <props.CgChevronDown />
      </Link>
    </section>
  )
}

export default LinkProjects