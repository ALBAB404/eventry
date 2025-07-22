import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/query";

const EventDetailsPage = async ({params: {id}}) => {
  const event = await getEventById(id);
  console.log(event);
  return (
    <>
      <HeroSection event={event} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={event.details} swags={event.swag} />
          <EventVenue location={event.location} />
        </div>
      </section>
    </>
  )
}

export default EventDetailsPage