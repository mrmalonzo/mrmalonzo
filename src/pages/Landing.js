import React, {Component} from 'react';
import ReactDOM from 'react-dom';



import Navbar from '../@common/Navbar';
import Search from '../@common/Search';
import Footer from '../@common/Footer';
import Announcements from '../@common/Announcements';

export default class Landing extends Component {

    handleSuccessfulAuth = data => {
        this.props.storeData(data);
        this.props.history.push("/home");
    }

    render() {

        
        return (

            <div>
                
                <Navbar handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Search/>
                <Announcements/>
                <Footer/>
                
    
    
            </div>
    
            
    
        );

    }    
}

