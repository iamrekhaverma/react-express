import React, { useState, useEffect } from 'react';
import { Table, Input } from 'antd';

import Service from "../services/index";
import { columnsConfig } from "../util/table-column";

export const ShipsListing = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(()=>{
      const params = {
        params: {
          column: 'ShipName',
          text: searchText
        }
      }
      Service.getRequest('/searchCsv', params).then((res) => {setData(res.data)});
    },500);
    return () => {
      // Clean up the timer
      clearTimeout(timer);
    };
  },[searchText]);

    return  (
      <React.Fragment>
        <Input placeholder="search by shipname" onChange={(event) => {setSearchText(event.target.value)}}></Input>
        <Table dataSource={data} columns={columnsConfig} pagination={false} />
      </React.Fragment>
    );
}