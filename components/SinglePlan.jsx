import React, { useContext } from "react";
import { AppContext } from "../pages/_app";
import prettyBytes from "pretty-bytes";

export default function SinglePlan({
  Name,
  popular,
  Description,
  currencySymbol,
  Pricing,
  MaxMembers,
  MaxSpace,
  MaxTier,
  MaxDomains,
  MaxAddresses,
  Quantity,
  Services,
  ...rest
}) {
  const appContext = useContext(AppContext);
  return (
    <div className="plans-single">
      <div className="plans-upper">
        {popular && <h2 className="popular">MOST POPULAR</h2>}
        <h2 className="name">{Name}</h2>
        <div className="pricing">
          <p>
            {currencySymbol}{" "}
            <span className="big">
              {(Pricing[appContext.pricing] / 100 / appContext.pricing).toFixed(
                0
              )}
            </span>{" "}
            / mo
          </p>
          <small>
            {Pricing[appContext.pricing] && appContext.pricing !== "1" ? (
              <>
                Billed as {currencySymbol}{" "}
                {(
                  Pricing[appContext.pricing] /
                  (appContext.pricing / 12) /
                  100
                ).toFixed(0)}{" "}
                per year
              </>
            ) : (
              "\u00A0"
            )}
          </small>
        </div>
        <p className="description">{Description}</p>
        <ul className="features">
          <li>
            {`${MaxMembers}${Name === "professional" ? " - 5000" : ""}`} Users
          </li>
          <li>{prettyBytes(MaxSpace)} Storage</li>
          {Name === "free" && <li>No Domain Support</li>}
          <li>
            {MaxAddresses} address{MaxAddresses > 1 ? "es" : ""}{" "}
            {Name === "professional" ? "per user" : ""}
          </li>
          {Name !== "free" && (
            <li>
              Supports {MaxDomains} domain{MaxDomains > 1 ? "s" : ""}
            </li>
          )}
          {Name === "plus" && (
            <li>
              Supports folders, labels, filters, auto-reply, IMAP/SMTP and more
            </li>
          )}
          {Name === "professional" && (
            <li>
              Catch all email, multi user management, priority support and more
            </li>
          )}
          {Name === "visionary" && (
            <>
              <li>Includes all features</li>
              <li>Priority support</li>
            </>
          )}
          {Name !== "free" && <li>ProtonVPN (optional)</li>}
        </ul>
      </div>
      <button className="primary">Select</button>
    </div>
  );
}
