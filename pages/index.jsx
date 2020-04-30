import Head from "next/head";
import { getPlans } from "../lib/data";
import StyledSelect from "../components/StyledSelect";
import { useContext, useMemo, useState, useEffect } from "react";
import { AppContext } from "./_app";
import SinglePlan from "../components/SinglePlan";
import { planOptions, currencyOptions } from "../lib/options";
import { PlanSlider } from "../components/PlanSlider";

export default function Home({ Plans }) {
  const appContext = useContext(AppContext);
  const [plans, setPlans] = useState(Plans);
  const filteredPlans = useMemo(
    () =>
      [
        {
          ID: "freeTier",
          Type: 1,
          Name: "free",
          Title: "ProtonMail Free",
          MaxDomains: 1,
          MaxAddresses: 1,
          MaxSpace: 53687090,
          MaxMembers: 1,
          MaxVPN: 0,
          MaxTier: 0,
          Services: 1,
          Features: 0,
          Pricing: { "1": 0, "12": 0, "24": 0 },
          Currency: "EUR",
          Quantity: 1,
          Cycle: 1,
          Amount: 500,
        },
        ...Plans.filter(
          (e) =>
            e.Name === "plus" ||
            e.Name === "professional" ||
            e.Name === "visionary"
        ),
      ].map((e) => {
        switch (e.Name) {
          case "free":
            e.Description = "The basics for private and secure communications";
            break;
          case "plus":
            e.Description = "Full featured mailbox with advanced proection";
            break;
          case "professional":
            e.Description = "ProtonMail for professionals and businesses";
            break;
          case "visionary":
            e.Description = "ProtonMail for families and small businesses";
            break;
        }
        return e;
      }),
    [plans]
  );
  useEffect(() => {
    getPlans({ currency: appContext.currency }).then((e) => setPlans(e.Plans));
  }, [appContext.currency]);
  return (
    <div className="fullpage centered">
      <Head>
        <title>Proton Test</title>
      </Head>
      <div className="wrapper">
        <div className="plans-header">
          <div className="plans-header__left">
            <h1>Plans & Prices</h1>
          </div>
          <div className="plans-header__right">
            <StyledSelect
              value={planOptions.filter((e) => e.value === appContext.pricing)}
              options={planOptions}
              onChange={(e) => appContext.setPricing(e.value)}
              instanceId="pricingSelect"
            />
            <StyledSelect
              value={currencyOptions.filter(
                (e) => e.value === appContext.currency
              )}
              onChange={(e) => appContext.setCurrency(e.value)}
              options={currencyOptions}
              instanceId="currencySelect"
            />
          </div>
        </div>
        <PlanSlider plans={filteredPlans} />
      </div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const { Plans } = await getPlans({ currency: "EUR" });
  return { props: { Plans } };
}
