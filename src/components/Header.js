import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={
        pageTitle:'Welcome To Horned Animals'
    }

}
changePageContent=()=>{
this.setState({
     pageTitle: this.state.pageTitle="Welcome to Harry Potter World!"
 
}
)
}

  render(){
    return(

      <div>



      </div>


    );
  }
}
export default Header;