import React from "react";

const EmptyUi = () => {
  return (
    <div className="bg-[#11111a] border border-[#1d1d2b] rounded-3xl p-14 text-center">
      <div className="text-6xl mb-5">💪</div>

      <h2 className="text-2xl font-bold text-white mb-3">No Plans Found</h2>

      <p className="text-gray-500">
        Start creating workout and food plans to see them here.
      </p>
    </div>
  );
};

export default EmptyUi;
