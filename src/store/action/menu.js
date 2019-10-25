
import * as actions from './actionTypes';
import axios from './../../axios';



export const fetchmenu = () => {

   return dispatch => {
      axios.get('/menu')
         .then(response => {
            dispatch(fetchSuccess(response.data.menus));
         });
   }
}


export const fetchSuccess = (data) => {

   return {
      data: data,
      type: actions.FETCH_MENUS_SUCCESS
   }
}



//making new menu 

export const makeNewMenu = (data) => {
   console.log('amir is in make new enu action ', data);

   return dispatch => {

      axios.post('/makeNewMenu', { ...data })

         .then(response => {

            console.log(`heyyyy ${response.data}`);

            dispatch(makeNewMenuSuccessed());

            dispatch(fetchmenu());

         })
         .catch(err => {

            console.log(`some errors occured in making new Cat action`);

         }) ; 
   }
}



export const makeNewMenuSuccessed  =  () => ({ type: actions.MAKE_MENU_SUCCESS });



export const deleteMenu = (id) => {
   return dispatch => {
       
       axios.delete(`/deleteMenu/${id}`)
            .then(response=> {
                   console.log(`heyyyy ${response.data}`) ;
                   
                   dispatch(deleteMenuSuccessed()) ; 
                   dispatch(fetchmenu()) ;
            })  
            .catch(err => { 
               console.log(`some errors occured in making new Cat action`) ;  
            })  
   } 
}

export const deleteMenuSuccessed = () =>  ( { type:actions.delete_MENU_SUCCESS } ) ; 
