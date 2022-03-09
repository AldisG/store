import React, { Component } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { client } from "./util/apiDataFetcher";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import { mainStoreData } from "./util/graphQlSchemas";
import { allMainStoreData } from "./util/graphQlSchemas";
import ErrorPage from "./pages/ErrorPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeApiData: [],
      isLoading: true,
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
        console.log(result.data);
        this.setState({ storeApiData: result.data.categories });
        this.setState({ isLoading: result.loading });
      });
  }
  // componentDidUpdate(_, prevState) {
  //   if (prevState.storeApiData !== this.state.storeApiData) {
  //     console.log(this.state.storeApiData);
  //   }
  // }
  render() {
    if (this.state.isLoading) {
      return <h2>Loading</h2>;
    }
    return (
      <div className="App">
        <div className="nav">Navigation links 3x</div>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/:ID" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
