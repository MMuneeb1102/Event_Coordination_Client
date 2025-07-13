import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetEventState, updateEvents } from '../../redux/events/slice/event-slice';
import { createEvent } from '../../redux/events/thunk/event-thunk';
import FormLoader from '../loaders/FormLoader';
export default function FormDialog({ open, setOpen }) {
    const dispatch = useDispatch();
    const { title, description, date, time, location, isLoading } = useSelector((state) => state.events);

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        dispatch(resetEventState());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateField({ field: name, value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventData = {
            title,
            description,
            date,
            time,
            location,
        };

        console.log(eventData)
        try {
            const createdEvent = await dispatch(createEvent(eventData)).unwrap();
            console.log(createdEvent)
            dispatch(updateEvents(createdEvent))
            handleClose();
        } catch (error) {
            console.error("Event creation failed:", error);
        }
    };


    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog open={open}>
                <DialogTitle>Create Event</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>

                    <form className='row g-3' onSubmit={handleSubmit}>
                        <div class="col-md-6">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" name='title' value={title} onChange={handleChange}/>
                        </div>
                        <div class="col-md-6">
                            <label for="location" class="form-label">Location</label>
                            <input type="text" class="form-control" id="location" name='location' value={location} onChange={handleChange}/>
                        </div>
                        <div class="col-md-6">
                            <label for="event-date" class="form-label">Date</label>
                            <input type="date" id="event-date" name="date" className='form-control' value={date} onChange={handleChange}/>
                        </div>
                        <div class="col-md-6">
                            <label for="time" class="form-label">Time</label>
                            <input type="time" id="time" name="time" className='form-control' value={time} onChange={handleChange}/>
                        </div>

                        <div class="col-12">
                            <label for="Description" class="form-label">Description</label>
                            <textarea class="form-control" name='description' id='Description' aria-label="With textarea" onChange={handleChange} value={description}></textarea>
                        </div>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Create</Button>
                        </DialogActions>
                        {isLoading && <FormLoader/>}
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}