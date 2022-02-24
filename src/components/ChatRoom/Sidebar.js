import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { db } from "../../firebase/config";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";

const SidebarStyled = {
  background: "#3f0e40",
  color: "#fff",
  height: "100vh",
};
export default function Sidebar() {
  return (
    <div style={SidebarStyled}>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </div>
  );
}
