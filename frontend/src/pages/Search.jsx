import React, { useState } from "react";
import OfficeImage from './OfficeImage.jpg';

const SearchPage = () => {
  const [newsText, setNewsText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [bookmarkMessage, setBookmarkMessage] = useState("");

  const token = localStorage.getItem("token");
  const API_URL = "https://vernis.onrender.com";

  const handleCheckNews = async () => {
    if (!newsText.trim()) return;

    setIsLoading(true);
    setPredictionResult(null);
    setBookmarkMessage("");

    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newsText }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert(data.error || "ML service error");
      } else {
        setPredictionResult(data);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleBookmark = async () => {
    if (!predictionResult) return;

    if (!token) {
      alert("Login first to bookmark news");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/bookmarks/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newsText.slice(0, 50) + "...",
          content: newsText,
          prediction: predictionResult,
        }),
      });

      const data = await res.json();
      setBookmarkMessage(data.message);
    } catch (error) {
      console.error(error);
      setBookmarkMessage("Server error while bookmarking");
    }
  };

  const mainContentStyle = {
    backgroundImage: `url(${OfficeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.4)",
    minHeight: "100vh",
  };

  return (
    <div className="font-sans">
      <main className="flex items-center justify-center pt-20" style={mainContentStyle}>
        <div className="w-full max-w-4xl p-8 md:p-16 rounded-xl relative">
          <textarea
            value={newsText}
            onChange={(e) => {
              setNewsText(e.target.value);
              setBookmarkMessage("");
            }}
            rows={8}
            placeholder="Paste or type the news article here"
            className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none shadow-inner"
            style={{ backgroundColor: "#D9A44142" }}
          />

          <button
            onClick={handleCheckNews}
            disabled={isLoading || newsText.trim() === ""}
            className="mt-6 px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-950 hover:bg-indigo-800 disabled:shadow-md transition duration-150 ease-in-out flex items-center justify-center"
          >
            {isLoading ? "Checking..." : "Check News"}
          </button>

          {predictionResult && predictionResult.prediction && (
            <div className="mt-4 p-4 bg-white/20 text-white rounded-lg shadow-md">
              <p className="font-semibold mb-2">Prediction Results:</p>
              {Object.entries(predictionResult.prediction).map(([model, result]) => (
                <p key={model}>
                  <strong>{model}:</strong> {result}
                </p>
              ))}

              <p className="mt-2 text-sm italic">
                Snippet: {predictionResult.snippet}
              </p>

              <button
                onClick={handleToggleBookmark}
                className="mt-4 px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition duration-150"
              >
                {bookmarkMessage || "Save to Bookmarks"}
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default SearchPage;
