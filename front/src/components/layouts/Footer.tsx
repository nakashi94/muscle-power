import React, { memo } from "react";

export const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-900 w-full">
      <div className="container mx-auto px-8">
        <div className="text-2xl font-bold">GoriGori</div>
      </div>
    </footer>
  );
});
