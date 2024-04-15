import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://recipe-book2.p.rapidapi.com/recipes-popular',
  headers: {
    'X-RapidAPI-Key': '9086ae9bb5mshfea21c1134b6afbp186370jsn997cfd30c6c6',
    'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default () => {
  const[menus, setMenus] = useState([]);

  useEffect(()=>{
    async function fetchData(){

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMenus(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])

  return (
    <div className='Home page'>
      <h1> Fantastic Desert  </h1>
      <ul>
    {menus.map((menu, index)=>(
      <div> 
        <li key={index}> {menu.title} </li>
        <img src={menu.image} alt="food recipe" width="100" height="200"/>
      </div>
    ))}
   </ul>  
    </div>
  )
}
