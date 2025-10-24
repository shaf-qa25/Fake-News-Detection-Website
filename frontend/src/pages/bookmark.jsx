import React, { useEffect, useState } from "react";

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // Fetch bookmarks for logged-in user
  const fetchBookmarks = async () => {
    if (!token) {
      setError("Login first to see your bookmarks");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://vernis.onrender.com/api/bookmarks", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch bookmarks");

      const data = await res.json();
      setBookmarks(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching bookmarks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // Remove a bookmark (toggle)
  const handleRemoveBookmark = async (bookmarkId) => {
    try {
      const res = await fetch("https://vernis.onrender.com/api/bookmarks/toggle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          // Send title & content so backend can find & remove
          title: bookmarks.find((b) => b._id === bookmarkId).title,
          content: bookmarks.find((b) => b._id === bookmarkId).content,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to remove");

      // Update frontend immediately
      setBookmarks(bookmarks.filter((b) => b._id !== bookmarkId));
    } catch (err) {
      console.error(err);
      alert("Error removing bookmark");
    }
  };

  if (loading) return <p className="p-4">Loading bookmarks...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b-2 border-indigo-600 pb-2">
        Your Bookmarked News
      </h2>
      
      {bookmarks.length === 0 ? (
        <p className="text-gray-600 text-lg">No bookmarks yet!</p>
      ) : (
        // Grid Layout: Image jaisa 2-column grid desktop par
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookmarks.map((bookmark) => {
            const isFake = bookmark.prediction?.label?.toLowerCase() === 'fake';
            const predictionColor = isFake ? 'text-red-600' : 'text-green-600';
            const cardBgColor = isFake ? 'bg-red-50/50' : 'bg-white';
            
            return (
              <div
                key={bookmark._id}
                className={`flex flex-col p-4 md:p-5 ${cardBgColor} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative border border-gray-100`}
              >
                
                {/* Thumbnail Image Placeholder (Right side) */}
                

                <div className="pr-20"> {/* Right padding for image space */}
                    

                    {/* News Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {bookmark.title || bookmark.content.slice(0, 50) + '...'}
                    </h3>

                    {/* News Content Snippet / URL Placeholder */}
                    <p className="text-xs text-blue-500 mb-3 truncate max-w-full">
                        {bookmark.content.slice(0, 100)}...
                    </p>
                </div>

                {/* Footer and Actions */}
                <div className="flex flex-col pt-3 border-t border-gray-100">
                    {/* Prediction */}
                    {bookmark.prediction && (
                        <div className="flex items-center space-x-2 mb-2">
                            <strong className="text-sm">Prediction:</strong> 
                            <span className={`font-bold text-sm ${predictionColor}`}>
                              {bookmark.prediction.label.toUpperCase()}
                            </span>
                        </div>
                    )}
                    
                    {/* Action Icons (Image jaisa) */}
                    <div className="flex items-center justify-start space-x-4 text-gray-500">
                        {/* Like/Views Icon */}
                        <div className="flex items-center space-x-1 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>939</span>
                        </div>
                        
                        {/* Comments Icon */}
                        <div className="flex items-center space-x-1 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.148A9.006 9.006 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            <span>54</span>
                        </div>
                        
                        {/* Remove Button (Bookmark Icon) */}
                        <button
                            onClick={() => handleRemoveBookmark(bookmark._id)}
                            className="flex items-center space-x-1 text-red-500 hover:text-red-700 transition font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5zM15 11l-3 3-3-3"></path></svg>
                            <span className="text-sm">Remove</span>
                        </button>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default BookmarkPage;
