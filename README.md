## Second Wind


Second Wind

An application used to detect when people, especially the elderly, are failling, using machine learning, built with React, Tensorflow, snd Twilio.

## Project Status
Complete


## Installation and Setup Instructions


#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install` in both the main folder and the server folder

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

To Send Twilio Messages:

Contact one of our team members for the .env file information

## How we did it 

This was a 24 hour long project built during PantherHacks 2022. Project goals included using technologies learned up until this point and familiarizing ourselves with documentation for new features.  

Originally we wanted to build an application that allowed users to classify whether a mole was melanoma or not. We started this process by using the `create-react-app` boilerplate, then adding `react-router-dom`, `tailwindcss`, and `twilio`.  

One of the main challenges we ran into was the actual image classification and the video rendering. This lead us to spend a few hours on html videos, less common react depedency components, and overall Tensorflow-React collaboration. 

At the end of the day, the technologies implemented in this project are React, React-Router-Dom, TailwindCSS, Twilio, Tensorflow, and ML5. We chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird design rabbit holes. In the next iteration we plan on making a stronger model and connecting the twilio backend to first responders.
