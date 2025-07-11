import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../css/Events.css';
import EventCard from '../components/Events/EventCard';

const Events = () => {
    const events = [
        {
            title: 'Team Sync Meeting',
            date: '15/07/25',
            time: '10:00 AM - 11:00 AM',
            location: 'Room 302, HQ',
            participants: ['Alice', 'Bob', 'Charlie']
        },
        {
            title: 'Product Launch Briefing',
            date: 'July 18, 2025',
            time: '2:00 PM - 3:30 PM',
            location: 'Zoom',
            participants: ['Diana', 'Eve', 'Frank']
        },
        {
            title: 'Marketing Review',
            date: '20/07/25',
            time: '9:00AM - 10:00AM',
            location: 'Room 101, HQ',
            participants: ['Grace', 'Heidi']
        }
    ];

    return (
        <>
            <div className="heading-strip">Events</div>
            <CssBaseline />
            <Container maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid className='card-main-grid' container spacing={3}>
                    {events.map((event, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                            <EventCard
                                title={event.title}
                                date={event.date}
                                time={event.time}
                                location={event.location}
                                participants={event.participants}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Events;
