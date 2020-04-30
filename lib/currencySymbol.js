export const currencySymbol = (currency) => {
  switch (currency) {
    case "EUR":
      return "€";
    case "USD":
      return "$";
    case "CHF":
      return "CHF";
  }
};
