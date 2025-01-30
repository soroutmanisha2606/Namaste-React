import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { BASE_URL } from './utils/constants';
import '../styles/card.css'
import { Button } from '@mui/material';


export default function MenuCard() {

  const [restroData,setData] = React.useState([]);
  React.useEffect(()=>{
    fetchData()
    },[])

  const fetchData = async() =>{
    try {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.1472852&lng=77.3259878&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsondata = await data.json();
        setData(jsondata?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)      // console.log('.....',restroData)
    } catch (error) {
        console.log('ERROR',error)
    }
   }
   const handleRatingSort = React.useCallback((type) =>{
    console.log('type-',type)
    let sortedData=[]
switch(type){
  case 'ratings' :
     sortedData= [...restroData].sort((a,b)=>b.info.avgRating-a.info.avgRating);
     break;
    case 'delivery_time' :
        sortedData= [...restroData].sort((a,b)=>b.info.sla.deliveryTime-a.info.sla.deliveryTime);
        break;
        // case 'low_high' :
        //   sortedData = [...restroData].sort((a,b) =>a.info.)
    default:
     sortedData = restroData;
}
setData(sortedData)
   },[restroData])
   console.log('restroData',restroData)
  return (
  <>
  <div className='button-div'>
    <Button variant="contained" onClick={()=>handleRatingSort('ratings')}>Sort By Ratings</Button>
    <Button variant="contained" onClick={()=>handleRatingSort('delivery_time')}>Sort By Deliver Time</Button>
    <Button variant="contained" onClick={()=>handleRatingSort('low_high')}>Low To High</Button>
    <Button variant="contained" onClick={()=>handleRatingSort('high_low')}>High to Low</Button>
    <Button variant="contained">Sort By Ratings</Button>
  </div>
  <div className='main-card'>
    {restroData.map((item)=>{
 return  <> <Card sx={{ maxWidth: 345 ,marginTop:3}}>

 <CardMedia
   component="img"
   height="194"
   image={BASE_URL+item.info.cloudinaryImageId}
   alt="Paella dish"
 />
  <h3> {item.info.name}</h3>
  <div className='restro-card'>
  <h4>{item.info.avgRatingString}</h4>
  <h4>{item?.info?.sla?.deliveryTime}</h4>
  </div>
  <h5>{item?.info?.cuisines?.join(' ')}</h5>
</Card></>  
    })}
</div>
</>
  );
}
