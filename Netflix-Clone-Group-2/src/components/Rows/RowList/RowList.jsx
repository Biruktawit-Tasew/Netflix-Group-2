import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/request";

const RowList = () => {
  return (
    <>
      <Row
        title="
NETFLIX ORIGINALS"
        url={requests.originals}
        isLargeRow={true}
      />
      <Row title="Trending Now" url={requests.trending} />
      <Row title="Top-rated" url={requests.top_rated} />
      <Row title="Action Movies" url={requests.Action} />
      <Row title="Drama" url={requests.Drama} />
      <Row title="Adventure Movies" url={requests.Adventure} />
      <Row title="Animation Movies" url={requests.Animation} />
      <Row title="Documentaries" url={requests.Documentary} />
    </>
  );
};

export default RowList;
