"use client";
import { useRouter } from "next/navigation";
import { Home, Route, NotebookPen } from "lucide-react";
import Dock from "@/src/components/reactbits/Components/Dock/Dock";

const Docked: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(`/${href}`);
  };

  const dockItems = [
    {
      icon: <Home size={24} color="white" />,
      label: "Home",
      onClick: () => router.push("/"),
      className: "cursor-pointer !bg-gray-400 dark:!bg-gray-800 !border-0",
    },
    {
      icon: <Route size={24} color="white" />,
      label: "Timeline",
      onClick: () => handleNavigation("timeline"),
      className: "cursor-pointer !bg-gray-400 dark:!bg-gray-800 !border-0",
    },
    {
      icon: <NotebookPen size={24} color="white" />,
      label: "Blog",
      onClick: () => handleNavigation("blog"),
      className: "cursor-pointer !bg-gray-400 dark:!bg-gray-800 !border-0",
    },
  ];

  return (
    <Dock
      items={dockItems}
      panelHeight={70}
      baseItemSize={50}
      magnification={100}
      className="dark:bg-black bg-white !border-0"
    />
  );
};

export default Docked;
