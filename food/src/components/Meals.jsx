import { useEffect, useState } from "react"
import MealItem from "./MealItem.jsx"
export default function Meals()
 {
    const [loadedMeals, setLoadedmeals] = useState([])
    //get/meals
    // can send http rqst by using fetch()itn will return a promise so then wil tke
    
    useEffect(()=>{async function fetchMeals()
     {
        const response = await fetch('http://localhost:3000/meals')

        if (!response.ok) {
            //...
        }
        const meals = await response.json()
        setLoadedmeals(meals)
    }
        fetchMeals();

    },[])




    

    return (
    <ul id="meals">
        {loadedMeals.map((meal) =>
           (  
            //  <li key={meal.id}>{meal.name}
            //  </li>)} alternative to meal comp data
            <MealItem key={meal.id}
             meal={meal}/>
           ))}
    </ul>
    );

}