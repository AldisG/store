import React, { Component } from "react";
import { gql } from "@apollo/client";

import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
// import { mainStoreData } from "./util/graphQlSchemas";
import { allMainStoreData } from "./util/graphQlSchemas";
import ErrorPage from "./pages/ErrorPage";
import { client } from "./util/apiDataFetcher";
import "./App.scss";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeApiData: [],
      isLoading: true,
      categoryChoices: [],
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
        const categories = result.data.categories.map(({ name }) => name);
        this.setState({ storeApiData: result.data.categories });
        this.setState({ isLoading: result.loading });
        this.setState({ categoryChoices: categories });
      });
  }
  // componentDidUpdate(_, prevState) {
  //   if (prevState.storeApiData !== this.state.storeApiData) {
  //     console.log(this.state.storeApiData);
  //   }
  // }
  render() {
    const { categoryChoices, isLoading, storeApiData } = this.state;
    if (isLoading) {
      return <h2>Loading</h2>;
    }
    console.log(categoryChoices[0]);
    return (
      <div className="App">
        <Navigation categories={categoryChoices || ["no categories"]} />
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
      </div>
    );
  }
}

export default App;
