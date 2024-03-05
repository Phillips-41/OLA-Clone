"use client";
import HomeNavbar from "./Components/user/HomePage/HomeNavbar";
import Banner from "./Components/user/HomePage/Banner";
import CardVideoSection from "./Components/user/HomePage/CardVideoSection";
import Footer from "./Components/user/HomePage/Footer";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
