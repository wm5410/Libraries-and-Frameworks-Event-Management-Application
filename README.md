# Libraries and Frameworks: Event Management Application

This coursework requires building an event management application that allows users to manage their events.

## Features:

* **Event Management:** Users can view, add, delete, and sort events.
* **User Interface:** The application features a UI with:
    * A title for the app.
    * A "Create Event" button that makes a form appear for creating a new event.
    * A list of events, where each row displays the event name, start date, and end date, along with a button for deleting the event.
    * A search bar to filter the list of events by name.
    * A way to sort the list of events in ascending or descending order by start date.
* **Event Form:** The creation form includes inputs for event name, description, start date, and end date, and a submit button.
* **API Interaction:** The application interacts with an events API (separate from this React app) to load, create, and delete events from the database.

## Technologies Used:

* React
* HTML
* CSS
* JavaScript
* Bootstrap (Optional)

## Implementation and Setup:

1.  **Project Setup:**
    * Install Node.js and npm (if not already installed).
    * Set up the project using Vite in a terminal: `npm create vite@latest`
    * Follow the prompts, selecting 'React' and then 'JavaScript'.
    * Name the React app `react-assn4`.
2.  **Navigate to Project Directory:**
    * Change into the project directory: `cd react-assn4`
3.  **Install Dependencies:**
    * Install project dependencies: `npm install`
    * You may install additional dependencies as needed.
4.  **Development Server:**
    * Start the development server for live preview: `npm run dev`
5.  **React Developer Tools:**
    * Consider installing the React developer tools extension in your web browser for inspecting React elements.
