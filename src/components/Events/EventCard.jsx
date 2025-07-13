import React from 'react';
import '../../css/EventCard.css';
import { useNavigate } from 'react-router-dom';
const EventCard = ({ title, date, time, location, eventId }) => {
    const navigate = useNavigate()
    return (
        <div className="card-new1">
            <div className="img-new">
                <div className="save-new">
                    {/* SVG Save Icon */}
                    {/* <svg className="svg-new" width="683" height="683" viewBox="0 0 683 683" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                        {/* ... SVG content ... */}
                    {/* </svg> */}
                    <button onClick={()=>{navigate(`/event/${eventId}`)}}>View Event</button>
                </div>
            </div>

            <div className="text-new">
                <p className="h3-new">{title}</p>
                <p className="p-new">{date} • {time}</p>
                <p className="p-new">📍 {location}</p>
                {/* <p className="p-new">👥 {participants.length} Participants</p> */}
            </div>
        </div>
    );
};

export default EventCard;
