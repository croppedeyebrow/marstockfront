import React, { useEffect } from "react";

const WebSocketComponent = () => {
  useEffect(() => {
    const roomId = "mypage";
    const socket = new WebSocket(
      `ws://localhost:8111/ws/marstock?room=${roomId}`
    );

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const message = event.data;
      console.log(message);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  // 스타일 객체를 만들어 색상을 지정
  const textStyle = {
    color: "red", // 적용하고 싶은 색상을 지정
  };

  return <div style={textStyle}>WebSocket Component</div>;
};

export default WebSocketComponent;
