import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderProjects({ project }) {
  return (
    <div className="col-md-5 m-1">
       <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
     
      <Card>
        <CardImg top src={project.image} alt={project.name} />
        <CardBody>
          <div class="text-center"><CardText>{project.description}</CardText></div>
        </CardBody>
      </Card>
     
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1 comments">
         <Stagger in>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <Fade in key={comment.id}>
            <div key={comment.id}>
              <p>
                {comment.text}
                <br/>
                <br/>
                {comment.link}
               </p>
            </div>
            </Fade>
          );
        })}
        </Stagger>
      </div>
    );
  }
  return <div />;
}



function ProjectInfo(props) {
  if (props.project) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/projects"><span class="bread1">Projects</span></Link>
              </BreadcrumbItem>
              <BreadcrumbItem active><span class="b-active">{props.project.name}</span></BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.project.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row mb-3">
         <RenderProjects project={props.project} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default ProjectInfo;

