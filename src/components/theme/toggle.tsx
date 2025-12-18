"use client";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import { useBackground } from "./bgtheme";
import { AudioWaveform, Zap, Sun, Moon } from "lucide-react";
import StaggeredMenu from "../reactbits/Components/StaggeredMenu/StaggeredMenu";

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { toggleBackground } = useBackground();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menuItems = [
    {
      label: "Light",
      ariaLabel: "Switch to light mode",
      onClick: toggleTheme,
      icon: Sun,
    },
    {
      label: "Dark",
      ariaLabel: "Switch to dark mode",
      onClick: toggleTheme,
      icon: Moon,
    },
    {
      label: "Ether",
      ariaLabel: "iridescent background",
      onClick: toggleBackground,
      icon: AudioWaveform,
    },
    {
      label: "Lumen",
      ariaLabel: "lightpillar background",
      onClick: toggleBackground,
      icon: Zap,
    },
  ];

  return (
    <Fragment>
      <StaggeredMenu
        position="right"
        isFixed
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#ff6b6b"
      />
    </Fragment>
  );
};

export default Toggle;
