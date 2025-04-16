"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type TypewriterTextProps = {
  titles: string[];
  className?: string;
};

const TypewriterText = ({ titles, className = "" }: TypewriterTextProps) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];
    const speed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, titles]);

  return (
    <span className={twMerge("text-fuchsia-400", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
