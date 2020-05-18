import React, { useEffect } from 'react';
import Service from "../services/index";

export default function ShipsListing() {
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        Service.getRequest('/result').then((res) => {console.log("res",res.json())});
    });
  return <h2>ShipsListing</h2>;
}