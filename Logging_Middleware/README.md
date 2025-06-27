# React URL Shortener with Logging Middleware

This project is a **React-based URL Shortener Application** that uses **Material UI** for styling and **LocalStorage** for persistence.  
Additionally, it includes a **separate Logging Middleware backend** implemented in Node.js with Express to demonstrate request logging.

---

## 🎯 Features

✅ Shorten URLs with optional custom shortcodes  
✅ Save up to 5 shortened URLs in browser LocalStorage  
✅ Interactive and responsive UI using Material UI  
✅ View statistics for each shortened URL  
✅ Copy short URL to clipboard  
✅ Log shortening events to a backend Logging Middleware (optional)

---

## 📂 Project Structure

<Your Roll Number>/
│
├── Logging Middleware/
│ ├── server.js
│ ├── package.json
│ └── README.md
│
└── Frontend Test Submission/
├── public/
├── src/
│ ├── components/
│ │ ├── URLShortener.js
│ │ └── URLStatistics.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
├── package.json
└── README.md

yaml
Copy code

---

## 🚀 How to Run the Project

### 🟢 1️⃣ Start the Logging Middleware Server

This server logs incoming requests to the console.

1. Open a terminal.
2. Navigate to the `Logging Middleware` folder:

cd Logging Middleware

markdown
Copy code

3. Install dependencies:

npm install

markdown
Copy code

4. Start the server:

node server.js

arduino
Copy code

5. The server will run at:

http://localhost:5000

markdown
Copy code

### 🟢 2️⃣ Start the React Frontend Application

1. Open a **new terminal window/tab**.
2. Navigate to the `Frontend Test Submission` folder:

cd Frontend Test Submission

markdown
Copy code

3. Install dependencies:

npm install

markdown
Copy code

4. Start the React development server:

npm start

arduino
Copy code

5. The app will run at:

http://localhost:3000

yaml
Copy code

---

## 🔗 How the Frontend and Middleware are Connected

Whenever a user shortens a URL in the React app, a `POST` request is sent to the Logging Middleware backend:

- **Endpoint:**
POST http://localhost:5000/log

css
Copy code

- **Request Body Example:**
```json
{
  "message": "Shortened URL: https://example.com"
}
This request logs the event to the server console.

Note: If the Logging Middleware server is not running, the frontend app will still work without errors. The log request will fail silently.

🧩 Project Highlights
Material UI Components:

Tabs

Cards

Buttons

Tooltips

Alerts

LocalStorage:

Saves the list of shortened URLs.

Clipboard Integration:

Copy short URLs with a single click.

URL Validation:

Prevents invalid URLs.

Custom Shortcodes:

Optional custom codes for shortened links.

Statistics:

Displays created date and click count (static for demo).

⚙️ Dependencies
React

Material UI

UUID

Express (for Logging Middleware)

CORS (for cross-origin requests)

📝 Additional Notes
This project demonstrates both frontend and backend skills.

Logging Middleware is optional and used to show request logging.

You can extend the backend further to store logs in a database or manage actual redirections.

🙌 Author
<Your Name>

yaml
Copy code



