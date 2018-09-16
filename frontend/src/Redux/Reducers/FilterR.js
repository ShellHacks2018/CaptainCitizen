const initState  = {
		type : "post",
		isfilter: false,
    infrastructure: false,
    illegal_dumping: false,
    biohazard: false,
    event: true,
    food: true,
    place: true,
    cultural: true
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
 