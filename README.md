# Team-5

# Objective
We were chosen to help work with the nonprofit Wellfare, which aims to solve food insecurity and aims to reshape produce consumption and nutrition in low-income communities around the country. Our challenge was to use technology to develop a tool to create a seamless in-person customer experience, focusing on personalized pricing and membership capabilities. Additionally, this tool would not only enhance the shopping experience for customers but also those on the administrative side, allowing both sides to benefit and encouraging smoother communication among the Wellfare community.

## Backend Architecture:
The backend is built with Express, NodeJS and MongoDB. We went with Express because of the ease of learning for those who did not know Express already. MongoDB also is fast to implement and perfect for our use case of a collection of users/products/feedback.

## Frontend Architecture:
The frontend is built with TypeScript and React. A lot of people on our team knew React already, and it's also very easy to get up and running with it. 

## How To Run The Application:
The application is broken into two parts, `front_end`, and `back_end`. 
1. `cd` into each folder separately and run `npm install` to install all dependencies.
2. Within the `back_end` server, create a file called `.env` and populate it with:
   -  `PORT = 4000`
   -  `MONGODB = <your mongo database URL>`
3. In the `back_end` folder, run `nodemon server.js` to start the server.
4. In the `front_end` folder, run `npm run dev` to start the server.
5. You should now be able to access the frontend on the port showing in the terminal where you ran `npm run dev`

### Common Bugs/Fixes
    1. TailwindCSS not building as expected after installation
        - Fix: `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`
    2. Unwanted node modules in multiple branches
        - Fix: npx npkill
