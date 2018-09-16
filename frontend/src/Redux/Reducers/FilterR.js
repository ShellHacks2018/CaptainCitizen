const initState  = {
    issue: false,
    post: true,
    infrastructure: false,
    illegal_dumping: false,
    biohazard: false,
    event: false,
    food: false,
    place: false,
    cultural: false
 }

function FilterR (state = initState, action){
	switch(action.type){
		case 'TYPE_TOGGLE':
				return { ...state, issue: !state.issue, post: !state.post}
		default:
				return state
	}
 }

 export default FilterR
 