import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../css/Events.css";
import EventCard from "../components/Events/EventCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllEvents } from "../redux/events/thunk/event-thunk";
import { useEffect } from "react";
import LoginButton from "../components/buttons/LoginButton";
import EventModal from "../components/Events/EventModal";
import FormLoader from "../components/loaders/FormLoader";
import CustomAlerts from "../components/CustomAlert";
import DynamicTitle from "../components/DynamicTitle";
const Events = () => {
  DynamicTitle("Events");
  const { show } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const { events, isLoading, isevPageLoading } = useSelector(
    (state) => state.events
  );
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isevPageLoading) return <FormLoader />;

  return (
    <>
      <div className="heading-strip">
        <h1>Events</h1>
        <LoginButton btnText="Create Event" onClickFunction={handleClickOpen} />
        <EventModal open={open} setOpen={setOpen} />
      </div>
      <CssBaseline />
      {show && <CustomAlerts />}
      <Container
        maxWidth="lg"
        style={{ paddingTop: "20px", paddingBottom: "20px", minHeight: "82vh" }}
      >
        <Grid className="card-main-grid" container spacing={3}>
          {events?.map((event, index) => (
            <Grid key={index}>
              <EventCard
                title={event.title}
                date={event.eventDate}
                time={event.time}
                location={event.location}
                eventId={event._id}
                // participants={event.participants}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Events;
