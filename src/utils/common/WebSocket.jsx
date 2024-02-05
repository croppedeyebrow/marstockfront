import React, { useState, useEffect } from "react";

const WebSocketComponent = () => {
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    // WebSocket 연결
    const socket = new WebSocket("ws://localhost:8111/ws/marstock");

    // 연결 이벤트 핸들링
    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    // 메시지 수신 이벤트 핸들링
    socket.onmessage = (event) => {
      const message = event.data;
      console.log("Received WebSocket message:", message);

      // 받은 데이터를 상태로 업데이트
      setReceivedData((prevData) => [...prevData, message]);
    };

    // 연결 종료 이벤트 핸들링
    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    // 컴포넌트 언마운트 시 WebSocket 연결 종료
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {/* <h2>Received Data:</h2>
      <ul>
        {receivedData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default WebSocketComponent;
