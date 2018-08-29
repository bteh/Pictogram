import React, { Component } from 'react';
import Picture from './Picture'

class Photos extends Component {
	render(){
		return(
			<div className="photo-grid">
              {this.props.posts.map( (post,index) => <Picture key={index} post={post}/> )}
			</div>
		)
	}
}

export default Photos;