import "./index.scss";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { gql } from "@apollo/client";

import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";

import { allMainStoreData } from "./util/graphQlSchemas";
import { client } from "./util/apiDataFetcher";

import Navigation from "./components/navbar/Navigation";
import LoadingHinter from "./components/LoadingHinter";

// import { updateSelectedCategory } from "../../redux/storeSlice";
import { dispatch, getState } from "./redux/store";
import { mapDispatchToProps, mapStateToProps } from "./redux/mapStates";
import { connect } from "react-redux";

import { addItems } from "./redux/storeSlice";
import { addAnewItem } from "./redux/store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSuccess: false,
      storeApiData: [],
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
        const { setAllItemsList, setActiveCurrency, setActiveCategory } =
          this.props;
        const categories = result.data.categories.map(({ name }) => name);
        const activeStoreCategory = getState().cart.selectedCategory;
        const findCorrectIndex = (element) => element === activeStoreCategory;
        if (result) {
          this.setState({
            dataSuccess: true,
          });
        }
        console.log(result.data.categories);
        setActiveCategory(categories[0]);
        const { label, symbol } = result.data.currencies[0];
        setActiveCurrency({ label, symbol });

        this.setState({ storeApiData: result.data.categories });
        this.setState({ isLoading: result.loading });
        this.setState({ categoryChoices: categories });
        this.setState({ currencies: result.data.currencies });
      });
  }
  render() {
    // console.log(this.props.cart);
    const {
      categoryChoices,
      storeApiData,
      currencies,
      dataSuccess,
      isLoading,
    } = this.state;
    if (isLoading) {
      return <LoadingHinter />;
    }
    return (
      <div className="App">
        {dataSuccess && (
          <>
            <Navigation categories={categoryChoices} currencies={currencies} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProductsPage
                    storeApiData={storeApiData}
                    selectedCategory={categoryChoices[2]}
                  />
                }
              />
              <Route path="/:ID" element={<SingleProductPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
