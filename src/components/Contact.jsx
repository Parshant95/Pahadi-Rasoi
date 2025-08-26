const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
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
          textAlign: "center",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Have questions or suggestions? Feel free to reach out to me!
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontSize: "16px",
          color: "#333",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <p>
          <strong>👤 Name:</strong> Parshant Vardhan
        </p>
        <p>
          <strong>📧 Email:</strong>{" "}
          <a
            href="mailto:parshantvardhan@gmail.com"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            parshantvardhan@gmail.com
          </a>
        </p>
        <p>
          <strong>📱 Phone:</strong> +91-9876543210
        </p>
        <p>
          <strong>💼 LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/parshantvardhan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            linkedin.com/in/parshantvardhan
          </a>
        </p>
        <p>
          <strong>💻 GitHub:</strong>{" "}
          <a
            href="https://github.com/Parshant95"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            github.com/Parshant95
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
