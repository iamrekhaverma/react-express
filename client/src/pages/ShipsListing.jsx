import React from 'react';
import { Table, Input, Space } from 'antd';

import Service from "../services/index";

export default class  ShipsListing extends React.Component {
  // const [data, setData] = useState([]);
  state = {
    searchText: '',
    searchedColumn: '',
    data: []
  };
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Armaments',
        dataIndex: 'Armaments',
        key: 'Armaments',
      },
      {
        title: 'Breadth(m)',
        dataIndex: 'Breadth(m)',
        key: 'Breadth(m)',
      },
      {
        title: 'Builders',
        dataIndex: 'Builders',
        key: 'Builders',
      },
      {
        title: 'Class',
        dataIndex: 'Class',
        key: 'Class',
      },
      {
        title: 'Commisioned',
        dataIndex: 'Commisioned',
        key: 'Commisioned',
      },
      {
        title: 'Builders',
        dataIndex: 'Builders',
        key: 'Builders',
      },
      {
        title: 'Complement',
        dataIndex: 'Complement',
        key: 'Complement',
      },
      {
        title: 'Displacement',
        dataIndex: 'Displacement',
        key: 'Displacement',
      },
      {
        title: 'Draught(m)',
        dataIndex: 'Draught(m)',
        key: 'Draught(m)',
      },
      {
        title: 'Length(m)',
        dataIndex: 'Length(m)',
        key: 'Length(m)',
      },
      {
        title: 'Range',
        dataIndex: 'Range',
        key: 'Range',
      },
      {
        title: 'Sensors',
        dataIndex: 'Sensors',
        key: 'Sensors',
      },
      {
        title: 'ShipName',
        dataIndex: 'ShipName',
        key: 'ShipName',
      },
      {
        title: 'Speed(knots)',
        dataIndex: 'Speed(knots)',
        key: 'Speed(knots)',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a href="/delete">Edit</a>
          </Space>
        ),
      },
    ];
  }
  componentDidMount() {
    Service.getRequest('/result').then((res) => {this.setState({data: res.data})});
  }
  componentDidUpdate(prevProps, preState) {
    if(preState.searchText !== this.state.searchText) {
      const params = {
        params: {
          column: 'ShipName',
          text: this.state.searchText
        }
      }
      Service.getRequest('/searchCsv', params).then((res) => {this.setState({data: res.data})});
    }
  }
  render() {
    const { data } = this.state;
    return  (
      <React.Fragment>
      <Input placeholder="search by shipname" onChange={(event) => {this.setState({searchText: event.target.value})}}></Input>
      <Table dataSource={data} columns={this.columns} pagination={false} />
      </React.Fragment>
    );
  }
}