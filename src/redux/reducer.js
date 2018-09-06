import posts from '../data/posts'

const postReducer = function posts(state = posts, action){
 
  switch(action.type){
  	case 'REMOVE_POST': 
  	  return state.filter((item, index) => index !== action.index)
  	case 'ADD_POST':
  	  return [...state, action.post]
  	default: return state
  }
  
  return state
}

export default postReducer