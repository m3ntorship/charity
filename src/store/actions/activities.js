import { ACTION_TYPES } from '../actionTypes';


const dataSanitize = (data) => {
  if(data){
    const { 
  title_primary,
  title_complementary,
  description,
  how_we_work_cards} = data;
  const activitiesFilter = how_we_work_cards.map(
    ({
      id,
      Title,
      description,
      image_main
    }) => {
      return {
        id,
        Title,
        description,
        image_main
      };
    }
  )
  return {
    title_primary,
    title_complementary,
    description,
    how_we_work_cards: activitiesFilter
  };
  }
  else{
    return data
  }
}



export const setActivitiesData = data => {
  return {
    type: ACTION_TYPES.ACTIVITIES.SET_DATA,
    payload: dataSanitize(data)
  };
}

export const setActivitiesLoading = loading => {
         return {
           type: ACTION_TYPES.ACTIVITIES.SET_LOADING,
           payload: loading
         };
       };

export const setActivitiesError = errorState => {
         return {
           type: ACTION_TYPES.ACTIVITIES.SET_ERROR,
           payload: errorState
         };
       };
