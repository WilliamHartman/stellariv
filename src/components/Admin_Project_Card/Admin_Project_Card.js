import React from 'react'

function ProjectCard(props) {
    console.log(props)
    return (
        <div>
            <h1>Title</h1>
            <p>Description</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default ProjectCard