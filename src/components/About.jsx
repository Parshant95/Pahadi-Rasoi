const About = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#2c3e50",
          marginBottom: "20px",
          borderBottom: "3px solid #4CAF50",
          paddingBottom: "8px",
        }}
      >
        About Us
      </h1>

      <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
        Welcome to <strong>Pahadi Rasoi</strong> — a restaurant app designed to
        explore and showcase delicious cuisines from around the city. Our
        mission is to bring authentic food experiences closer to you with an
        easy-to-use platform.
      </p>

      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#333",
          marginTop: "30px",
          marginBottom: "12px",
        }}
      >
        Meet the Developer
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#1f2937" }}>
            Parshant Vardhan
          </h3>
          
          <p style={{ margin: "0 0 6px 0", color: "#555" }}>
            💻 Passionate about <strong>Web Development</strong> (Frontend:
            HTML, CSS, React).
          </p>
          
          <p style={{ margin: "0", color: "#555" }}>
            🚀 Developer of Pahadi Rasoi — building user-friendly food discovery
            apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
