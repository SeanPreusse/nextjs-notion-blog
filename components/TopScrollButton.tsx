"use client";

import { Button } from "@/components/button";
import useScrollToTop from "../app/hook/useScrollToTop";
import { MoveUp } from "lucide-react";

const ScrollToTopButton = () => {
  const { showTopButton, scrollToTop } = useScrollToTop();

  return (
    <Button
      className={`fixed bottom-8 right-4 transition-opacity duration-300 rounded-full px-2 py-3 ${
        showTopButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <MoveUp />
    </Button>
  );
};

export default ScrollToTopButton;
