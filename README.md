# 🚀 React URL Shortener with Logging Middleware

This project is a **React-based URL Shortener Application** styled with **Material UI**, with support for optional backend logging via a simple **Express.js Logging Middleware**.

## ✨ Features

✅ Shorten any valid URL with optional custom shortcodes  
✅ Save up to 5 URLs in LocalStorage  
✅ Interactive and responsive UI built using Material UI components  
✅ Copy short URLs to clipboard  
✅ View statistics of shortened URLs (creation date and clicks)  
✅ Separate Node.js backend for logging events (demonstration purpose)  

## 📂 Project Structure
/
├── Frontend Test Submission
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── URLShortener.js
│ │ │ └── URLStatistics.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles.css
│ ├── package.json
│ └── README.md
│
└── Logging Middleware
├── server.js
├── package.json
└── README.md

## 🛠️ How to Run the Project

### 🟢 1️⃣ Start the Logging Middleware Server

1. Open terminal  
2. Navigate to `Logging Middleware` folder:
cd Logging Middleware

3. Install dependencies:
npm install

4. Start the server:
node server.js

5. Server runs at:
http://localhost:5000

### 🟢 2️⃣ Start the React Frontend

1. Open another terminal  
2. Navigate to `Frontend Test Submission`:
cd Frontend Test Submission

3. Install dependencies:
npm install


4. Start the development server:
npm start

markdown
Copy code
5. React app runs at:
http://localhost:3000

yaml


## 🔗 How Frontend & Backend Communicate

When a URL is shortened, the React app sends a `POST` request to the logging backend:

- **Endpoint:**
http://localhost:5000/log

css
Copy code
- **Request Body:**
```json
{
  "message": "Shortened URL: <original URL>"
}
The backend logs this request to the console.

🧩 Technologies Used
Frontend:

React

Material UI

UUID

Backend:

Node.js

Express

CORS

✨ Screenshots
Shortener UI	Statistics




