# Getting Started with App

## Available Scripts

In the project directory, you can run:

### `docker compose up`

Runs the backend and PostgreSQL database in Docker containers.

Open separate terminal window to populate database with some initial data:

### `docker exec -it grants-dashboard-backend-1 npx ts-node src/scripts/seed.ts`

Then change directory to `frontend` folder and run:

```bash
$ npm i
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

