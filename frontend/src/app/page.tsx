import BackgroundTexture from "@/components/background-texture";
import HomeHeader from "@/components/home/home-header";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-zinc-900 to-zinc-950">
        {/* background texture */}
        <BackgroundTexture />
        {/* header */}
        <HomeHeader />
      </div>
    </>
  );
}
