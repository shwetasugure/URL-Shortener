# URL Shortener ✨

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)


## 🏅Features

- Generate short URLs from long URLs.
- Track the number of clicks on each shortened URL.
- Uses MongoDB to store URL mappings.
- Easy-to-use interface for generating short URLs.

### ShortID Package

The project utilizes the Shortid package to generate unique and short identifiers for the shortened URLs. 
shortid is a simple and lightweight library for generating concise and non-sequential IDs in Node.js applications.

## 🎉Demo
![image](https://github.com/shwetasugure/URL-Shortener/assets/107701519/ab9ea480-7556-42b5-a5a2-52e7617bdb7d)
![image](https://github.com/shwetasugure/URL-Shortener/assets/107701519/1c8f3fc7-5cca-45fa-8aa2-4edcf8d729a7)
Clicks updated accordingly and also deleted a link.
![image](https://github.com/shwetasugure/URL-Shortener/assets/107701519/f5907864-0d01-4cc9-b949-6b1352cf41dd)


## 📝Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running locally or a remote MongoDB instance.
- Basic knowlege of HTML, CSS and JS

### Installation

### 1. Clone the repository:

   ```bash
   git clone https://github.com/shwetasugure/URL-Shortener.git
   ```
### 2.Install dependencies:
 #### This command will install all the required Node.js modules.
  ```bash
npm install express
```
#### Mongoose is necessary to establish a connection between the Node.js project and MongoDB.
  ```bash
npm install mongoose
  ```
 #### Nodemon helps to reflect the changes directly on the server.
 ```bash
npm install nodemon
```
 #### Shortid is used to shorten the longer URLs.
 ```bash
npm install shortid
```
### 3. Start the Server
#### To start the server, run the following command:

```bash
npm run devStart
```
The server will start running on port 8001.
You can access it at:

```bash
localhost:8001
```

