# Student Result App

A small React app for managing student records: list them, add one, open the details. Data comes from a local `json-server` database.

## What it does

- Student list with a detail view
- Add student form with controlled inputs
- All API calls live in one service module, so swapping the JSON backend for a real one is a one file change
- Vite dev server, ESLint configured

About 570 lines across 11 files, 3 components.

## Stack

React, Vite, json-server, ESLint.

## Layout

```
student-result-app/
  db.json                       json-server database
  src/
    App.jsx
    components/
      StudentList.jsx
      StudentForm.jsx
      StudentDetails.jsx
    services/studentService.js
```

## Run it

```bash
cd student-result-app
npm install
```

Start the mock API:

```bash
npm run server      # json-server on :3000
```

Start the app in a second terminal:

```bash
npm run dev
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | ESLint |
| `npm run server` | Serve `db.json` on port 3000 |
