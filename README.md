![astroaid-project-image2](https://github.com/user-attachments/assets/a250b780-6e55-4c38-8928-eae29fd5f492)# AstroAid 🚀

AstroAid is a full-stack space-tech application built for AstroHack 2025. It leverages public space APIs to provide real-time satellite pass data and daily astronomical content to users anywhere on Earth.

> **Explore Space. Code the Future.**

---

## 🌌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [API Usage](#api-usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## 📖 About the Project

AstroAid brings space closer to you. Whether you're a student, space enthusiast, or a curious mind, AstroAid provides:

- 🌠 **Astronomy Picture of the Day (APOD)**:![astroaid-project-image2](https://github.com/user-attachments/assets/6bf2f04f-a83a-40f3-a295-ffaba713feed)

- 🛰️ **Real-time ISS Satellite Passes**: ![astroaid-project-image3](https://github.com/user-attachments/assets/d034cada-a201-4893-b986-efd5bfdaa02f)
- **Other Images** :![astroaid-project-image4](https://github.com/user-attachments/assets/2e27ec22-731b-4338-bf33-56abcd72fb31)
- ![astroaid-project-image6](https://github.com/user-attachments/assets/a74268e4-f011-4bcb-8af7-5cc23a25c165)



Built during AstroHack 2025 with a focus on creativity, accessibility, and real-world API integration.

---

## 🚀 Features

- 🔭 View NASA's Astronomy Picture of the Day with title and explanation.
- 📍 Automatically detect your location to show upcoming satellite passes.
- 📡 Display ISS flyover times, duration, and max elevation.
- 🌐 Fully responsive and intuitive UI/UX.
- ⚙️ Uses environment-based backend for API proxying.

---

## 🧰 Tech Stack

**Frontend:**

- React.js
- Axios
- Tailwind CSS
- Vercel (Hosting)

**Backend:**

- Node.js
- Express.js
- Render (Hosting)

**APIs Used:**

- [NASA APOD API](https://api.nasa.gov/)
- [N2YO Satellite Pass API](https://www.n2yo.com/api/)

---

## 🔗 Live Demo

**Frontend**: [https://astroaid.vercel.app](https://astroaid.vercel.app)  
**Backend API**: [https://astroaid-backend.onrender.com](https://astroaid-backend.onrender.com)

---

## 🛠️ Getting Started (Local Setup)

### Prerequisites

- Node.js (v16+)
- Git

### Installation

bash
# Clone the repository
git clone https://github.com/Pradeep0997/astroaid.git
cd astroaid

# Start backend
cd server
npm install
node proxy-server.js

# In a new terminal, start frontend
cd ../client
npm install
npm start


🗂️ Project Structure

astroaid/
├── client/         # React frontend
│   └── src/
│       ├── components/
│       └── App.js
├── server/         # Node.js backend
│   └── proxy-server.js
├── render.yaml     # Render deployment config
└── README.md




**Hackathon Highlights:**

🌍 Built in 7 days during AstroHack 2025

🎯 Integrated 2 public APIs for space exploration

🧠 Learned about real-time data visualization and CORS proxying

🤝 Designed for space learners, by space lovers



📜 **License**
This project is licensed under the MIT License.
See the LICENSE file for details.

👨‍🚀 **Team**
Settipalle Pradeep Reddy
GitHub 

LinkedIn:www.linkedin.com/in/settipalle-pradeep-reddy-7aa659230


