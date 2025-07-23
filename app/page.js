import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";

export default function Home({ searchParams: { query } }) {
  return (
    <>
      <main className="mt-4">
        <div className="container">
          <Header />
          <EventList query={query} />
        </div>
      </main>
    </>
  );
}
