# To run
- Install Node.js and verify it's installed by running `node -v` and `npm -v`
- Clone this repo
- Run `npm install`
- Then `npm start`
- Navigate in a browser to http://localhost:3000/

# The approach taken
- I retrieved data from the API and got an understanding of the data structures by outputting sections of it just to the console.
- I got a basic flow of back-end to front-end working to show just the names of the CUs in a table.
- Then I gradually added more data to the table.
- Applied styling to the table and to the data within it like putting urls behind clickable icons and making a subheader beneath the main institutions header.
- At first I thought of implementing a dropdown button next to each CU to show/hide the institutions.
But then I decided to opt for showing institutions by default without the user needing to click a dropdown as every CU has at least one institution linked to it and only a few have multiple institutions linked to them.

# Robustness
Even though the Christian Unions API seems to have a predictable structure, my code doesn’t assume it always will. This makes it robust. It handles null values safely by not running code blocks if a variable is null and uses optional chaining to protect against errors arising when parts of objects are not defined.

# Further development ideas
- If the url and website are the same, only show one icon because otherwise there are 2 icons going to the same webpage.
- Add more configurability on what to show e.g. dropdowns which allow for:
  - filter by the region that institutions are in
  - filter by name by typing in a search bar.
- Use a location API to show on a map the different CU’s locations using the geocode.
- Use a reactive framework like Svelte or React.
