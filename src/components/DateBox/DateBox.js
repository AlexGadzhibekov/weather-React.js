import React from "react";
import "../DateBox/DateBox.css";

export default function DateBox({ date }) {
  const dateBuilder = (dates) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[dates.getDay()];
    let date = dates.getDate();
    let month = months[dates.getMonth()];
    let year = dates.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return <div className="date">{dateBuilder(date)}</div>;
}
