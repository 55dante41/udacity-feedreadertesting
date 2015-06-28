/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is defined and not empty for each feed', function() {
            for(var i=0; i< allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).not.toBe(0);
            }
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined and not empty for each feed', function() {
           for(var i=0; i< allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });


    /* New test suite named "The menu" */
    describe('The menu', function() {
      var bodyElement, menuIconLinkElement;

      beforeEach(function() {
          bodyElement = document.getElementsByTagName('body')[0];
          menuIconLinkElement = document.getElementsByClassName('menu-icon-link')[0];
      });
      /* A test that ensures the menu element is
      * hidden by default.
      */
      it('is hidden by default', function() {
          expect(bodyElement.classList).toContain("menu-hidden");
      });

      /* A test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * has two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
      it('changes visibility when menu icon is clicked', function() {
          menuIconLinkElement.click();
          expect(bodyElement.classList).not.toContain("menu-hidden");
          menuIconLinkElement.click();
          expect(bodyElement.classList).toContain("menu-hidden");
      });
    });


    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* A test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */
      beforeEach(function(done) {
          loadFeed(0, done);
      });

      it('are loaded and have atleast one entry', function() {
          expect(document.getElementsByClassName('feed')[0].getElementsByClassName('entry').length).not.toBe(0);
      });
    });



    /* A new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
      var initialFirstEntryContent;
      /* A test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      */
      beforeEach(function(done) {
        loadFeed(0, function() {
          initialFirstEntryContent = document.getElementsByClassName('feed')[0].getElementsByClassName('entry')[0].textContent;
          loadFeed(1, done);
        });
      });

      it('loads and updates page with new entries', function() {
        expect(document.getElementsByClassName('feed')[0]
                .getElementsByClassName('entry')[0].textContent).not.toBe(initialFirstEntryContent);
      });
    });
}());
