import React from "react";
import { MdVerified } from "react-icons/md";
function SuccessPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MdVerified style={{ width: "500px", height: "500px", color: "green" }} />
      <p style={{ fontSize: "50px", color: "black", fontWeight: "800" }}>
        Thank you For Confirming
      </p>
    </div>
  );
}

export default SuccessPage;
