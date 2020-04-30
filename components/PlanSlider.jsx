import React, { useEffect, useContext } from "react";
import { currencySymbol } from "../lib/currencySymbol";
import SinglePlan from "./SinglePlan";
import { AppContext } from "../pages/_app";

export function PlanSlider({ plans }) {
  const appContext = useContext(AppContext);
  return (
    <div className="plans-wrapper">
      <div className="plans-inner">
        {plans.map((e, i) => {
          return (
            <SinglePlan
              currencySymbol={currencySymbol(appContext.currency)}
              popular={i === 1}
              key={e.ID}
              {...e}
            />
          );
        })}
      </div>
    </div>
  );
}
