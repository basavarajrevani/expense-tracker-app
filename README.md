# 💰 Expense Tracker App

A comprehensive full-stack web application designed to help users manage their personal finances by tracking income and expenses with real-time analytics, interactive charts, and detailed transaction management.

![Expense Tracker](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## 📖 Introduction

The Expense Tracker App is a modern, user-friendly financial management tool that empowers users to take control of their personal finances. Built with cutting-edge technologies, this application provides a seamless experience for tracking income, managing expenses, and visualizing financial data through interactive charts and comprehensive dashboards.

Whether you're a student managing a budget, a professional tracking business expenses, or anyone looking to gain better insights into their spending habits, this application offers the tools you need to make informed financial decisions.

### 🎯 Why This App?

- **Complete Financial Overview**: Get a 360-degree view of your financial health
- **Real-time Insights**: Instant updates and live data synchronization
- **User-Centric Design**: Intuitive interface designed for ease of use
- **Secure & Private**: Your financial data is protected with industry-standard security
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices

## 🌟 Key Features

### 📊 Interactive Dashboard
- **Real-time Financial Analytics**: Live charts showing income vs expenses with Chart.js integration
- **Current Balance Display**: Instant calculation of your financial position
- **Recent Transaction History**: Quick access to your latest financial activities
- **Visual Data Representation**: Beautiful pie charts, bar graphs, and line charts
- **Monthly/Yearly Overview**: Track your financial progress over time
- **Quick Stats**: Total income, total expenses, and net balance at a glance

### 💵 Comprehensive Income Management
- **Multiple Income Sources**: Track salary, freelance work, investments, and other income
- **Smart Categorization**: Organize income by predefined categories or create custom ones
- **Date & Time Tracking**: Record exactly when income was received
- **Detailed Descriptions**: Add notes and descriptions for each income entry
- **Income Analytics**: View income trends and patterns over time
- **Bulk Operations**: Add, edit, or delete multiple income entries

### 💸 Advanced Expense Tracking
- **Expense Categories**: Food, Transportation, Entertainment, Bills, Shopping, and more
- **Amount Validation**: Ensures accurate financial data with real-time validation
- **Receipt Management**: Add descriptions and notes for each expense
- **Expense Analytics**: Understand your spending patterns and habits
- **Budget Tracking**: Monitor spending against your budget limits
- **Expense Trends**: Visual representation of spending over time

### 🔐 Robust Security & Authentication
- **Secure User Registration**: Create personal accounts with email verification
- **JWT Token Authentication**: Industry-standard secure login system
- **Password Encryption**: bcrypt hashing for maximum security
- **Protected API Routes**: All user data is secured behind authentication
- **Session Management**: Automatic logout and session handling
- **Data Privacy**: Your financial information is completely private and secure

### 📱 Modern User Experience
- **Fully Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **Intuitive Interface**: Clean, modern design that's easy to navigate
- **Real-time Updates**: Instant data synchronization across all devices
- **Form Validation**: Both client-side and server-side validation
- **Loading States**: Smooth loading indicators and user feedback
- **Error Handling**: Comprehensive error messages and recovery options

### 🎨 Design & Usability
- **Styled Components**: Modern CSS-in-JS styling for consistent design
- **Color-coded Categories**: Visual distinction between different transaction types
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Accessibility**: Designed with accessibility best practices in mind
- **Dark/Light Theme**: Comfortable viewing in any lighting condition
- **Print-friendly**: Generate printable reports of your financial data

## 🛠️ Technology Stack

### Frontend
- **React.js** (v18.2.0) - UI Library
- **React Router DOM** (v7.1.0) - Client-side routing
- **Styled Components** (v5.3.6) - CSS-in-JS styling
- **Chart.js** (v4.4.7) - Data visualization
- **React Chart.js 2** (v5.2.0) - React wrapper for Chart.js
- **Axios** (v1.3.2) - HTTP client
- **React DatePicker** (v4.10.0) - Date selection
- **Moment.js** (v2.29.4) - Date manipulation

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.21.2) - Web framework
- **MongoDB** (v8.8.4) - Database
- **Mongoose** (v8.8.4) - MongoDB ODM
- **JWT** (v9.0.2) - Authentication tokens
- **bcryptjs** (v2.4.3) - Password hashing
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **dotenv** (v16.4.7) - Environment variables

