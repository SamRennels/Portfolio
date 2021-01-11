import React, { Component } from 'react';
import Projects from './ProjectComponent';
import ProjectInfo from './ProjectInfoComponent';
import Header from './NavComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Resume from './ResumeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        projects: state.projects,
        comments: state.comments,
    };
};

class Main extends Component {

    render() {

       

        const ProjectId = ({match}) => {
            return (
                <ProjectInfo project={this.props.projects.filter(project => project.id === +match.params.projectId)[0]} 
                  comments={this.props.comments.filter(comment => comment.projectId === +match.params.projectId)} />
            );
        };

        return (
            <div>
               <Header/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Projects projects={this.props.projects} />} />
                    <Route path='/project/:projectId' component={ProjectId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/resume' component = {Resume} />
                    <Redirect to='/home' />
                    </Switch>
                    </CSSTransition>
                </TransitionGroup>
                
                </div>
        );
    }
}
    

export default withRouter(connect(mapStateToProps)(Main));
 