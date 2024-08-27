import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_articles">
      <div className="widgets_articles_left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articles_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>linkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("react is awsome", "Top news -999 readers")}
      {newsArticle("flutter is good", "Top news -596 readers")}
      {newsArticle("laravel is cool", "Top news -823 readers")}
    </div>
  );
}

export default Widget;
