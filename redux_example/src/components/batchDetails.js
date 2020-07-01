import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function GetBatchDetails() {
  const [details, setDetails] = useState([]);

    axios
      .get("http://localhost:8080/getBatchDetails", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  console.log(details);
  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
        Display
      </Button> */}

      {details.map((detail) => (
        <div key={detail.id}>
          <Button variant='outlined'>
          <table>
          
          <tr>Batch ID: {detail.batchId}</tr>
          <tr>Batch Name: {detail.name}</tr>
          <tr>Batch Skill: {detail.skill}</tr>
          <tr>Batch Start Date: {detail.startDate}</tr>
          <tr>Batch End Date: {detail.endDate}</tr>
          <tr>Batch Location: {detail.location}</tr>
          <tr>Current Week: {detail.currentWeek}</tr>
          <tr>Progress: {(detail.currentWeek * 100) / 10}%</tr>
          </table>
          </Button>
          <br />
        </div>
      ))}
    </>
  );
}