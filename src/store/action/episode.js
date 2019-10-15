
import * as actions from './actionTypes' ; 
import axios from './../../axios' ; 



export const fetchEpisode  = () => {
   
   return  dispatch => {
         axios.get('/getEpisodes')
              .then(response =>{
               
                    dispatch(fetchEpisodeSuccess(response.data))  ;  
               }) 
               .catch(error => {
                   // handle errors
                   console.log( 'wht is error', error);  
               }) ;                           
    }
}; 


export const fetchEpisodeSuccess = (data) => {
        return {
           data : data ,  
           type : actions.FETCH_EPISODE_SUCCESS    
        }
}; 


