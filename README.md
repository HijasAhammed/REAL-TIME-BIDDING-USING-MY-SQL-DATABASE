<h1>Real Time Bidding Platform</h1>
<h4>This project is a comprehensive RESTful API for a real-time bidding platform developed using Node.js, Express, Socket.IO, and a SQL database. The API supports advanced CRUD operations, user authentication, role-based access control, real-time bidding, notifications, and more.</h4>
<h1>Features</h1>
<h4> • User Authentication: Users can register and login to the system using JSON Web Tokens (JWT) for authentication</h4>
<h4> • Role-Based Access Control: Users can have different roles (e.g., user, admin) with varying levels of access to the system.</h4>
<h4> • Auction Item Management: Users can create, read, update, and delete auction items with features like image upload, search, filtering, and pagination.</h4>
<h4> • Real-Time Bidding: Users can place bids on auction items, and all connected clients are notified in real-time when a new bid is placed.</h4>
<h4> • Notifications: Users receive notifications when new bids are placed on their items or when they are outbid.</h4>
<h4> • WebSocket Communication: Real-time communication is facilitated through WebSocket connections using Socket.IO.</h4>
<h4> • Database Integration: The API integrates with a SQL database (PostgreSQL or MySQL) for storing and retrieving data.</h4>
<h4> • Error Handling: Appropriate HTTP status codes and error messages are returned for different error scenarios.</h4>
<h1>Technologies Used</h1>
<h4>Node.js</h4>
<h4>Express.js</h4>
<h4>Socket.IO</h4>
<h4>JSON Web Tokens(JWT)</h4>
<h4>MySQL</h4>
<h4>Multer (for image uploads)</h4>
<h4>Chai(For Testing)</h4>
<h1>Acknowledgments</h1>
<h4> • Express.js for the web framework</h4>
<h4> • Socket.IO for real-time communication</h4>
<h4> • Multer for handling file uploads</h4>
<h4> • JSONWebToken for user authentication</h4>
• A .env file with the following environment variables:

`  PORT=3000
DATABASE_URL=mysql://root:test123@localhost:3306/real_time_bidding
JWT_SECRET=your_jwt_secret
`
    
