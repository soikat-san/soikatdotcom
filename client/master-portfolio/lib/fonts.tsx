import { Iceland, Sora } from "next/font/google";

const iceland = Iceland({
  subsets: ["latin"],
  weight: ["400"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export { iceland, sora };
