This is a [Next.js](https://nextjs.org/) project like a test task for Sergii.

## Technologies used
[![NODE](https://img.shields.io/badge/NODE-21.2.0-green.svg?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-10.2.3-red.svg?style=flat-square&logo=npm)](https://www.npmjs.com/)
[![REACTJS](https://img.shields.io/badge/ReactJS-blue.svg?style=flat-square&logo=react)](https://react.dev/)
[![NEXTJS](https://img.shields.io/badge/NextJS-grey.svg?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-white.svg?style=flat-square&logo=docker)](https://www.docker.com/)

## Getting Started

First, run the development server & dev-env:

```bash
# Run Docker with Mysql server
docker-compose up -d --force-recreate
# Install NPM modules
npm install
# Init DB & tables
npx prisma db push
# Run web server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Enjoy!

