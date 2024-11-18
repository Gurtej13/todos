Todos API

This repository contains a simple CRUD API built with Node.js and Express, extended with additional functionalities as per the assignment requirements.
File Structure

    index.js: Main server file containing the API implementation.

Assignment Deliverables

This repository fulfills the assignment requirements to extend the Todos API by implementing the following functionalities:
Question 1: Add a "Priority" Field to the To-Do API

Objective: Include a priority field in each to-do item, with support for adding and displaying it.

Steps Implemented:

    POST /todos:
        Accepts a priority field in the request body (valid values: "high", "medium", "low").
        Defaults to "medium" if no priority is specified.

    GET /todos:
        Now includes the priority field in the response for all to-do items.

Example Usage:

    Add a new to-do item with "high" priority:

curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"task": "Complete Express assignment", "priority": "high"}'

Retrieve all to-do items:

    curl http://localhost:3000/todos

Question 2: Implement a "Complete All" Endpoint

Objective: Create an endpoint that marks all to-do items as completed.

Steps Implemented:

    PUT /todos/complete-all:
        Updates all to-do items to set their completed status to true.

Example Usage:

    Mark all to-do items as completed:

curl -X PUT http://localhost:3000/todos/complete-all

Retrieve all to-do items to verify:

    curl http://localhost:3000/todos

Question 3: Filter To-Do Items by Completion Status

Objective: Add filtering support to the GET /todos endpoint based on the completed status.

Steps Implemented:

    GET /todos?completed=true/false:
        Accepts an optional query parameter completed (boolean as "true" or "false").
        Filters the to-do items based on their completed status if the query parameter is provided.
        Returns the full list of to-do items if the parameter is not provided.

Example Usage:

    Retrieve only completed to-do items:

curl http://localhost:3000/todos?completed=true

Retrieve only uncompleted to-do items:

    curl http://localhost:3000/todos?completed=false

How to Run the API

    Clone the Repository:

git clone <repo-url>
cd <repo-name>

Install Dependencies:

npm install

Start the Server:

    npm start

    Test the Endpoints: Use curl commands or any REST client (e.g., Postman) to test the API endpoints as described above.

Testing Instructions

    Ensure the server is running on http://localhost:3000.
    Use the provided curl commands or a browser to interact with the endpoints.
    Test all functionalities, including adding, retrieving, updating, deleting, marking all as completed, and filtering to-do items.

Deliverable

    A PDF file with a link to this GitHub repository has been submitted to Canvas.
    All code changes are in the index.js file in this repository.
