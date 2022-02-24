import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument } from "../../firebase/services";
import { generateKeywords } from "../../firebase/services";
import styled from "styled-components";
import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";

const LogoStyled = styled.div`
  width: 100%;
  .image {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
`;

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (propvider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(propvider);
    console.log("data user:", additionalUserInfo.isNewUser);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#eee",
      }}
    >
      <Row
        justify="center"
        style={{
          display: "block",
          width: 500,
          padding: "40px",
          background: "#fff",
        }}
      >
        <Col>
          <LogoStyled>
            <img className="image" src="/images/chat-logo.png" alt="logo" />
            <Title style={{ textAlign: "center" }} level={3}>
              Chat App
            </Title>
          </LogoStyled>
          <Button
            icon={<GoogleOutlined />}
            style={{ width: "100%", marginBottom: 5 }}
            onClick={() => handleLogin(googleProvider)}
          >
            Login with Google
          </Button>
          <Button
            icon={<FacebookFilled />}
            style={{ width: "100%" }}
            onClick={() => handleLogin(fbProvider)}
          >
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
