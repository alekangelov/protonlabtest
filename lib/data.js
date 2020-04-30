import fetch from "isomorphic-unfetch";

export const getPlans = async ({ currency = "EUR" }) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-pm-appversion": "Other",
      "x-pm-apiversion": "3",
      Accept: "application/vnd.protonmail.v1+json",
    },
    mode: "cors",
    cache: "default",
  };

  return await fetch(
    `https://api.protonmail.ch/payments/plans?${currency}`,
    config
  ).then((res) => res.json());
};
