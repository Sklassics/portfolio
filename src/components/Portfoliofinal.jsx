import React from "react";
import PortfolioTemplate from "./PortfolioTemplate";

const PortfolioFinal = () => {
  return (
    <div className="w-full">
      <PortfolioTemplate showCustomize={false} /> {/* Hide inputs */}
    </div>
  );
};

export default PortfolioFinal;
