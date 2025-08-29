# LiveKit Voice Agent Web App

This is a **React + Next.js** web application that integrates **LiveKit** to create a real-time voice agent interface. Users can interact with a voice AI assistant via live audio, chat, and video streams.

## Features

* **Real-Time Voice Communication**: Stream audio to and from the AI agent with LiveKit.
* **Voice Assistant Integration**: Supports listening, thinking, and speaking states of the agent.
* **Chat Functionality**: Send and receive chat messages while interacting with the voice agent.
* **Responsive UI Components**:

  * Welcome screen with start call button.
  * Session view for active calls and media tiles.
  * Chat message view with smooth animations.
  * Agent control bar for sending messages and toggling features.
* **Media Management**: Handle microphone, camera, and audio rendering with error handling.
* **Pre-Connection Buffer**: Configurable pre-connect buffer for smoother audio initialization.
* **Animations**: Smooth transitions using `motion/react` for UI elements.
* **Error Handling**: Alerts for media device errors, connection issues, and session timeouts.

## Tech Stack

* **React / Next.js**
* **TypeScript**
* **LiveKit Client & Components**
* **motion/react** for animations
* **Tailwind CSS** for styling

## Setup

1. Clone the repository:

```bash
git clone <repo-url>
```

2. Install dependencies:

```bash
npm install
```

3. Add your **LiveKit server URL** and **participant token** in `useConnectionDetails` or via environment variables.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
