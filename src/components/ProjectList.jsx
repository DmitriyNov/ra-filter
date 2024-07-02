function ProjectList ({list}) {

    return (
        <div className="projectlist">
            {list.map((item) => (
                <img className="project-img" src={item.img}></img>
            ))}
        </div>
    )
}

export default ProjectList
