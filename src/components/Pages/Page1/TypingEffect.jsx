import React, { useEffect, useState } from "react";

const words = [
  "I'm Kuheli Bera",
  "I love problem-solving",
  "I love Frontend Development",
  "I love Backend Development",
  "I love Data Science",
  "I love Machine Learning",
  "I love Artificial Intelligence",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }, 90);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, charIndex]);

  return (
    <div className="bg-transparent w-full px-2 sm:px-4 flex justify-center md:justify-start">
      <h1 className="bg-transparent text-base sm:text-lg md:text-2xl font-extrabold text-white dark:text-white border-r-2 border-white pr-2 animate-pulse break-words">
        {text}
      </h1>
    </div>
  );
}
