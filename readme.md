# Remote Surveillance Dashboard

The Remote Surveillance Dashboard is a web-based application that allows users to view real-time video streams from RTSP and HTTP cameras. It provides a user-friendly interface for monitoring multiple cameras remotely and offers features like camera management, AI-based detections, and user account management.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Camera Management**: Users can add, remove, and organize their cameras within the dashboard. It supports both RTSP and HTTP camera URLs.

- **Real-time Video Streaming**: The dashboard provides real-time video streaming from connected cameras, allowing users to monitor their premises remotely.

- **AI-Based Detections**: The application uses AI algorithms to detect potential security threats or anomalies in the camera feeds, providing alerts and notifications.

- **User Authentication**: Secure user authentication and authorization system to ensure that only authorized users can access the surveillance dashboard.

- **User Account Management**: Users can update their account details, including profile information and password changes.

- **Subscription Plans**: The application offers various subscription plans with different camera limits, allowing users to choose the plan that suits their needs.

- **Responsive Design**: The dashboard is designed to be responsive and accessible on various devices, including desktops, tablets, and mobile phones.

## Getting Started

Follow these instructions to set up and run the Remote Surveillance Dashboard locally on your development machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager)
- [React.js](https://react.com/) and [npm](https://www.npmjs.com/) (React JS)
- [MongoDB](https://mongodb.com/) (as a local database)
- [Git](https://git-scm.com/) (for cloning the project repository)

### Installation

1. Clone the project repository to your local machine using Git:

2. Run - npm install in the main directory to install the node js dependencies.

3. Run - npm start - to run the server

4. Run - cd frontend

5. Run - npm install to install the react dependencies

6. Run - npm start

7. Run - cd .. to go back to the main directory.

8. Open your browser and navigate to http://localhost:3000/

### Notes:

As you can see in index.js there is also basic support to host the website
as static files from express.

This is app is build to be hosted on two different servers though.
One for the frontend and one for the backend which handles all the streaming
and future object detection through yolov8 on local Tensor/GPU's

Ofcourse because of a severe lack of funding :P this should just be run as two seperate instances for now.

1. The backend with npm start

2. The frontend with, cd frontend, npm start.

### Important

Make sure you have mongodb installed and running on the following url:port
mongodb://localhost:27017/ ( This should be the default port. )

## Flow

When a new user is registered and the database is still empty the new user will
automatically be made an administrator.

This means the following:

1. For this specific user the admin panel will be visible in the side menu.

2. This user can remove users, change their roles, upgrade or downgrade their subscription.

3. The admin user will automatically have 11 example camera streams added from unsecured cameras over the world ( for testing purposes only ).

## Payments - Subscription model

This dashboard supports 4 different subscription models.

1. Free -> up to 3 cameras.

2. Essential -> up to 6 cameras.

3. Professional -> up to 12 cameras.

4. Enterprice -> up to 99 cameras.

## Testing the payment system.

For payments i decided to use the paypal api.

To try out payments you can use the following sandbox account:

- **Buyers Account Email:**: buyer@react.com
- **Buyers Account Password:** 12345678

- **Sellers Account Email:**: seller@react.com
- **Sellers Account Password:** 12345678

## Testing the surveilence system

The streaming system supports two different kind of streams.

- **http stream:** A regular http url to a camera stream of a specific camera.
- **rtsp stream:** A rtsp stream, better quality stream that needs to be relayed through the server to be able to stream it in a react project.

Password protected streams can be added like this:

( url format )
rtsp://username:password@camera_ip_address:port/video_stream

Add the url in the ( add camera input ) and click on ( Add Camera ).
When choosing to stream rtsp cameras, be mindful that the converting of the stream
will be done from the server itself. Which ofcourse is very limited because of a lack
of resources on a simple PC.

This will limit the streams to about 9 cameras at a time for a pc with around 8 cores and 16gb of Ram.

( http format )
http://camera_ip_address:port/video_stream

Add the url in the ( add camera input ) and click on ( Add Camera ).
When choosing to use http streams you are only limited by the speed
of your internet connection. And of course Ram if you open a hundred streams at the same time.

## Future changes to be made.

1. Implement clean architecture and SOLID principles.
2. Implement object detection in a scalable fashion.
3. Further extract and organize React components.
4. Further perfect mobile responsiveness.
5. Cleaner error handling.
6. Implement analytics.
7. Implement a better payment system. ( Stripe )
8. Better folder structure.

## Final notes

This is a passion project & idea for a startup i want to create.
And even though i'm not sure if it's doable, I learned so much from this project.

I't wasn't easy to build this out when 9 months pregnant and after giving birth.
But i'm greatful for all the things i learned over the course of this project.

Components kept getting smaller and compacter.
Logic keeps getting extracted further and cleaner.
And simple comments became clear documentation.

Most important of all i learned to use google/stackoverflow as a solution to all my problems.

Thanks for everything,
Sapir Ben Haim.
