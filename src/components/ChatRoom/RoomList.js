import { Collapse, Typography } from "antd";
import React, { useContext, useMemo } from "react";
import useFirestore from "../../hook/useFirestore";
import styled from "styled-components";
import { Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthProvider";
import { AppContext } from "../../context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Chat Room List" key="1">
        {rooms.map((room) => (
          <LinkStyled
            key={room.id}
            onClick={() => {
              setSelectedRoomId(room.id);
            }}
          >
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          New room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
