# RealFlow

A polished **fictional** real-estate lead-management demo for Egyptian sales teams. It demonstrates a focused workflow: **centralize leads → track status → schedule follow-ups → prioritize customers → take action**. The AI analysis is a clearly labelled frontend simulation; no AI, social-media, email, or messaging integration is included. All sample customer data is fictional.

## Tech stack

- **Client:** React, Vite, React Router, Lucide React, CSS
- **Server:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas (or a local MongoDB-compatible connection for development)

## Project structure

```text
client/       React dashboard and REST API service
server/       Express API, Mongoose model, controllers, seed script
README.md     Setup and API documentation
```

## Configure MongoDB Atlas

1. Create a MongoDB Atlas cluster and database user.
2. Add your current IP address to Atlas Network Access.
3. Copy the Atlas connection string.
4. Create `server/.env` from the example and add your connection string:

```bash
cd server
cp .env.example .env
```

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/realflow
PORT=5000
```

Never commit `.env`; it is already ignored.

## Install and run

Open two terminals from the project root.

```bash
# Terminal 1 — API
cd server
npm install
npm run seed     # optional: loads 24 fictional Egyptian real-estate leads
npm run dev
```

```bash
# Terminal 2 — web app
cd client
npm install
npm run dev
```

Vite displays the local web URL (normally `http://localhost:5173`). The client calls `http://localhost:5000/api` by default. To use a different API URL, define `VITE_API_URL` in a client `.env` file.

## API endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/leads` | List all leads |
| GET | `/api/leads/:id` | Get one lead |
| POST | `/api/leads` | Create a lead |
| PATCH | `/api/leads/:id` | Update lead fields, status, priority, notes, or follow-up state |
| DELETE | `/api/leads/:id` | Delete a lead |

The API persists lead records, timelines, and follow-up completion through MongoDB. Changes made in the dashboard remain after refresh when the API is connected to MongoDB.
