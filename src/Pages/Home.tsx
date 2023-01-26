import { useQuery } from "urql";
import { queries } from "../utils/query";
import { useState } from "react";
import CountryContainer from "../Components/CountryContainer";

type Country = {
  name: string;
  emoji: string;
  code: string;
};

const Home = () => {
  const [pageFrom, setPageFrom] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPerPage = 10;

  const [result] = useQuery({
    query: queries.COUNTRIES_QUERY,
  });

  const { data, fetching, error } = result;

  const countriesToPage = data ? data.countries.slice(pageFrom, pageFrom + maxPerPage) : [];

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <section>
        {countriesToPage.map((country: Country, index: number) => (
          <CountryContainer key={index} countryData={country} />
        ))}
      </section>
    </div>
  );
};

export { Home };
