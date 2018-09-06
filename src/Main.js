import React, { Component } from 'react';
import Title from './components/Title';
import Photos from './components/Photos';
import AddPhoto from './components/AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from './redux/actions'
import {Link} from 'react-router-dom'


class Main extends Component {
	constructor(){
		super()
	}


  render() {
  	console.log(this.props)
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


      </div> 
      )
  }
}



export default Main;
