import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-container">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img" />
              <div className="shimmer-line short" />
              <div className="shimmer-line" />
              <div className="shimmer-line" />
            </div>
          ))}
      </div>

      {/* Inline CSS */}
      <style>{`
        .shimmer-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 20px;
        }

        .shimmer-card {
          width: 200px;
          padding: 16px;
          background: #f6f7f8;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          animation: pulse 1.5s infinite ease-in-out;
        }

        .shimmer-img {
          height: 150px;
          background: linear-gradient(
            to right,
            #eeeeee 8%,
            #dddddd 18%,
            #eeeeee 33%
          );
          background-size: 800px 104px;
          animation: shimmer 1.2s infinite linear;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .shimmer-line {
          height: 12px;
          background: linear-gradient(
            to right,
            #eeeeee 8%,
            #dddddd 18%,
            #eeeeee 33%
          );
          background-size: 800px 104px;
          animation: shimmer 1.2s infinite linear;
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .shimmer-line.short {
          width: 60%;
        }

        @keyframes shimmer {
          0% {
            background-position: -800px 0;
          }
          100% {
            background-position: 800px 0;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Shimmer;
