import React, { useContext } from "react";
import { ThemeContext } from "../../../core/ThemeContext";

function StayConnected() {
  const { theme } = useContext(ThemeContext);

  const links = [
    { emoji: "📺", text: "YouTube Channel", url: "#" },
    { emoji: "💼", text: "LinkedIn", url: "#" },
    { emoji: "📧", text: "Email", url: "mailto:example@example.com" },
    { emoji: "🌐", text: "Website", url: "#" },
    { emoji: "📝", text: "Subscribe to my Newsletter", url: "#" },
    { emoji: "💻", text: "GitHub Repository", url: "#" },
    { emoji: "📚", text: "My Favorite Books", url: "#" },
    { emoji: "💻", text: "My Gear", url: "#" },
    { emoji: "💳", text: "PayPal Support", url: "#" },
    { emoji: "🎥", text: "Join My YouTube Community", url: "#" },
  ];

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const linkColor =
    theme === "dark"
      ? "text-blue-500 hover:text-blue-500"
      : "text-blue-500 hover:text-blue-600";

  return (
    <div className={`${textColor} py-8`}>
      <p className="text-4xl font-bold mb-6">Stay Connected</p>
      <ul className="space-y-3 list-disc list-inside">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg font-semibold ${linkColor} hover:underline`}
            >
              <span className="mr-2">{link.emoji}</span>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StayConnected;
