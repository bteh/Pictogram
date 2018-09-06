import React from 'react';
import Picture from './Picture'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photos(props){
	return(
	<div>
	      <Link className='addIcon' to='/AddPhoto'> </Link>
		<div className="photo-grid">
          {props.posts
            .sort((x,y) => {
            	return y.id - x.id
            })
          	.map( (post, index) => <Picture key={index} post={post} {...props} index={index}/> )}
		</div>
	</div>
		)
}

Photos.propTypes = {
	posts: PropTypes.array.isRequired,
}

export default Photos;