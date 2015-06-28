#Feedreader Testing
Feedreader testing using Jasmine for Udacity Front-End developer ND

###How to start:
- Download and install the latest version of python (https://www.python.org/downloads/)
- Open cli and navigate to the game dir
- Run the command: "python -m SimpleHTTPServer 8000" if you have python 2.x installed
- Run the command: "python -m http.server 8000" if you have python 3.x installed
- Go to http://localhost:8000 in your browser to start the game

# Tests in this project

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. A test that ensures the menu element is hidden by default.
4. A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
