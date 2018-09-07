import _posts from '../data/posts'
import { combineReducers } from 'redux'

function comments(state = [], action){
	switch (action.type){
		case 'ADD_COMMENT': return [...state, action.comment]
		default: return state
	}
	return state
}


function posts(state = _posts, action){
 
  switch(action.type){
  	case 'REMOVE_POST': 
  	  return state.filter((item, index) => index !== action.index)
  	case 'ADD_POST':
  	  return [...state, action.post]
  	default: return state
  }

}

const rootReducer = combineReducers({posts, comments})

export default rootReducer