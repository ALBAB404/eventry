import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <>
      <main className="mt-4">
        <div className="container">
          <Header />
          <EventList />
        </div>
      </main>
    </>
  );
}
