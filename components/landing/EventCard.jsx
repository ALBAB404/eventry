import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event.imageUrl}
        alt={event.name}
        className="w-full"
        width={300}
        height={300}
      />
      <div className="p-3">
        <Link href={`/details/${event.id}`} className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          {event.location}
        </p>
        {/* <div className="text-[#737373] text-sm mt-1">
          <span>{event.interested_ids.length} Interested</span>
          <span>|</span>
          <span>{event.going_ids.length} Going</span>
        </div> */}
        {/* Buttons */}
        <div className="w-full flex gap-4 mt-4">
          {/* bg-indigo-600 indicating Active */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-800">
            Interested
          </button>
          {/* bg-green-600 indicating Active */}
          <Link href={`/payment`} className="w-full">Going</Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
