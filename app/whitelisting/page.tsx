import { VideoBackground } from "../ui/bg-video";
import ComingSoon from "../ui/coming-soon";
import { Navbar } from "../ui/navbar";

export default function Whitepaper() {
  return (
    <VideoBackground as="section">
      <Navbar />
      <ComingSoon />
    </VideoBackground>
  );
}
