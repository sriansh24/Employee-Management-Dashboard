Title- Employee Management Dashboard
--------------------------------------

A modern Employee Management Dashboard built with React 19, Vite, and Bootstrap 5.3. This project demonstrates authentication, protected routing, employee CRUD operations, dashboard analytics, search & filtering, image upload with preview, and optimized rendering using React hooks.

Features are used in
---------------------
Authentication:
- Email & password based login
- Hardcoded admin validation (for assignment purpose)
- Protected routes using ProtectedRoute
- Session persistence using localStorage

Dashboard:
- Summary cards (Total Employees, Active, Inactive)
- Real-time updates on add/edit/delete
- Clean, responsive UI

Employee Management:
- Employee table with:
    Status toggle (Active / Inactive)
    Edit & Delete actions
- Add Employee
- Edit Employee
- Delete with confirmation

Employee Form:
- Add / Edit in modal
- Fields:
    Full Name
    Gender
    Date of Birth
    State & City
    Active Status
    Profile Image upload
- Image preview
- Full form validation

Search & Filters:
- Search by employee name
- Filter by gender
- Filter by status (Active / Inactive)
- Optimized using "useMemo"

Print Support:
- Print only employee table
- Dashboard & UI excluded from print view

Tech Stack
-----------
- Using React latest version 19.2.0
- Using React DOM latest version 19.2.0
- Using React Router DOM latest version 7.11.0
- Using Vite latest version 7.2.4
- Using Bootstrap latest version 5.3.8
- Using JavaScript is ES6+
- For custom and predefined styling using CSS and Bootstrap

Project Structure
------------------
- Src Folder
    - assets Folder
        - styles Folder
            - EmdLogin Folder
                - emdlogin.css
            - Dashboard Folder
                - dashboard.css
            - EmdFilters Folder
                - emdfilters.css
            - Print Folder
                - print.css
    - Components
        - EmdDashboard Folder
            - DashboardCards.jsx
            - EmployeeForm.jsx
            - EmployeeTable.jsx
        - EmdFilters Folder
            - EmployeeFilter.jsx
    - Data
        - employeemockdata Folder
            - employees.js
    - Pages
        - authpage Folder
            - EmdLogin.jsx
        - dashboard Folder
            - Dashboard.jsx
    - routes
        - protectedroute Folder
            - ProtectedRoute.jsx
    - App.jsx
    - Main.jsx

Setup & Installation
---------------------
1) Clone the Repository:
    git clone <repository-url>
    cd employee-management-dashboard

2) Install Dependencies:
    npm install

3) Run The Project:
    npm run dev

4) Open the Browser:
    http://localhost:5173/

Login Credentials (Demo)
------------------------
userid: admin.a01@gmail.com
password: AdminA01