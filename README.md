
# Vendify

### Full Stack E-commerce Platform

Vendify is a robust e-commerce platform featuring product management, secure payment processing, data analytics, and scalability.

## Key Features

- **Product Management**: Full CRUD capabilities for managing products on the platform.
- **Payment Integration**: Securely handles transactions for seamless customer purchases.
- **Data Analytics**: Admin panel includes charts to monitor activity and view analytics.
- **Performance Optimization**: Caching the latest products using Redis enhances performance by up to 30%.
- **Scalability**: Containerized with Docker and deployed on AWS for scalability and ease of deployment.

## Tech Stack

- **Frontend**: React, TypeScript, Sass
- **Backend**: Node.js, Express, Redis, MongoDB
- **Authentication**: OAuth
- **Deployment**: AWS, Docker

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v14 or higher
- **Docker**: for containerization (optional if not using Docker)
- **MongoDB**: local or cloud instance

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/vendify.git
   cd vendify
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following:

   ```plaintext
   MONGODB_URI=your_mongodb_uri
   REDIS_URL=your_redis_url
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   ```

4. **Run the application**

   - **Backend**: In the `backend` folder:

     ```bash
     npm run dev
     ```

   - **Frontend**: In the `frontend` folder:

     ```bash
     npm start
     ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

### Docker

To run the application with Docker, use the provided `docker-compose.yml`:

```bash
docker-compose up
```

## License

This project is licensed under the MIT License.
