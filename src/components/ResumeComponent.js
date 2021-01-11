import React from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';


export default function Resume() {
  
  return(
   <>

<div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resume</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Resume</h2>
                    <hr />
                </div>
            </div>
			</div>
			<Fade in>
   <div class="container">
<div class="row mt-3">
   <div class="col-sm-6 text-center mb-4">
	  
    <div class="card abtme">
    <h5 class="card-header"><img class="profile-image" src="../assets/images/Sam.jpg" alt="profile pic"/></h5>
      <div class="card-body">
       <div class="card-text profile-info">
				<bold><h4>Sam Rennels</h4></bold>
				<p>I'm a self-motivated professional with knowledge and proficiency in JavaScript, HTML , CSS, 
					and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code, 
					seeking the position of Front-End/Full-Stack Web Developer</p>
			</div>
			<div class="profile-info">
			<a  href="tel:+4065956668"><i className="fa fa-phone" /> 1-406-595-6668</a><br />
				
			</div>

			<div class="profile-info">
			<a href="mailto:sam.rennels93@gmail.com"><i className="fa fa-envelope-o" /> sam.rennels93@gmail.com</a>
			</div>

			

			<div class="profile-info">
			<a target="_blanck" href="https://my.indeed.com/p/samuelr-xfdp3uc" class="social-icon"> <i class="fa fa-linkedin"></i></a>
       <a target="_blanck" href="https://github.com/SamRennels" class="social-icon"> <i class="fa fa-github"></i></a>
			</div>
		</div>
        <Link to="/projects" class="btn btn-secondary">Projects</Link>
      </div>
    </div>
	
	 <div class="col-sm-6 text-center ">
   
    <div class="content">
			<div class="work-experience">
				<h1 class="heading">Work Experience</h1>
				<div class="info">
					<p class="sub-heading">Full Time Student & Job Applicant</p>
					<p class="duration">JAN 2021 - PRESENT</p>
					<p>I've fully immersed myself in last two months of my Web Developement bootcamp in order to prepare for a new 
						career in Software Developement.
					</p>
				</div>
				<div class="info">
					<p class="sub-heading">Skilled Carpenter @Country Construction</p>
					<p class="duration">Feb 2020 - PRESENT</p>
					<p>Specialized in building custom decks, pergolas, & fences. We also installed custom doors and windows.
						<br/>
						<br/>
						- Required
						a vast knowledge of construction concepts and engineering. </p>
				</div>
				<div class="info">
					<p class="sub-heading">Previous Work</p>
					<p class="duration">2007 - 2020</p>
					<a target="_blanck" href="https://my.indeed.com/p/samuelr-xfdp3uc"><button class="btn btn-secondary">Resume</button></a>
				</div>
			</div>
			<div class="education">
        <h1 class="heading">Education</h1>
				<div class="info">
					<p class="sub-heading">Full Stack Bootcamp @<a target="_blanck" href ="https://learn.nucamp.co/">Nucamp</a></p>
					<p class="duration">SEP 2020 - FEB 2021</p>
					<p>Bootstrap | React.JS | React-Native | Node.JS | MongoDB
						<br/>
						<br/>
						&#123; Advanced Javscript &#125;
					</p>
				</div>
				<div class="info">
					<p class="sub-heading">Wev Developement Fundamentals @<a target="_blanck" href ="https://learn.nucamp.co/">Nucamp</a></p>
					<p class="duration">AUG 2020 - SEP 2020</p>
					<p>HTML5 | CSS3 | Javascript</p>
					</div>
				<div class="info">
					<p class="sub-heading">High School Degree @Hardin Valley Academy</p>
					<p class="duration">AUG 2007 - MAY 2011</p>
					<p>AP German | AP Literature | AP Triginomotry<br/>
					3.7 GPA</p>
				</div>
			
			</div>
			</div>
			</div>
			</div>
			</div>
			
</Fade>
			

   </>
  );
}