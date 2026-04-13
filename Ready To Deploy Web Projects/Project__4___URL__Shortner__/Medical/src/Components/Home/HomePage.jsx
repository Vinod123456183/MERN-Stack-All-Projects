import React, { useState } from "react";
import axios from "axios";

function HomePage() {
  const [link, setLink] = useState("");
  const [gen, setGen] = useState(null);
  const [msg, setMsg] = useState("");
  const [checkVal, setCheckVal] = useState("");
  const [stat, setStat] = useState(null);

  const submitIt = async () => {
    if (!link) return setMsg("Please enter a URL");

    try {
      const res = await axios.post("http://localhost:3001/shorturls", {
        url: link,
        validity: 60 * 24 * 365,
      });
      setGen(res.data);
      setMsg("");
    } catch (e) {
      setMsg(" Error ");
    }
  };

  const checkIt = async () => {
    if (!checkVal) return setMsg("Enter short code (e.g., abc123)");

    try {
      const res = await axios.get(
        `http://localhost:3001/shorturls/${checkVal}`
      );
      setStat(res.data);
      setMsg("");
    } catch (e) {
      setMsg(" No Link");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          🔗 Mini URL Shortener
        </h1>

        {/* URL Shortener */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1️⃣ Create Short URL</h2>
          <input
            className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter long URL"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            onClick={submitIt}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Shorten
          </button>
          {gen && (
            <div className="mt-4 bg-blue-50 border border-blue-200 p-3 rounded-md">
              <p>
                Short URL:&nbsp;
                <a
                  href={gen.shortLink}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {gen.shortLink}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
