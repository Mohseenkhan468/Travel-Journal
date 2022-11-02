import React from "react";

export default function Card(props) {
    console.log(props)
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        alt="card-img"
        className="card-img"
      />
      <section className="card-content">
        <p className="location">
          <span>{props.location}</span>
          <a href={props.googleMapsUrl} className="google-links">
            View on Google Maps
          </a>
        </p>
        <h1 className="card-title">{props.title}</h1>
        <h4 className="card-date">{props.startDate} - {props.endDate}</h4>
        <p className="card-description">
        {props.description}
        </p>
      </section>
    </div>
  );
}
