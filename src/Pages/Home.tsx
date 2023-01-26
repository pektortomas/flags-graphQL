import { useQuery } from "urql";
import { queries } from "../utils/query";
import { useState } from "react";
import CountryContainer from "../Components/CountryContainer";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

type Country = {
  name: string;
  emoji: string;
  code: string;
};

const Home = () => {
  const [pageFrom, setPageFrom] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPerPage = 10;

  const style = {
    page: css({
      maxWidth: "100vw",
      mineight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      overflow: "hidden",
    }),
    countryList: css({
      width: "100vw",
      maxHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }),
    buttonRow: css({
      width: "100%",
      margin: "10rem 0",
      display: "flex",
      justifyContent: "center",
      alignSelf: "flex-start",
    }),
    button: css({
      padding: "1.5rem 3rem",
      margin: "0 1rem",
      borderRadius: "15px",
      border: "none",
      outline: "none",
      cursor: "pointer",
    }),
  };

  const [result] = useQuery({
    query: queries.COUNTRIES_QUERY,
  });

  const { data, fetching, error } = result;

  const countriesToPage = data ? data.countries.slice(pageFrom, pageFrom + maxPerPage) : [];

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div css={style.page}>
      <section css={style.countryList}>
        {countriesToPage.length > 0 ? (
          countriesToPage.map((country: Country, index: number) => (
            <CountryContainer key={index} countryData={country} />
          ))
        ) : (
          <h2>{"No more countries"}</h2>
        )}
      </section>
      {`Page: ${currentPage}`}
      <div css={style.buttonRow}>
        {currentPage > 1 && (
          <button
            css={style.button}
            onClick={() => {
              setPageFrom(pageFrom - maxPerPage);
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev Page
          </button>
        )}
        {currentPage < data.countries.length / maxPerPage && (
          <button
            css={style.button}
            onClick={() => {
              setPageFrom(pageFrom + maxPerPage);
              setCurrentPage(currentPage + 1);
            }}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export { Home };
