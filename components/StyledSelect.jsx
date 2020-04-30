import React from "react";
import Select from "react-select";

export default function StyledSelect(props) {
  return (
    <Select
      className="select-box"
      styles={{
        menu: (styles) => ({
          ...styles,
          boxShadow: 0,
          padding: 0,
          zIndex: 1000,
        }),
        valueContainer: (styles) => ({
          ...styles,
          display: "flex",
          alignItems: "center",
        }),
        dropdownIndicator: (styles) => ({ ...styles }),
        indicatorSeparator: (styles) => ({
          ...styles,
          backgroundColor: "transparent",
        }),
        container: (styles) => ({
          ...styles,
          width: 150,
          textTransform: "none",
          border: "1px solid #f0f3f6",
          borderRadius: 5,
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? "white !important" : "black",
          background: !state.isSelected ? "white" : "#6880dd  !important",
          padding: 10,
          fontSize: "1rem",
          cursor: "pointer",
          border: "1px solid #f0f3f6",
          borderBottom: 0,
          ":active": {
            background: "#6880dd",
            color: "white",
          },
          ":hover": {
            background: "#f0f3f6",
            color: "black",
          },
          ":first-of-type": {
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          },
          ":last-child": {
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
        }),
        control: (styles, state) => ({
          ...styles,
          border: 0,
          display: "flex",
          alignItems: "center",
          boxShadow: "0px",
          fontSize: "1rem",
          ":hover": {
            borderColor: "transparent",
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          background: "white",
        }),
        input: (styles) => ({
          ...styles,
          height: "100%",
          textTransform: "none",

          marginBottom: 0,
        }),
        placeholder: (styles) => ({
          ...styles,
          color: "black",
          textTransform: "none",
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = "opacity 300ms";
          return { ...provided, opacity, transition };
        },
      }}
      {...props}
    />
  );
}
