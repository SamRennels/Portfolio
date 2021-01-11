import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

function RenderProjectItem({project}) {
    return (
        <Card className="zoom">
            <Link to={`/project/${project.id}`}>
                <CardImg width="100%" height="250px" src={project.image} alt={project.name} />
            </Link>
        </Card>
    );
}

function Projects(props) {

    const projects = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-5 m-2">
                <RenderProjectItem project={project}/>
            </div>
        );
    });

    return (
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Projects</h2>
                    <hr />
                    
                </div>
            </div>
           <Fade in>
            <div className="row mb-3">
               
             {projects}
               
                </div>
                </Fade>
             </div>
       
    );
}

export default Projects;