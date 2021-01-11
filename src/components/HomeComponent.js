import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Stagger } from 'react-animation-components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function SkillCard(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div class="skills container d-none d-sm-block">
        <div class="row">
          <div class="col mt-5 mr-5">
          <h3 class="mb-3">Skills</h3>
            
          <Fade in>
     <h6>HTML</h6><Rating name="half-rating-read" defaultValue={5.0} size="small" precision={0.5} readOnly />
     <h6>Javascript</h6><Rating name="half-rating-read" defaultValue={4.0} size="small" precision={0.5} readOnly />
     <h6>CSS3</h6><Rating name="half-rating-read" defaultValue={4.0} size="small" precision={0.5} readOnly />
     <h6>Bootstrap</h6><Rating name="half-rating-read" defaultValue={4.0} size="small" precision={0.5} readOnly />
     <h6>React</h6><Rating name="half-rating-read" defaultValue={4.0} size="small" precision={0.5} readOnly />
     <h6>React-Native</h6><Rating name="half-rating-read" defaultValue={3.5} size="small" precision={0.5} readOnly />
     <h6>Node.JS</h6><Rating name="half-rating-read" defaultValue={3.5} size="small" precision={0.5} readOnly />
     <h6>JQuery</h6><Rating name="half-rating-read" defaultValue={2.0} size="small" precision={0.5} readOnly />
     </Fade>
     
    </div>
    </div>
    </div>
   
    </div>
   
     );
}


function Home() {
  return(
    <>
   
    <section>
    
    <div class="title">
      <span>Sam Rennels</span><span>Junior<Link to="./resume"><a target="_blanck" href ="">Web Developer</a></Link></span></div>
      <SkillCard/>
      </section>
      
  </>
  );
}

export default Home;