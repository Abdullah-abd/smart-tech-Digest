import React from "react";
import { Link } from "wouter";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightbg px-4 text-center">
      {/* 404 Heading */}
      <h1 className="text-6xl font-extrabold text-watermelon mb-2">404</h1>

      {/* Subheading */}
      <p className="text-muted text-sm mb-6">
        Page not found. The link you followed may be broken or the page may have
        been removed.
      </p>

      {/* Go Back Button */}
      <Link href="/">
        <a className="bg-watermelon text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-rose-500 transition">
          Go back home
        </a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
