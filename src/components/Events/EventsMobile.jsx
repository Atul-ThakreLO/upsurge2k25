import React from "react";
import { EventsDataDesktop } from "../../../data";
import EventCard from "./EventCard";

const EventsMobile = () => {
  return (
    <div className="w-full max-w-[80vw] mx-auto flex flex-col gap-16 mt-24 px-4">
      {EventsDataDesktop.map((event, index) => (
        <div id={event.id} key={`card-${index}`} className="event-card relative w-full">
          <EventCard
            title={event.title}
            poster={event.poster}
            description={event.description}
            prizePool={event.prizePool}
            entryFees={event.entryFees}
            teamMembers={event.teamMembers}
          />
        </div>
      ))}
    </div>
  );
};

export default EventsMobile;
