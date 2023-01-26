import { useQuery } from "urql";
import { queries } from "../utils/query";
import { css } from "@emotion/react";
import { getFlagImg } from "../utils/helperFunctions";
/** @jsxImportSource @emotion/react */

type Country = {
  name: string;
  emoji: string;
  code: string;
};

type CountryProps = {
  countryData: Country;
};

const CountryContainer = ({ countryData }: CountryProps) => {
  const style = {
    container: css({
      width: "18rem",
      minHeight: "10rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid gray",
      borderRadius: "15px",
      padding: "1rem 1.5rem",
      margin: "1rem 1rem",
      textAlign: "center",
    }),
    languagesContainer: css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      maxHeight: "10rem",
      padding: "1rem 1rem",
      overflowY: "auto",
    }),
    flag: css({
      width: "24px",
      height: "18px",
    }),
  };

  const [result] = useQuery({
    query: queries.COUNTRIES_AND_LANGUAGES_QUERY,
    variables: { countryCode: countryData.code },
  });

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <div css={style.container}>
        <img css={style.flag} src={getFlagImg(countryData.code)} alt={`${countryData.name}_flag`} />
        <h4>{countryData.name}</h4>
      </div>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <div css={style.container}>
      <img css={style.flag} src={getFlagImg(countryData.code)} alt={`${countryData.name}_flag`} />
      <h4>{countryData.name}</h4>
      <div css={style.languagesContainer}>
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
