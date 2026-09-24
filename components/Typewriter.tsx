"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = texts[index];

  useEffect(() => {
    const typeSpeed = deleting ? 60 : 120;
    const stay = 2500;

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), stay);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex(subIndex + (deleting ? -1 : 1)),
      typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, current]);

  return (
    <div className="typewriter-line">
      <span>{current.substring(0, subIndex)}</span>
      <span className="cursor">|</span>
    </div>
  );
}
