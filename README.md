# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Link to install fontawesome into your project -  npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

Update your node.js first by downloading latest extension from there website and then update npm using npm i -g @latest

---------------------------------------------------------------------------------------------------------------------
1 install react via vite = npm create vite@latest myappname
2 cd into myappname
3 npm install
4 npm run dev = your project link is generated
5 install fontawesome =  npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
6 create component folder under src in which create register comp in that install needed hooks like usestate,ref,effect 
7 npm install nodemon for server.js , vite has hmr for frontend but for backend you need nodemon 
8 then inside register comp import import {faCheck, fatimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
9 To run both the backend server and the frontend application simultaneously install -npm install concurrently --save-dev
10 update the package.json file to include a script that runs both the frontend and backend together=
 to this in package.json scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
  now you can use = npm run dev
for running both 
