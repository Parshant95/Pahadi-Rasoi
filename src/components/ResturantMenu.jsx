import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [resinfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!data.ok) throw new Error("Failed to fetch menu");
      const json = await data.json();
      setResInfo(json.data);
      setError(null);
    } catch (err) {
      setError("Could not load menu. Please try again later.");
      setResInfo(null);
    }
  };

  if (error)
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        {error}
      </div>
    );

  if (resinfo === null) return <Shimmer />;

  // Get restaurant name
  const restaurantName = resinfo?.cards?.[2]?.card?.card?.info?.name;

  // Get menu sections
  const menuCards =
    resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Filter ItemCategory sections
  const menuSections = menuCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        {restaurantName}
      </h1>
      <h2
        style={{
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          color: "#555",
        }}
      >
        Menu
      </h2>

      {menuSections.length > 0 ? (
        menuSections.map((section, idx) => {
          const title = section?.card?.card?.title;
          const items = section?.card?.card?.itemCards || [];
          return (
            <div
              key={idx}
              style={{
                marginBottom: "25px",
                borderBottom: "1px solid #eee",
                paddingBottom: "15px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  marginBottom: "12px",
                  borderLeft: "5px solid #4CAF50",
                  paddingLeft: "10px",
                }}
              >
                {title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, i) => {
                  const info = item?.card?.info;
                  return (
                    <li
                      key={i}
                      style={{
                        marginBottom: "12px",
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                        transition: "transform 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.02)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <strong style={{ color: "#333", fontSize: "16px" }}>
                        {info?.name}
                      </strong>{" "}
                      <span style={{ color: "#4CAF50", fontWeight: "600" }}>
                        ₹
                        {info?.price
                          ? info.price / 100
                          : info?.defaultPrice
                          ? info.defaultPrice / 100
                          : "N/A"}
                      </span>
                      <p style={{ fontSize: "14px", color: "#666" }}>
                        {info?.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: "center", color: "#999" }}>No menu items found.</p>
      )}
    </div>
  );
};

export default ResturantMenu;
