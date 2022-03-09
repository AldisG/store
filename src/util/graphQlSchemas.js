export const mainStoreData = `
  query {
    categories {
      name
      products {
        id
        name
        inStock
        description
        category
        brand
      }
    }
  }
`;

export const allMainStoreData = `
  query {
    categories{
      name
      products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
      }
    }
    currencies{
      label
      symbol
    }
  }
`;
// Vel kategoriju kkadiem konkretiem itemiem filter pec id
// # category{
// #   name
// #   products{
// #     id
// #     name
// #   }
// # }
