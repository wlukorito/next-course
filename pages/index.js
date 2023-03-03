import Head from "next/head";

import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve.."
        />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
