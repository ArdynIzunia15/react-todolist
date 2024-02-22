import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function LottieAnimation({ src }) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height: "300px", width: "300px" }}
    />
  );
}
