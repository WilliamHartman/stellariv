import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { } from './../../ducks/reducer';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import NewsCard from '../Admin_News_Card/Admin_News_Card.js';
import ProjectCard from '../Admin_News_Card/Admin_News_Card.js';


class Admin extends Component {
  constructor(){
    super();
 
  }  
  
  render(){
    let newsCardJSX = this.props.news.map(article => <NewsCard news={'test'}/>)

    let projectCardJSX = this.props.news.map(article => <ProjectCard news={'test'}/>)

    if(this.props.userData.authorized === true){
      return (
        <div className="Admin">
          <div className="admin-navback"></div>
          <div className="admin-main-cont">
            <div className="admin-np-cont">
              <div className="admin-section-title">
                <h1>News</h1>
                <button>Add</button>
              </div>
              <div className="admin-filter">
                <input type="text" placeholder='Filter'/>
              </div>
              <NewsCard />
            </div>
            <div className="admin-np-cont">
              <div className="admin-section-title">
                <h1>Projects</h1>
                <button>Add</button>
              </div>
              <div className="admin-filter">
                <input type="text" placeholder='Filter'/>
              </div>
              <ProjectCard />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Admin">
          <div className="about-navback"></div>
          <h1>Not Authorized</h1>
          <Link to='/login'><button>Admin Login</button></Link>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
    const { userData, projects, news } = state;
    return {
        userData,
        projects, 
        news
    }
  }
  
  export default withRouter(connect(mapStateToProps, { })(Admin));