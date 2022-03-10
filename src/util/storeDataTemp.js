import { client } from "./apiDataFetcher";
import { gql } from "@apollo/client";

export function storeDataTemp(storeDataString) {
  client
    .query({
      query: gql`
        ${storeDataString}
      `,
    })
    .then((result) => {
      return {
        storeApiData: result.data.categories,
        isLoading: result.loading,
      };
    });
}

// export default storeDataTemp;
