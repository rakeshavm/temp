import React from 'react';
import capsule from './../../svg/Capsule.svg';
import './../../css/capsule.css';
import {navigate} from '@reach/router';

class PicBubble extends React.Component{

    handleClick = (event)=>{
        navigate('/about',event.target.id);
    }

    render = ()=>{
        
        // let list=[
        //     {
        //         name: "Nitin",
        //         desc: "Web dev",
        //         capsule: capsule
        //     },
        //     {
        //         name: "Nitin",
        //         desc: "Web dev",
        //         capsule: capsule
        //     },
        //     {
        //         name: "Nitin",
        //         desc: "Web dev",
        //         capsule: capsule
        //     }
        // ]
        let list=this.props.details;
        let main = <div></div>
        main = list.map((ele)=>{
            return(
                <div className="main-class">
                    <img src={capsule} className="capsule" id="name1" onClick={this.handleClick}/>
                    <div className="align-center">
                        <h3>Nitin Nikamanth</h3>
                        <p>
                            Web developer
                        </p>
                    </div>
                </div>
            )
        })

        return(
            <div className="flex-container">
                {main}
            </div>
        )
    }
}

export default PicBubble;