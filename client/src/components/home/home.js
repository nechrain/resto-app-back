import React from 'react';
import logo from './logo.png';
import Bounce from 'react-reveal/Bounce';
import SignIn from './signin';
import Rotate from 'react-reveal/Rotate';
import SignUp from './signup';
class Home extends React.Component {
 
    render() {
        return (
            <div className="">
              <center>
                   <Bounce left>
                   <img src={logo}  alt="logo" />
               
                     </Bounce> 
<SignUp/>
          <h1>
            <Rotate top left cascade>
           korean grill
            </Rotate>
          </h1>

          <SignIn />
          </center>
          </div>
        );
      }
    }
      
export default Home;