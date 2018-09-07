//remove

export function removePost(index){
	return {
		type: 'REMOVE_POST',
		index
	}
}

//adding post
export function addPost(post){
	return {
		type: 'ADD_POST',
		post

	}
}

//adding comments 
export function addComment(comment){
	return{
		type: 'ADD_COMMENT',
		comment
	}
}