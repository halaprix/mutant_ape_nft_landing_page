import Head from "next/head";
import FaqSection from "../components/FaqSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RoadmapSection from "../components/RoadmapSection";
import SocialSection from "../components/SocialSection";
import TeamSection from "../components/TeamSection";

function Home() {
  return (
    <>
      <Head>
        <title>MUTANT APE SOLANA CLUB</title>
      </Head>
      <Header />
      <HeroSection />
      <RoadmapSection />
      <TeamSection />
      <FaqSection />
      <SocialSection />
    </>
  )
}

export default Home
