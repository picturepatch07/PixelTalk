# PixelTalk


This is a video calling application built using React, WebRTC, and Socket.io. It allows users to initiate real-time video calls and communicate seamlessly over the internet. The application is divided into two main components: the client-side and the server-side.

## Features

- **Real-time Video Calls:** Connect with friends, family, or colleagues through high-quality video calls in real time.

- **User Authentication:** Securely log in and create an account to access the video calling features.

- **Responsive Interface:** The user interface is designed to work seamlessly on various devices, including desktops, tablets, and smartphones.

- **WebRTC Technology:** The application utilizes WebRTC for establishing peer-to-peer connections, enabling direct communication between users' browsers.

- **Socket.io Integration:** Socket.io is used for signaling and managing communication between clients and the server.

## Folder Structure

The repository is organized into two main folders: `client` and `server`.

### `client`

The `client` folder contains the front-end implementation of the video calling application using React. It includes components, styles, and assets required for the user interface. Below is a brief overview of the contents:

- `src/`: Contains the main source code for the React application.
  - `pages/`: Holds React components used to build the user interface.
  - `service/`: Contains webRTC peer connection 
  - `context/`: Holds socket Provider 
  - `App.js`: The entry point of the React application.

### `server`

The `server` folder contains the back-end implementation of the application. It manages user authentication, signaling, and WebRTC connection management. Here's a quick overview of the contents:

- `src/`: Contains the main source code for the server.
  - `index.js`: The entry point of the server application.

## Getting Started

To run the video calling application on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/video-calling-app.git`
2. Navigate to the `client` folder: `cd client`
3. Install dependencies: `npm install`
4. Start the client: `npm start`
5. In a new terminal window, navigate to the `server` folder: `cd ../server`
6. Install server dependencies: `npm install`
7. Start the server: `npm start`

Make sure you have Node.js and npm (Node Package Manager) installed on your machine before running the application.

