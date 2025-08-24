import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Rescard = (props) => {
  const { resObj } = props;
  return (
    <div className="rescard">
      <div className="reslogo">
        <img
          src={resObj.image || ("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + (resObj.cloudinaryImageId || ""))}
          alt={resObj.name}
          className="card-image-style"
          style={{ width: "200px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <div className="resname">{resObj.name}</div>
      <div className="resrating">Rating: {resObj.rating || resObj.avgRating}</div>
      <div className="rescuisine">Cuisine: {Array.isArray(resObj.cuisine) ? resObj.cuisine.join(", ") : (resObj.cuisines ? resObj.cuisines.join(", ") : "")}</div>
    </div>
  );
};

const resObj = {
  // ... (your mock data unchanged)
  "status": "success",
  "restaurants": [
    // ... (your restaurant objects)
  ]
};

function Body() {
  const [resData, setresData] = useState(resObj.restaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json); // Inspect this in your browser console to find the correct path
      
      // Find the card with the restaurant grid and update the path
      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const apiRestaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (apiRestaurants) {
        // The actual restaurant data is in the `info` property of each item
        setresData(apiRestaurants.map(r => r.info));
      } else {
        // If API fails or path is wrong, you can use your mock data
        // Make sure resObj.restaurants is not empty
        setresData(resObj.restaurants); 
      }
    } catch (e) {
      // Fallback to mock data on network error
      setresData(resObj.restaurants);
    }
  };

  const handleTopRated = () => {
    setresData(resData.filter(res =>
      (res.rating || res.avgRating) >= 4.5
    ));
  };
 

  if(resData.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="rescont">
        {resData.map((restaurant) => (
          <Rescard key={restaurant.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
