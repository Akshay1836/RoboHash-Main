import React from 'react'
import Hero from './components/Hero'
import { useEffect,useState } from 'react';
import Searchbutton from './components/SearchButton';
import Cardlist from './components/cardlist';

function App() {
  const [data,setData]=useState([]);
  const [searchdata,setSearchdata]=useState("");
  const [filterdata,Setfilterdata]=useState(data);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((result)=>setData(result));
  })
  
  const makeChange=(e)=>{
    const field=e.target.value.toLocaleLowerCase();
    setSearchdata(field);
  }

  useEffect(() => {
   const filterdata=data.filter((data)=>{
    return data.name.toLocaleLowerCase().includes(searchdata);
  })
   Setfilterdata(filterdata);
  }, [data,searchdata]);
  return (
    <div className='bg-gradient-to-r from-yelloshade to-greenshade -80 deg w-screen h-screen'>
      <Hero/>
      <Searchbutton makeChange={makeChange}/>
      <div className=' text-center flex flex-wrap flex-row justify-center'>
      {
        filterdata.map((data)=><Cardlist data={data.name}/>)
      } 
      </div>
    </div>
  )
}

export default App