import React from 'react';
import Sidebar from './../components/sidebar';
import {navigate} from '@reach/router';
class Contact extends React.Component{
    render = ()=>{
        return(
            <div>
                <Sidebar navigate={navigate}/>
                contact us
            </div>
        )
    }
}
export default Contact;