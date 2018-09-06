import posts from '../data/posts'

const postReducer = function posts(state = posts, action){
 
  switch(action.type){
  	case 'REMOVE_POST': 
  	return state.filter((item, index) => index !== action.index)
  	
  	default: return state
  }
  
  return state
}

export default postReducer