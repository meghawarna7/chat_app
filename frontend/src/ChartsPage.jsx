import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='90e8de00-970d-48d3-8a61-cef11f56c995'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;