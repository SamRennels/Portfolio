import React from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';


export default function Projects() {
  
  return(
   <>
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
            </div>
            <Fade in>
<div class="container-fluid card-deck mt-2 mx-auto">
<div class="card zoom abtme" >
    <img class="card-img-top" height="260px" src={process.env.PUBLIC_URL + '/assets/images/construction.png'} alt="Card image cap" />
    <div class="card-body">
    <a class="anchor" target="_blanck" href="https://samrennels.github.io/Construction/"><h5 class="card-title text-center">Country Construction</h5></a>
      <p class="card-text text-center">Country Construction is a very simple bootstrap application. A quick exercise to demonstrate ability with the framework.</p>
    </div>
    <div class="card-footer text-center">
      <small class="text-muted ">HTML | CSS | Bootstrap</small>
    </div>  
  </div>
  <div class="card zoom abtme">
    <img class="card-img-top"  height="260px" src={process.env.PUBLIC_URL + '/assets/images/matching.png'} alt="Card image cap" />
    <div class="card-body">
    <a class="anchor" target="_blanck" href="https://samrennels.github.io/Matching-Game/"><h5 class="card-title text-center">Matching Game</h5></a>
      <p class="card-text text-center">Matching Game is one of my very first vanilla JS exercises. It demonstrates the large power 
      of loops and if/else statements.</p>
    </div>
    <div class="card-footer text-center">
      <small class="text-muted">HTML | CSS | Javascript</small>
    </div>
  </div>
  
  <div class="card zoom abtme">
    <img class="card-img-top" height="260px" src={process.env.PUBLIC_URL + '/assets/images/nucamp.png'} alt="Card image cap" />
    <div class="card-body">
    <a class="anchor" target="_blanck" href="https://samrennels.github.io/Nucampsite/"><h5 class="card-title text-center">Nucampsite</h5></a>
      <p class="card-text text-center">Nucampsite is the foundation of my React and Redux learning experience. It utlizes advance javascript array methods, redux, react-router, and much more.</p>
    </div>
   <div class="card-footer text-center">
      <small class="text-muted">React | Redux | CSS | Javascript</small>
    </div>
  </div>
</div>
</Fade>

</>
  );
}