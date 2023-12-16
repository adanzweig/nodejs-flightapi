# Flight Search API Integration

This project integrates with the Flight Search API to provide functionality for searching roundtrip flights. It uses Node.js and Axios for handling API requests.

## Features

- Search for roundtrip flight data.
- Filter flights based on departure and arrival airports, date, number of passengers, flight status, and currency.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- dotenv for managing environment variables

### Installing

A step by step series of examples that tell you how to get a development env running:

1. Clone the repo
   ```sh
   git clone https://github.com/adanzweig/nodejs-flightapi.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

Edit the `index.js` file to set up your desired parameters for the flight search. You can run the script using Node.js:

```bash
node index.js
```

## Configuration

To configure the application, create a `.env` file in the root directory and add the following:

```
API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key for the Flight Search API.