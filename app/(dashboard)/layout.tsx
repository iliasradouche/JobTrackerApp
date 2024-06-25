import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

/**
 * Layout component for the dashboard.
 * It renders the dashboard layout with a sidebar and a navbar.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The layout component.
 */
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Main container with grid layout
    <main className="grid lg:grid-cols-5">
      {/* Sidebar hidden on small screens and displayed on large screens */}
      <div className="hidden lg:block col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      {/* Main content displayed on all screens */}
      <div className="lg:col-span-4">
        {/* Navbar displayed on all screens */}
        <Navbar />
        {/* Container with padding and min height for child components */}
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
};

export default layout;
