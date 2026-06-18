import { useEffect, useState } from "react";

export default function Terminal() {
  const commands = [
    "Software Engineer",
    "DevOps Engineer",
    "Python Developer",
    "Cloud Enthusiast",
    "Automation Specialist"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      if (current <= commands[index].length) {
        setText(commands[index].slice(0, current));
        current++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % commands.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-black rounded-xl p-6 mt-10 max-w-2xl mx-auto border border-zinc-700">
      <div className="text-green-400 font-mono">
        $ whoami
      </div>

      <div className="text-blue-400 mt-4 font-mono">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}