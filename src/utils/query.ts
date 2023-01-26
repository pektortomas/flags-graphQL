export const queries = {
  COUNTRIES_QUERY: `
{
    countries {
        name
        code
    }
}
`,
  COUNTRIES_AND_LANGUAGES_QUERY: `
query ($countryCode: [String]){
    countries(filter: {code: {in: $countryCode}}) {
        languages{
            name
        }
    }
}
`,
} as const;
