import React, { Component } from 'react';
import Title from './components/Title';
import Photos from './components/Photos';
import AddPhoto from './components/AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from './redux/actions'


class Main extends Component {
	constructor(){
		super()
	}


  render() {
  	console.log(this.props)
    return(
      
      <div>
        <Route exact path = '/' render={() => (
	      	 <div>
		        <Title title = {'Pictogram'} />
		        <Photos {...this.props}/>
		        {/*<Photos posts = {this.state.posts} onRemovePhoto = {this.removePhoto}  /> */}
	        </div>
		)}/>
       
       {/* <Route path = '/AddPhoto' render = {({history}) => (
        	<AddPhoto onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost)
                history.push('/')
        	}}/>
        )}/>
    */}

      </div> 
      )
  }
}



export default Main;
