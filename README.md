# Gym Management Web Application

## Project Description

The Gym Management Web Application is a React-based web app designed to help gym administrators manage members, trainers, membership plans, subscriptions, payments, workout plans, attendance, reports, profile information, and application settings.

This project was built using React, TypeScript, Vite, Tailwind CSS, Material UI, React Router, React Hot Toast, and AG Grid.

---

## Project Idea

The main goal of this project is to create a modern dashboard system for a gym. The system allows the admin to navigate between different gym management pages and view important information such as total members, active subscriptions, expired subscriptions, payments, trainers, attendance, and reports.

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Material UI
- React Router DOM
- React Hot Toast
- AG Grid
- Git and GitHub

---

## Main Requirements Implemented

- React + TypeScript project
- Import aliasing using `@`
- Two layouts:
  - AuthLayout
  - MainLayout
- AuthLayout routes:
  - Login
  - Signup
- MainLayout routes:
  - Dashboard
  - Profile
  - Settings
  - Members
  - Trainers
  - Plans
  - Subscriptions
  - Payments
  - Workouts
  - Attendance
  - Reports
- Fake login validation
- Confirmation dialog before login
- Loading spinner for 3 seconds before login
- React Hot Toast notifications
- Reusable toast service
- Success, warning, and error toast buttons
- Tailwind CSS and Material UI used together
- Shared theme variables between Tailwind and Material UI
- Theme/color controls in Settings page
- AG Grid used in the Members page
- Proper routing and navigation
- Reusable components and clean structure
- Multiple branches and meaningful commits in Git

---

## Login Credentials

Use this demo account to login:

Email: admin@gym.com  
Password: admin123

---

## Routing Structure

### Auth Routes

/login  
/signup

### Main Routes

/dashboard  
/members  
/trainers  
/plans  
/subscriptions  
/payments  
/workouts  
/attendance  
/reports  
/profile  
/settings

---

## Features

### Login Page

The Login page includes fake validation. If the email or password is wrong, an error toast appears. If the login fields are empty, a warning toast appears. If the credentials are correct, a confirmation dialog appears before login. After confirming, a loading spinner appears for 3 seconds, then the user is redirected to the dashboard.

### Signup Page

The Signup page contains a simple registration form layout.

### Dashboard Page

The Dashboard page displays important gym statistics such as total members, active subscriptions, and expired subscriptions. It also includes buttons to test success, warning, and error toast notifications.

### Members Page

The Members page uses AG Grid to display gym members. The table supports sorting, filtering, resizing, and pagination.

### Trainers Page

The Trainers page displays gym trainers and their specialties.

### Membership Plans Page

The Plans page displays different gym membership plans, including monthly, 3-month, yearly, and student plans.

### Subscriptions Page

The Subscriptions page displays active and expired member subscriptions.

### Payments Page

The Payments page displays payment information, total revenue, paid payments, and unpaid payments.

### Workout Plans Page

The Workouts page displays workout plans assigned by trainers to members.

### Attendance Page

The Attendance page displays member check-in and check-out records.

### Reports Page

The Reports page displays gym statistics such as active members, expired subscriptions, monthly revenue, and total trainers.

### Profile Page

The Profile page displays admin account information.

### Settings Page

The Settings page includes theme/color controls where the user can select between Green Gym Theme, Blue Fitness Theme, and Purple Modern Theme.

---

## Theme

The application uses shared theme colors between Tailwind CSS and Material UI.

Main theme colors:

Primary: #0F172A  
Secondary: #22C55E  
Background: #F8FAFC  
Success: #22C55E  
Warning: #F59E0B  
Error: #EF4444

---

## Folder Structure

src/  
│  
├── components/  
│   └── toast/  
│       └── ToastButtons.tsx  
│  
├── features/  
│   ├── auth/  
│   │   ├── login/  
│   │   └── signup/  
│   ├── dashboard/  
│   ├── profile/  
│   ├── settings/  
│   ├── members/  
│   ├── trainers/  
│   ├── plans/  
│   ├── subscriptions/  
│   ├── payments/  
│   ├── workouts/  
│   ├── attendance/  
│   └── reports/  
│  
├── layouts/  
│   ├── AuthLayout.tsx  
│   └── MainLayout.tsx  
│  
├── routes/  
│   └── AppRoutes.tsx  
│  
├── services/  
│   └── notificationService.ts  
│  
├── theme/  
│   ├── muiTheme.ts  
│   └── themeConfig.ts  
│  
├── App.tsx  
└── main.tsx

---

## Git Branches Used

The project was developed using multiple branches:

main  
auth-layout  
login-validation-toast  
dashboard-toast-buttons  
shared-theme-settings  
members-ag-grid  
gym-pages  
readme-documentation

Each branch focused on a specific feature or requirement.

---

## How to Run the Project

First, install dependencies:

npm install

Then run the development server:

npm run dev

Open the app in the browser:

http://localhost:5173/

To build the project:

npm run build

---

## ChatGPT Conversation Link

This project was planned and built with the help of ChatGPT.

ChatGPT link:

https://chatgpt.com/share/6a04f890-e03c-8387-9561-76c432a26269

---

## Conclusion

This project demonstrates a complete React + TypeScript web application using modern frontend tools. It includes routing, layouts, fake authentication, toast notifications, shared theming, AG Grid tables, reusable components, and a clean gym management system structure.