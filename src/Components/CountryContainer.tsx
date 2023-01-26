import { useQuery } from "urql";
import { queries } from "../utils/query";

type Country = {
  name: string;
  emoji: string;
  code: string;
};

type CountryProps = {
  countryData: Country;
};

const CountryContainer = ({ countryData }: CountryProps) => {
  const [result] = useQuery({
    query: queries.COUNTRIES_AND_LANGUAGES_QUERY,
    variables: { countryCode: countryData.code },
  });

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <div>
        <h4>{countryData.name}</h4>
      </div>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h4>{countryData.name}</h4>
      <div>
        <p>Languages in country:</p>
        {data.countries[0].languages.length > 0 &&
          data.countries[0].languages.map((language: { name: string }, index: number) => (
            <p key={`${countryData.code}-${language.name}`}>{language.name}</p>
          ))}
      </div>
    </div>
  );
};

export default CountryContainer;
