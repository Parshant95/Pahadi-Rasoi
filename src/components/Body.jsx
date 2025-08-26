import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Rescard = ({ resObj }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transform: "scale(1)",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative", width: "100%", height: "160px" }}>
        <img
          src={
            resObj.image ||
            ("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              (resObj.cloudinaryImageId || ""))
          }
          alt={resObj.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "8px",
            left: "8px",
            backgroundColor: "green",
            color: "white",
            fontSize: "12px",
            fontWeight: "600",
            padding: "4px 8px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          ⭐ {resObj.rating || resObj.avgRating || "N/A"}
        </span>
      </div>

      {/* Text Section */}
      <div style={{ padding: "12px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1f2937",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: "4px",
          }}
        >
          {resObj.name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {Array.isArray(resObj.cuisine)
            ? resObj.cuisine.join(", ")
            : resObj.cuisines
            ? resObj.cuisines.join(", ")
            : "Various"}
        </p>
      </div>
    </div>
  );
};

const resObj = {
  status: "success",
  restaurants: [
    // mock restaurants here
  ],
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
    console.log(json);

    // Collect all cards containing restaurants
    const restaurantCards = json?.data?.cards?.filter(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // Merge them into a single array
    const apiRestaurants = restaurantCards.flatMap(
      (card) => card.card.card.gridElements.infoWithStyle.restaurants
    );

    if (apiRestaurants?.length > 0) {
      setresData(apiRestaurants.map((r) => r.info));
    } else {
      setresData(resObj.restaurants);
    }
  } catch (e) {
    setresData(resObj.restaurants);
  }
};

  const handleTopRated = () => {
    setresData(resData.filter((res) => (res.rating || res.avgRating) >= 4.5));
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div style={{ padding: "24px" }}>
      {/* Filter Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" , display: "flex", alignItems: "center", gap: "8px"}}>
          Pahadi Rasoi
        </h2>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "darkgreen")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "green")
          }
          onClick={handleTopRated}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {resData.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}
          style={{ textDecoration: "none", color: "inherit" }}
          >
            <Rescard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
