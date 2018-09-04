import React from 'react';
import Picture from './Picture'

function Photos(props){
	return(
		<div className="photo-grid">
          {props.posts.map( (post,index) => <Picture key={index} post={post} onRemovePhoto = {props.onRemovePhoto}/> )}
		</div>
		)
}


export default Photos;