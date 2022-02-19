import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AppProvider from "./context/AppProvider";
import "antd/dist/antd.css";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={ChatRoom}></Route>
          </Switch>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
