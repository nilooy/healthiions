import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import axios from "axios";

const ListMedicine = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://image.flaticon.com/icons/svg/883/883407.svg" />
            }
            title={<a href="https://ant.design">{item.name}</a>}
            description={`Company: ${item.company} | Price: ${item.price}`}
          />
        </List.Item>
      )}
    />
  );
};

export default ListMedicine;
