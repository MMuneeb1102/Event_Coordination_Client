import React, { useState } from 'react';

const EventDetails = () => {
  const [comments, setComments] = useState([
    { id: 1, user: 'John', text: 'Looking forward to it!' },
    { id: 2, user: 'Alice', text: 'Can’t wait!' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      id: comments.length + 1,
      user: 'Guest',
      text: newComment.trim(),
    };
    setComments([...comments, newEntry]);
    setNewComment('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Event Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro Gaming Tournament</h2>
        <p className="text-gray-600 mb-2">🎮 Join us for an epic gaming battle! Cash prizes and glory await!</p>
        <p className="text-sm text-gray-500">🗓️ Date: July 25, 2025</p>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>

        <div className="space-y-4 mb-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b pb-2">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">{comment.user}:</span> {comment.text}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments yet. Be the first!</p>
          )}
        </div>

        {/* Add Comment */}
        <form onSubmit={handleAddComment} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
