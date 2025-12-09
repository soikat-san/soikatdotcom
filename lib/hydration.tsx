"use client";
import { useEffect, useState, Fragment } from "react";

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const HydrationWrapper: React.FC<NoSSRProps> = ({
  children,
  fallback = null,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Fragment>{fallback}</Fragment>;
  }

  return <Fragment>{children}</Fragment>;
};

export default HydrationWrapper;
