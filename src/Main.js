import React, { Component } from 'react';
import Photos from './components/Photos';
import AddPhoto from './components/AddPhoto';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Single from './components/Single'


class Main extends Component {


  render() {
    return(
      <div>
      <h1>
        <Link to='/'> Pictogram </Link>
      </h1>
        <Route exact path = '/' render={() => (
	      	 <div>

		        <Photos {...this.props}/>
		        {/*<Photos posts = {this.state.posts} onRemovePhoto = {this.removePhoto}  /> */}
	        </div>
		)}/>
       
        <Route path = '/AddPhoto' render = {({history}) => (
        	<AddPhoto {...this.props} onHistory={history}/>
        )}/>

        <Route path = '/single/:id' render = {(params) => (
          <Single {...this.props} {...params}/>
          )} />


      </div> 
      )
  }
}



export default Main;
