import {useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrormessage] = useState("")
  
      const searcApi = async (searchTerm) =>{
          try {
              const response = await yelp.get('/search', {
                  params: {
                      limit: 50,
                      term:searchTerm,
                      location: 'san jose'
                  }
              });
              setResults(response.data.businesses)
              
          } catch (error) {
              setErrormessage("Something Went Wrong!")
          }
      }
  
      // call serach api when component renders first time. 
      useEffect(()=>{
          searcApi('pasta');
      }, [])

      return [searcApi, results, errorMessage]
};