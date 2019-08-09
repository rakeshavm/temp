import React from 'react';
import './../../css/about.css';

class Mycomp extends React.Component{
    render(){
        return(
        <div className="landing" style={styles.aboutParent}>gradient
          <div style={styles.aboutChild}>
            SSN unveils Invente, a two-day techfest built around encouraging budding engineers to discover hidden interests and enticing technophiles to showcase their talents with unbridled enthusiasm.This is a space for the tech-savvy, the fun-loving, and the puzzle-solvers to flaunt their abilities to the world.
Here is a platform to put your ideas into action; to test your ability; and to reinvent yourself.SSN's national level technical symposiums of eight departments amalgamate to form this massive technical festival. So keep your planners clean on the 21st and 22nd of September and take a trip down to Kalavakkam. It's time for you to Invente.
           </div>
        </div>
        )
    }
}

const styles={
    aboutParent:{
      textAlign:"center",
      // display:"inlineBlock",
    //   position:"relative",
    //   minHeight:"100vw",
    //   minWidth:"100vh",
    flex:1
    },
    aboutChild:{
      color:"white",
    //   width:"98.75vw",
    //   top:"18%",
      // transform:"translateY(-50%)",
      // msTransform:"translateY(-50%)",
      // margin:"0",
    //   position:"absolute",
      background:"linear-gradient(to right, #0f0c29, #302b63, #24243e)"
    }
  }

export default Mycomp;