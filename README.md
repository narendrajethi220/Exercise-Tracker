Exercise Tracker microservice for tracking users and their exercises. Users can register, log exercises, and fetch exercise history with optional filters such as date range and result limit.

![Screenshot (74)](https://github.com/user-attachments/assets/db06e83a-7075-4b23-8dfb-122cf23090dd)
![Screenshot (75)](https://github.com/user-attachments/assets/c02d15a8-b20e-4636-8acc-8c61ca5a1fa7)
![Screenshot (76)](https://github.com/user-attachments/assets/57081702-585f-4673-b527-645b92d28885)
![Screenshot (77)](https://github.com/user-attachments/assets/49413be3-4e64-459d-8eb9-4817499d90a4)

# Exercise Tracker Microservice

This project is part of the [freeCodeCamp Back-End Development and APIs Certification](https://www.freecodecamp.org/learn). It is a full-stack JavaScript application built with Node.js, Express, and MongoDB.

## 📌 Project Objective

Created a backend microservice that allows users to:
- Register with a username
- Log exercises with a description, duration, and date
- View their exercise logs, with optional query parameters to filter results

## 🚀 Live Demo / Local Setup
> Example: http://localhost:3000  
To run locally:

```bash
git clone https://github.com/narendrajethi220/Exercise-Tracker.git
cd Exercise-Tracker
npm install
npm start
📮 API Endpoints
POST /api/users
Create a new user.
Form Field: username
Response:

json
Copy
Edit
{
  "username": "fcc_test",
  "_id": "5fb5853f734231456ccb3b05"
}
GET /api/users
Get a list of all registered users.
Response:

json
Copy
Edit
[
  {
    "username": "fcc_test",
    "_id": "5fb5853f734231456ccb3b05"
  }
]
POST /api/users/:_id/exercises
Add an exercise to a user.
Form Fields: description, duration, date (optional)
Response:

json
Copy
Edit
{
  "username": "fcc_test",
  "description": "test",
  "duration": 60,
  "date": "Mon Jan 01 1990",
  "_id": "5fb5853f734231456ccb3b05"
}
GET /api/users/:_id/logs
Retrieve a user's exercise log.
Optional Query Params: from, to, limit
Response:

json
Copy
Edit
{
  "username": "fcc_test",
  "count": 1,
  "_id": "5fb5853f734231456ccb3b05",
  "log": [
    {
      "description": "test",
      "duration": 60,
      "date": "Mon Jan 01 1990"
    }
  ]
}
🛠 Technologies Used
Node.js
Express.js

🧪 Test Coverage
Passes all required FCC automated tests listed in the certification project guidelines.

🎓 Certification
This project is part of the FreeCodeCamp Backend Development and APIs certification.
