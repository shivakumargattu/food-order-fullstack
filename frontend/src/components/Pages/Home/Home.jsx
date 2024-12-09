
import Reac, { useState } from "react" 
import  "./Home.css"
import Header from "../../Header/Header"
import ExploreMenu from "../../ExploreMenu/ExploreMenu"
import FoodDisplay from "../../FoodDisplay/FoodDisplay"
import AppDownlad from "../../AppDownload/AppDownlad"
const Home =()=>{

    const [category,setCategory]=useState("All")
    return (
        <div>
  <Header/>
  <ExploreMenu category={category} setCategory={setCategory}/>
 <FoodDisplay category={category}/>
 <AppDownlad/>
        </div>
    )
}
export default Home