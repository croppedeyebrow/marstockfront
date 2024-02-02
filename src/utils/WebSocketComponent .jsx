import React, { useEffect } from "react";
import io from "socket.io-client";

const RealTimeDataComponent = () => {
  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io("http://your-backend-server");

    // Listen for events
    socket.on("realtime", (data) => {
      // Handle the received data
      console.log("Real-time data received:", data);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Real Time Data</h2>
      {/* Display real-time data in the component */}
    </div>
  );
};

export default RealTimeDataComponent;
