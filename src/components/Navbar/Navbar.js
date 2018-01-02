import React, { Component } from 'react';
import './Navbar.css';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MDMenu from 'react-icons/lib/md/menu.js';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';



class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
    
    render(){
        return(
            <div className='navbar-main'>
                <div className='navbar-mobile-menu'>
                    <MDMenu
                        size={35}
                        color='white'                         
                        onClick={this.handleToggle}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        openSecondary={true}
                        onRequestChange={(open) => this.setState({open})}
                        containerClassName='drawer'
                        >
                        <Link to='/' className='link' style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose} className='menu-item'>Home</MenuItem></Link>
                        <Link to='/projects' className='link' style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose} className='menu-item'>Projects</MenuItem></Link>
                        <Link to='/news' className='link' style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose} className='menu-item'>News</MenuItem></Link>
                        <Link to='/about' className='link' style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose} className='menu-item'>About</MenuItem></Link>
                    </Drawer>
                </div>  
                <div className="navbar-desktop-links">
                    <Link to='/' className='link'>
                        <FlatButton 
                            label="Home" 
                            labelStyle={{fontSize: '25px'}}
                            style={{
                                color: 'white', 
                                'font-family': 'spaceage',
                                height: '40px'}}/>
                    </Link>
                    <Link to='/projects' className='link'>
                        <FlatButton 
                            label="Projects" 
                            labelStyle={{fontSize: '25px'}}
                            style={{
                                color: 'white', 
                                'font-family': 'spaceage',
                                height: '40px'}}/>
                    </Link>
                    <Link to='/news' className='link'>
                        <FlatButton 
                            label="News" 
                            labelStyle={{fontSize: '25px'}}
                            style={{
                                color: 'white', 
                                'font-family': 'spaceage',
                                height: '40px'}}/>
                    </Link>
                    <Link to='/about' className='link'>
                        <FlatButton 
                            label="About" 
                            labelStyle={{fontSize: '25px'}}
                            style={{
                                color: 'white', 
                                'font-family': 'spaceage',
                                height: '40px'}}/>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        
    }
  }
  
  export default withRouter(connect(mapStateToProps, { })(Navbar));