### Development Tools
- **Nodemon** (v3.1.7) - Development server
- **React Scripts** (v5.0.1) - Build tools

## 📁 Project Structure

```
expense-tracker-app/
├── frontend/                 # React.js frontend
│   ├── public/              # Public assets
│   ├── src/
│   │   ├── Components/      # React components
│   │   │   ├── Auth/        # Authentication components
│   │   │   ├── Dashboard/   # Dashboard components
│   │   │   ├── Income/      # Income management
│   │   │   ├── Expenses/    # Expense management
│   │   │   ├── Form/        # Form components
│   │   │   └── Navigation/  # Navigation components
│   │   ├── context/         # React Context (State management)
│   │   ├── styles/          # Styled components
│   │   ├── utils/           # Utility functions
│   │   └── History/         # Transaction history
│   ├── package.json
│   └── .env                 # Environment variables
├── backend/                 # Node.js backend
│   ├── controllers/         # Route controllers
│   │   ├── auth.js         # Authentication logic
│   │   ├── income.js       # Income management
│   │   └── expense.js      # Expense management
│   ├── middleware/          # Custom middleware
│   │   └── auth.js         # JWT authentication
│   ├── models/             # Database models
│   │   ├── UserModel.js    # User schema
│   │   ├── IncomeModel.js  # Income schema
│   │   └── ExpenseModel.js # Expense schema
│   ├── routes/             # API routes
│   │   ├── auth.js         # Authentication routes
│   │   └── transactions.js # Transaction routes
│   ├── app.js              # Express app setup
│   ├── package.json
│   └── .env                # Environment variables
└── README.md               # Project documentation
```

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download here](https://git-scm.com/)
- **MongoDB Atlas Account** (recommended) or **Local MongoDB installation**
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

### 🔧 Installation Guide

Follow these step-by-step instructions to set up the project locally:

#### 1. **Clone the Repository**
```bash
# Clone the project
git clone https://github.com/yourusername/expense-tracker-app.git

# Navigate to project directory
cd expense-tracker-app

# Check project structure
ls -la
```

#### 2. **Backend Setup**
```bash
# Navigate to backend directory
cd backend

# Install all backend dependencies
npm install

# Verify installation
npm list --depth=0
```

#### 3. **Frontend Setup**
```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install all frontend dependencies
npm install

# Verify installation
npm list --depth=0
```

### 🔐 Environment Configuration

#### **Backend Environment Variables**
Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5003

# Database Configuration
MONGO_URL=your_mongodb_connection_string_here

# JWT Security
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex

# Optional: Node Environment
NODE_ENV=development
```

#### **Frontend Environment Variables**
Create a `.env` file in the `frontend` directory:

```env
# Frontend Port
PORT=3001

# API Configuration
REACT_APP_API_URL=http://localhost:5003

# Optional: Enable source maps for debugging
GENERATE_SOURCEMAP=true
```

### 🗄️ Database Setup

#### **Option 1: MongoDB Atlas (Recommended for Production)**

1. **Create MongoDB Atlas Account**
   - Visit [MongoDB Atlas](https://cloud.mongodb.com/)
   - Sign up for a free account
   - Verify your email address

2. **Create a New Cluster**
   - Click "Build a Database"
   - Choose "M0 Sandbox" (Free tier)
   - Select your preferred cloud provider and region
   - Name your cluster (e.g., "expense-tracker-cluster")

3. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication method
   - Create username and password (save these!)
   - Set user privileges to "Read and write to any database"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (for development)
   - Or add your specific IP address for security

5. **Get Connection String**
   - Go back to "Database" (Clusters)
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Select "Node.js" as driver
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Add `/expense-tracker` before the `?` to specify database name

   Example:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/expense-tracker?retryWrites=true&w=majority
   ```

#### **Option 2: Local MongoDB Installation**

1. **Download MongoDB Community Server**
   - Visit [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Choose your operating system
   - Download and install with default settings

2. **Start MongoDB Service**
   ```bash
   # On Windows (if installed as service)
   net start MongoDB

   # On macOS (using Homebrew)
   brew services start mongodb-community

   # On Linux (using systemctl)
   sudo systemctl start mongod
   ```

3. **Use Local Connection String**
   ```env
   MONGO_URL=mongodb://localhost:27017/expense-tracker
   ```

#### **Option 3: Docker MongoDB (For Development)**

```bash
# Run MongoDB in Docker container
docker run -d \
  --name mongodb-expense-tracker \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  mongo:latest

# Connection string for Docker MongoDB
MONGO_URL=mongodb://admin:password123@localhost:27017/expense-tracker?authSource=admin
```

### 🏃‍♂️ Running the Application

#### **Method 1: Manual Start (Recommended for Development)**

1. **Start the Backend Server**
   ```bash
   # Navigate to backend directory
   cd backend

   # Start the development server with nodemon
   npm start

   # You should see:
   # [nodemon] starting `node app.js`
   # Server is running on port 5003
   # DB Connected
   ```

   ✅ Backend will be running on `http://localhost:5003`

2. **Start the Frontend Application** (In a new terminal)
   ```bash
   # Navigate to frontend directory
   cd frontend

   # Start the React development server
   npm start

   # You should see:
   # Compiled successfully!
   # Local: http://localhost:3001
   # On Your Network: http://192.168.x.x:3001
   ```

   ✅ Frontend will automatically open in your browser at `http://localhost:3001`

#### **Method 2: Using Package Scripts**

You can also use the following commands from the project root:

```bash
# Start backend only
npm run start:backend

# Start frontend only
npm run start:frontend

# Start both simultaneously (if configured)
npm run dev
```

### 🔍 Verification Steps

After starting both servers, verify everything is working:

1. **Check Backend Health**
   ```bash
   # Test API endpoint
   curl http://localhost:5003/api/v1/auth/me

   # Should return authentication error (expected)
   ```

2. **Check Frontend Loading**
   - Open `http://localhost:3001` in your browser
   - You should see the login/register page
   - No console errors should appear

3. **Test Database Connection**
   - Backend console should show "DB Connected"
   - No MongoDB connection errors

### 🐛 Troubleshooting Common Issues

#### **Port Already in Use**
```bash
# Kill process using port 5003
npx kill-port 5003

# Kill process using port 3001
npx kill-port 3001

# Or find and kill manually
netstat -ano | findstr :5003
taskkill /PID <process_id> /F
```

#### **MongoDB Connection Issues**
```bash
# Check if MongoDB is running (local installation)
mongosh --eval "db.adminCommand('ismaster')"

# Test Atlas connection
mongosh "your_connection_string_here"
```

#### **Dependencies Issues**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Environment Variables Not Loading**
- Ensure `.env` files are in the correct directories
- Restart both servers after changing environment variables
- Check for typos in variable names
- Ensure no spaces around the `=` sign in `.env` files

## 📖 API Documentation

### 🔐 Authentication Endpoints

#### **POST** `/api/v1/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (Success - 201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### **POST** `/api/v1/auth/login`
Authenticate user and get access token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (Success - 200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### **GET** `/api/v1/auth/me`
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response (Success - 200):**
```json
{
  "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
  "username": "johndoe",
  "email": "john@example.com"
}
```

### 💰 Income Management Endpoints

#### **POST** `/api/v1/add-income`
Add a new income entry (requires authentication).

**Headers:**
```
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Monthly Salary",
  "amount": 5000,
  "category": "Salary",
  "description": "Software Developer Salary",
  "date": "2024-01-15"
}
```

**Response (Success - 201):**
```json
{
  "message": "Income added successfully",
  "income": {
    "_id": "64f8a1b2c3d4e5f6g7h8i9j1",
    "title": "Monthly Salary",
    "amount": 5000,
    "category": "Salary",
    "description": "Software Developer Salary",
    "date": "2024-01-15T00:00:00.000Z",
    "user": "64f8a1b2c3d4e5f6g7h8i9j0",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### **GET** `/api/v1/get-incomes`
Retrieve all income entries for the authenticated user.

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response (Success - 200):**
```json
{
  "incomes": [
    {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j1",
      "title": "Monthly Salary",
      "amount": 5000,
      "category": "Salary",
      "description": "Software Developer Salary",
      "date": "2024-01-15T00:00:00.000Z",
      "user": "64f8a1b2c3d4e5f6g7h8i9j0",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

#### **DELETE** `/api/v1/delete-income/:id`
Delete a specific income entry.

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response (Success - 200):**
```json
{
  "message": "Income deleted successfully"
}
```

### 💸 Expense Management Endpoints

#### **POST** `/api/v1/add-expense`
Add a new expense entry (requires authentication).

**Headers:**
```
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Grocery Shopping",
  "amount": 150,
  "category": "Food",
  "description": "Weekly groceries from supermarket",
  "date": "2024-01-15"
}
```

**Response (Success - 201):**
```json
{
  "message": "Expense added successfully",
  "expense": {
    "_id": "64f8a1b2c3d4e5f6g7h8i9j2",
    "title": "Grocery Shopping",
    "amount": 150,
    "category": "Food",
    "description": "Weekly groceries from supermarket",
    "date": "2024-01-15T00:00:00.000Z",
    "user": "64f8a1b2c3d4e5f6g7h8i9j0",
    "createdAt": "2024-01-15T14:20:00.000Z"
  }
}
```

#### **GET** `/api/v1/get-expenses`
Retrieve all expense entries for the authenticated user.

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response (Success - 200):**
```json
{
  "expenses": [
    {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j2",
      "title": "Grocery Shopping",
      "amount": 150,
      "category": "Food",
      "description": "Weekly groceries from supermarket",
      "date": "2024-01-15T00:00:00.000Z",
      "user": "64f8a1b2c3d4e5f6g7h8i9j0",
      "createdAt": "2024-01-15T14:20:00.000Z"
    }
  ]
}
```

#### **DELETE** `/api/v1/delete-expense/:id`
Delete a specific expense entry.

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response (Success - 200):**
```json
{
  "message": "Expense deleted successfully"
}
```

### 🚫 Error Responses

#### **400 Bad Request**
```json
{
  "message": "Validation error",
  "error": "Please provide all required fields"
}
```

#### **401 Unauthorized**
```json
{
  "message": "Not authorized, no token"
}
```

#### **404 Not Found**
```json
{
  "message": "Resource not found"
}
```

#### **500 Internal Server Error**
```json
{
  "message": "Server Error",
  "error": "Database connection failed"
}
```

## 🎯 How to Use the Application

### 👤 **Getting Started with Your Account**

#### **1. User Registration**
- Navigate to `http://localhost:3001`
- Click on "Register" or "Sign Up"
- Fill in the registration form:
  - **Username**: Choose a unique username (3+ characters)
  - **Email**: Enter a valid email address
  - **Password**: Create a secure password (6+ characters)
- Click "Register" to create your account
- You'll be automatically logged in and redirected to the dashboard

#### **2. User Login**
- If you already have an account, click "Login"
- Enter your email and password
- Click "Login" to access your dashboard
- Your session will be maintained until you logout

### 💰 **Managing Your Finances**

#### **3. Adding Income**
- Click on "Income" in the navigation menu
- Click the "Add Income" button or "+" icon
- Fill in the income form:
  - **Title**: Description of income source (e.g., "Salary", "Freelance Project")
  - **Amount**: Enter the income amount (numbers only)
  - **Date**: Select the date you received the income
  - **Category**: Choose from predefined categories or add custom ones
  - **Description**: Add additional notes (optional)
- Click "Add Income" to save
- Your income will appear in the list and update the dashboard

#### **4. Tracking Expenses**
- Navigate to "Expenses" section
- Click "Add Expense" button
- Complete the expense form:
  - **Title**: What you spent money on (e.g., "Groceries", "Gas")
  - **Amount**: Enter the expense amount
  - **Date**: When the expense occurred
  - **Category**: Select appropriate category (Food, Transport, etc.)
  - **Description**: Additional details about the expense
- Click "Add Expense" to record
- Expense will be reflected in your dashboard and analytics

#### **5. Dashboard Overview**
- The dashboard provides a comprehensive view of your finances:
  - **Total Income**: Sum of all your income entries
  - **Total Expenses**: Sum of all your expenses
  - **Current Balance**: Income minus expenses
  - **Recent Transactions**: Latest 5-10 transactions
  - **Charts & Graphs**: Visual representation of your financial data
  - **Monthly Trends**: Track your financial progress over time

#### **6. Transaction Management**
- View all transactions in the "History" or "Transactions" section
- **Edit Transactions**: Click on any transaction to modify details
- **Delete Transactions**: Remove incorrect or unwanted entries
- **Filter & Search**: Find specific transactions by date, category, or amount
- **Export Data**: Download your financial data for external use

### 📊 **Understanding Your Financial Data**

#### **Dashboard Analytics**
- **Income vs Expenses Chart**: Visual comparison of your financial flow
- **Category Breakdown**: See where your money comes from and goes
- **Monthly Trends**: Track your financial habits over time
- **Balance History**: Monitor your financial growth or decline

#### **Financial Insights**
- **Spending Patterns**: Identify your highest expense categories
- **Income Sources**: Track which income streams are most reliable
- **Budget Analysis**: Compare your spending against your income
- **Financial Goals**: Set and track your savings targets

### 🔧 **Account Management**

#### **Profile Settings**
- Update your personal information
- Change your password
- Modify notification preferences
- Export your financial data

#### **Data Security**
- All your financial data is encrypted and secure
- Regular backups ensure your data is never lost
- You can delete your account and all data at any time

### 💡 **Tips for Best Results**

1. **Regular Updates**: Add transactions as they happen for accuracy
2. **Categorization**: Use consistent categories for better analytics
3. **Detailed Descriptions**: Add notes to remember transaction context
4. **Regular Review**: Check your dashboard weekly to stay on track
5. **Set Goals**: Use the insights to set and achieve financial goals

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for passwords
- **Protected Routes**: Authentication required for all user data
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Secure cross-origin requests
- **Environment Variables**: All sensitive data stored in .env files (never committed)
- **Secure Headers**: Security headers implemented for production

## 🛡️ Security Best Practices

### **⚠️ IMPORTANT: Never Commit Sensitive Data**

**Before deploying or pushing to GitHub:**

1. **✅ Verify .env files are ignored**:
   ```bash
   git status
   # Should NOT show .env files
   ```

2. **✅ Check for exposed credentials**:
   ```bash
   git log --oneline | head -10
   # Review recent commits for any sensitive data
   ```

3. **✅ Use environment variables for**:
   - MongoDB connection strings
   - JWT secrets
   - API keys
   - Passwords
   - Any sensitive configuration

4. **✅ Always use .env.example files** with placeholder values

### **🔄 If Credentials Are Accidentally Exposed:**

1. **Immediately change all passwords and secrets**
2. **Rotate JWT secrets**
3. **Update MongoDB Atlas passwords**
4. **Remove sensitive commits from Git history**
5. **Update all deployment environment variables**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB for the database solution
- Chart.js for beautiful data visualization
- All open-source contributors

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/expense-tracker-app/issues) page
2. Create a new issue if your problem isn't already listed
3. Contact the maintainer directly

---

⭐ **Star this repository if you found it helpful!**
