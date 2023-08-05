import React from "react";

const LobbyScreen = () => {
  return (
    <div>
      <h1>Lobby</h1>
      <form>
        <label htmlFor="email">Email ID</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="room">Room Number</label>
        <input type="text" name="room" id="room" />
        <br />
        <button>JOIN</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
