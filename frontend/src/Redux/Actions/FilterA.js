const FilterA = dispatch => {
  return {
    typeToggle: () => {
      dispatch({ type: 'TYPE_TOGGLE' });
    },
    tagToggle: tag => {
      dispatch({ type: 'TAG_TOGGLE', val: tag });
    }
  };
};

export default FilterA;
