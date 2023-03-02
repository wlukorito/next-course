import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../helpers/api-utils";

function FilteredEventsPage(props) {
  const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const [filterYear, filterMonth] = filterData;
  // const year = parseInt(filterYear);
  // const month = parseInt(filterMonth);
  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found matching search criteria!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <ResultsTitle date={new Date(props.date.year, props.date.month - 1)} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [filterYear, filterMonth] = filterData;
  const year = parseInt(filterYear);
  const month = parseInt(filterMonth);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      events: filteredEvents,
      date: {
        year,
        month,
      },
    },
  };
}

export default FilteredEventsPage;
