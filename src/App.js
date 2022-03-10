import React, { Component } from "react";
import { gql } from "@apollo/client";

import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
// import { mainStoreData } from "./util/graphQlSchemas";
import { allMainStoreData } from "./util/graphQlSchemas";
import ErrorPage from "./pages/ErrorPage";
import { client } from "./util/apiDataFetcher";
import Navigation from "./components/Navigation";
import LoadingHinter from "./components/LoadingHinter";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeApiData: [],
      isLoading: true,
      categoryChoices: [],
      currencies: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          ${allMainStoreData}
        `,
      })
      .then((result) => {
        // console.log(result.data.currencies);
        const categories = result.data.categories.map(({ name }) => name);
        this.setState({ storeApiData: result.data.categories });
        this.setState({ isLoading: result.loading });
        this.setState({ categoryChoices: categories });
        this.setState({ currencies: result.data.currencies });
      });
  }
  // componentDidUpdate(_, prevState) {
  //   if (prevState.storeApiData !== this.state.storeApiData) {
  //     console.log(this.state.storeApiData);
  //   }
  // }
  render() {
    const { categoryChoices, isLoading, storeApiData, currencies } = this.state;
    if (isLoading) {
      return <LoadingHinter />;
    }
    return (
      <div className="App">
        {categoryChoices.length > 0 && (
          <>
            <Navigation categories={categoryChoices} currencies={currencies} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProductsPage
                    storeApiData={storeApiData}
                    selectedCategory={categoryChoices[0]}
                  />
                }
              />
              <Route path="/:ID" element={<Product />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        )}
      </div>
    );
  }
}

export default App;
