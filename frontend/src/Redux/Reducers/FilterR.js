const initState  = {
	type : "post",	
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
				return { ...state}
		case 'TAG_TOGGLE':
				
				return { ...state}
		default:
				return state
	}
 }

 export default FilterR
 