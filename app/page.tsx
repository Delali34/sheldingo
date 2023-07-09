import LoadingScreen from "@/components/LoadingScreen";
import Mainpage from "@/components/Mainpage";
import Explore from "@/components/Explore";
import React from "react";
import Brands from "../components/Brands";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <Mainpage />
      <Explore />
      <Brands />
      <Logos />
      <Services />
      <Socials />
      <Footer />
    </>
  );
}

export default page;
