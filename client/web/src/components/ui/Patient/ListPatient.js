import React from "react";
import { List, Avatar } from "antd";
import { Link, useParams } from "react-router-dom";

const ListPatient = ({ data }) => {
  const { id } = useParams();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://joinyena.com/wp-content/uploads/2018/01/profile-circle.png" />
            }
            title={<Link to={"/patient/" + item._id}>{item.name}</Link>}
            description={`Blood Group: ${item.bloodGroup} | Tel: ${item.tel}`}
          />
          <ul>
            <li>Birth Date: {item.birthDate}</li>
          </ul>
        </List.Item>
      )}
    />
  );
};

export default ListPatient;
