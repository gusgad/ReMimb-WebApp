### ReMimb Web App

![Main](title.png?raw=true)

ReMimb is a Progressive Web App written in JavaScript on AngularJS and Firebase platforms for making the search of recently lost things easier. As per Google's description of the new PWA features, ReMimb is:

* Connectivity independent - enhanced with Service Workers to work offline or on low quality networks
* Fresh - always up-to-date by means of the Service Worker update process
* Discoverable - identifiable as “application” thanks to W3C manifests and Service Worker registration scope allowing search engines to find it
* Installable - allows users to “keep” apps they find most useful on their home screen without the hassle of an app store
* App-like - feel like an app to the user with app-style interactions (splash-screens on Android, navigation bar color) and navigation

According to Lighthouse - a new auditing and performance metrics for Progressive Web Apps built by Google Chrome team, ReMimb gets 100 out of 100:

![Lighthouse](/assets/img/lighthouse.png?raw=true)

## Screenshots

This is the main screen where you can find all of the added items in form of the cards with an image on top, item description in ne middle-bottom and a last know location on the bottom as well as a Remove button, which removes the item permanently from the Firebase database. There is a search bar above the card which allows to filter the items by typing just the letter that item contains. The far top left icon (aka Hamburger menu) allows to switch the views of the app. The right one opens a new panel for selecting an image, filling out the input fields and adding items.
![Main Screen](/assets/img/scr2.png?raw=true)

The menu screen allows switching the sections.
![Menu](/assets/img/scr3.png?raw=true)

Here one can add information on a new item, upload or take an image and submit it touching the ADD button
![Adding an item](/assets/img/scr4.png?raw=true)

Favorites section contains a list of items that were previously starred and marked as favorite. A favorite item can't be deleted from Favorites section but rather deleted from the main screen for good.
![Favorites](/assets/img/scr5.png?raw=true)

A desktop view of the app.
![Desktop](/assets/img/scr1.png?raw=true)


Special thanks to all the Googlers and other developers for having an amazing influence on Progressive Web Apps alongside  
with their useful conference talks, documentation and articles.
Technologies used for building this app: JavaScript(ES6), AngularJS, CSS, HTML, Grunt, HTML5 Boilerplate.




