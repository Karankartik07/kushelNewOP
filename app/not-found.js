"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import Footer from "./COMMON/Footer";
import "./notfound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      {/* Navbar */}
      <Navbar />

      {/* Main 404 Section */}
      <main className="notfound-main">
        {/* 404 Image */}
        <div className="notfound-image">
          <Image
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1758007519/Group_10068_rdzufj.png"
            alt="404 Error"
            width={600}
            height={500}
            priority
          />
        </div>

        {/* Title */}
        <h2 className="notfound-title">Page not found</h2>

        {/* Button */}
        <Link href="/" className="notfound-btn">
          Go to Home
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
