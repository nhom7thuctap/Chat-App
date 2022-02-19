import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/config";

const WrapperStyled = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 16px",
};
const username = {
  color: "white",
  marginLeft: "5px",
};

export default function UserInfo() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  // const { clearState } = useContext(AppContext);
  return (
    <div style={WrapperStyled}>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text style={username}>{displayName}</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
