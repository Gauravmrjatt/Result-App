# Student Result App

A small React application for managing student records and results: list students, add a new one, and open a detail view. Data is served by a local `json-server` database.

## Features

- Student list with detail view
- Add-student form with controlled inputs
- Data layer isolated in a service module, so the JSON backend can be swapped for a real API
- Vite dev server with fast refresh and ESLint configured

## Stack

React · Vite · json-server · ESLint

## Structure

```
student-result-app/
  db.json                     json-server database
  src/
    App.jsx                   routes and layout
    components/
      StudentList.jsx
      StudentForm.jsx
      StudentDetails.jsx
    services/studentService.js  API calls
```

## Getting started

```bash
cd student-result-app
npm install
```

Start the mock API in one terminal:

```bash
npm run server      # json-server on :3000
```

Start the app in another:

```bash
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | ESLint |
| `npm run server` | Serve `db.json` with json-server on port 3000 |
