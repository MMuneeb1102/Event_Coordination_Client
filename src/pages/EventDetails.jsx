import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, getAllCommentsByEventId } from '../redux/events/thunk/comment-thunk';
import { useParams } from 'react-router-dom';
import FormLoader from '../components/loaders/FormLoader';
import { getAllEvents, getEventById } from '../redux/events/thunk/event-thunk';

const EventDetails = () => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    const { id: eventId } = useParams(); // assuming your route is /events/:id
    console.log(eventId)
    const { comments, isLoading, isError, errorMessage, isPageLoading } = useSelector(
        (state) => state.comments
    );
    const { eventDetails, isevPageLoading } = useSelector(
        (state) => state.events
    );

    useEffect(()=>{
        dispatch(getAllCommentsByEventId(eventId)).unwrap()
        dispatch(getEventById(eventId)).unwrap()
        console.log('comments', comments);
    },[])

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            await dispatch(createComment({ eventId, comment: newComment })).unwrap();
            setNewComment('');
        } catch (err) {
            console.error('Failed to post comment:', err);
        }
    };

    if (isPageLoading && isevPageLoading) return <FormLoader />;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Event Details */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Name: {eventDetails.title}</h2>
                <p className="text-gray-600 mb-2">
                    Description: {eventDetails.description}
                </p>
                <p className="text-sm text-gray-500">Date: {eventDetails.eventDate}</p>
                <p className="text-sm text-gray-500">Time: {eventDetails.time}</p>
            </div>

            {/* Comments Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>

                {isLoading && <p className="text-sm text-gray-400">Posting comment...</p>}
                {isError && <p className="text-sm text-red-500">{errorMessage}</p>}

                <div className="space-y-4 mb-4">
                    {comments.length > 0 ? (
                        comments?.map((comment) => (
                            <div key={comment._id} className="border-b pb-2">
                                <p className="text-sm text-gray-800">
                                    <span className="font-semibold">{comment.name}:</span>{' '}
                                    {comment.comment}
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
