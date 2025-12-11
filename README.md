# Simple Feedback Form Application

A full-stack feedback form application built with React (frontend) and Node.js/Express (backend) with in-memory storage.

## Project Structure

```
Simple Feedback Form/
├── backend/
│   ├── server.js           # Express server with API endpoints
│   └── package.json        # Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── App.js          # Main React component
    │   ├── App.css         # Main app styles
    │   ├── index.js        # React entry point
    │   ├── index.css       # Global styles
    │   └── components/
    │       ├── FeedbackForm.js    # Form component with hooks
    │       ├── FeedbackForm.css
    │       ├── FeedbackList.js    # Feedback display component
    │       └── FeedbackList.css
    ├── public/
    │   └── index.html      # HTML template
    └── package.json        # Frontend dependencies
```

## Features

### Backend (Node.js/Express)
- **POST /feedback** - Submit new feedback
  - Required fields: `name`, `email`, `message`
  - Returns: Feedback object with ID and timestamp
  - Validation: Checks for required fields
  
- **GET /feedback** - Retrieve all feedback
  - Returns: Array of all feedback submissions
  - Includes: ID, name, email, message, and timestamp

### Frontend (React)
- **FeedbackForm Component**
  - Input fields for name, email, and message
  - Form validation (required fields, email format)
  - Success/error notifications
  - Disabled state during submission
  - Uses React hooks (useState)

- **FeedbackList Component**
  - Displays all submitted feedback
  - Shows feedback count
  - Displays name, email, message, and date
  - Scrollable list with hover effects
  - Empty state message

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **In-memory storage** - For feedback persistence (during runtime)

### Frontend
- **React** - UI library
- **React Hooks** - useState, useEffect
- **CSS3** - Styling with gradients and animations
- **Fetch API** - HTTP client

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## API Endpoints

### GET /feedback
Retrieve all feedback submissions.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service!",
    "timestamp": "2025-12-10T10:30:00.000Z"
  }
]
```

### POST /feedback
Submit new feedback.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Excellent experience!"
}
```

**Response (201):**
```json
{
  "message": "Feedback submitted successfully",
  "feedback": {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "Excellent experience!",
    "timestamp": "2025-12-11T14:20:00.000Z"
  }
}
```

**Response (400):**
```json
{
  "error": "All fields (name, email, message) are required"
}
```

## Usage

1. **Start both servers** (backend on port 5000, frontend on port 3000)
2. **Fill out the form** with your name, email, and feedback message
3. **Click "Submit Feedback"** to send your feedback
4. **View feedback list** on the right side showing all submitted feedback
5. **See success message** after successful submission

## Features Explained

### Form Validation
- All fields are required
- Email format validation using regex
- Real-time error messages

### State Management
- Uses React `useState` for form state, feedback list, and UI state
- Uses `useEffect` for loading feedback on component mount
- Automatic list update after successful submission

### Styling
- Modern gradient backgrounds
- Responsive design (mobile-friendly)
- Smooth animations and transitions
- Custom scrollbar styling
- Hover effects on interactive elements

## Concepts Demonstrated

✅ **Forms** - Form handling with React hooks  
✅ **POST/GET Flow** - RESTful API communication  
✅ **React Hooks** - useState, useEffect  
✅ **Client-Server Architecture** - Frontend-backend separation  
✅ **CORS** - Cross-origin resource sharing  
✅ **Form Validation** - Client and server-side  
✅ **Responsive Design** - Mobile and desktop  
✅ **State Management** - React component state  

## Future Enhancements

- Add SQLite database for persistent storage
- User authentication and authorization
- Feedback editing and deletion
- Advanced filtering and sorting
- Email notifications
- Rate limiting
- Pagination for large feedback lists
- Search functionality
- Admin dashboard

## Notes

- Feedback is stored in memory and will be lost when the server restarts
- To persist data, implement SQLite or another database
- The frontend proxy is configured in package.json to call localhost:5000

## License

ISC

## Author

Hawkstack
