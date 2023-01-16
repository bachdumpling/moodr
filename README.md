# **Moodr App**

_Please view this file in preview_

Moodr is a smart wearable device that tracks your vital information and Moodr App is an accompanied app that combines your vital information from the watch with your answers to behavioral questions to generate your possible mood. The app is supposed to be on IOS. However, because of time constraint, we decided to develop a web application and migrate it to IOS in the future.

<br>

## **Installation**

### Prerequisites

The Moodr App is running on Next.js Client with Ruby on Rails Server. You will need to have these installed on the system:

```bash
npm
ruby -v "2.7.4"
```

<br>

### Client /moodr

You can install the necessary dependencies by running:

```bash
npm install
npm run dev
```

The client is running on [http://localhost:3001](http://localhost:3001). Click this to view mobile version of website on chrome desktop since the app is developed to be mobile-first:

<img src="https://asapguide.com/wp-content/uploads/2020/01/mobile-bar.jpg" width="300" height="200">

<br>

### Server /moodr-api

You can install the necessary dependencies by running:

```bash
bundle install
rails db:create
rails db:migrate
rails db:seed
```

The server is running on [http://localhost:3000](http://localhost:3000)

<br>

## **Features**

- Users can create new accounts, log in and log out of the app
- Users go through a series of short behavioral questions in /Checkin
- Generates a possible mood based on users' inputs of vital information and answers to the behavioral questions
- Returns users' possible moods and saves them to the database

<br>

## **Explore the app**

- Sign up for a new account then log in or use seed user information to log in:

```bash
username: bachle
password: 1
```

- Go to /Checkin page and follow the instructions
- Receive your result and return home

  <br>

## **Future Improvements**

### Client

- Implement techniques to optimize the performance of the client-side, such as reducing unnecessary fetch requests and minimizing re-renders.
- Implement code-splitting and dynamic imports to improve the loading time of the app.
- Refactoring components and components' stylings

### Server

- Implement input validation and sanitization to protect the server from malicious user input, for example, validate that the heart rate values are within a reasonable range (60-200)
- Implement a serializer to send only the necessary information to the client, to reduce the amount of data sent over the network and improve the performance of the app.
- Reinforce the check-in data posting to the server, by implementing proper authentication and authorization mechanisms.
- Implement load balancing and caching mechanism to improve the scalability and performance of the server-side.

  <br>

## **Authors**

- Programmer: [Bach Le](https://bachle.netlify.app/)
- UI/UX Designer: [Chanbin Moon](https://chanbinmoon.squarespace.com/)
  <br>

## **Acknowledgments**

- Hat tip to anyone who's code was used
- Thanks to [Chanbin Moon](https://chanbinmoon.squarespace.com/), my teammate, for invaluable contributions to the project's front-end development.
- I would also like to thank my friends and family for their support and understanding during the long hours spent working on this project.
- Thanks to everyone else who knows the feelings of being the only developer 😁. Even though it has been a difficult run, the result is certainly rewarding.
