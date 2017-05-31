# Time2Jam

![time2jam logo](http://stevevancott.com/img/bloc_jams_bg.jpg)


Everybody loves Spotify, right? Its an awesome app for music lovers that showcases a huge library of songs and a solid user interface. Since I myself am also a fan of the app, I decided to build a similar app of my own called **_Time2Jam_**.

I designed the app’s pages with good ol’ fashion HTML and CSS, and first made them dynamic using CSS transitions and JavaScript. After incorporating event listeners, handlers, and a bunch of functions, the app was looking pretty good, but was still without music.

Up to this point, I had written a good amount of code and knew that the same functionality could be achieved by the other means, so I refactored the app using jQuery. With the help of the Buzz JavaScript library, I finally got my music app playing music! I was pretty satisfied with the finished project, but in an effort to improve my Angular skills I decided to refactor the app one last time using AngularJS. It didn’t take long until the app was fully functional again, and performing better than ever.

Throughout the project, there were a few recurring themes each time I refactored. One of which was how to display a list of the user’s saved albums.

The first time around, using JavaScript, I got the albums displaying by making a variable named `collectionItemTemplate` which included the album cover art, album name, artist and number of songs. Then with a simple for loop, I displayed the album the desired number of times.

When I refactored the app using Angular, I made a simple Fixtures service which held the album info, and included a method `Fixtures.getAlbum()` which returned the wanted album. In my Collection Controller, I made a method that gets the collections from the Fixtures service the desired number of times. By using an `ngRepeat` in the collection view, the albums display dynamically.

When I started the project I was already pretty familiar with HTML, CSS, and JavaScript, but had never done anything with jQuery. I found the library to be both practical and powerful, but with a downside of increased loading time.

Refactoring the app with Angular really opened my eyes to the power of the framework, and inspired me to make another app using Angular, [ChitChat](http://stevevancott.com/portfolio/chitChat/). I experienced for the first time how powerful writing clear and organized code can be. Although developing **_Time2Jam_** didn’t require an immense amount of code, I still tried to write it as clearly as possible. There are main directories for the assets, styles, templates and scripts. Within the scripts directory, I separated each section of code in its proper place, utilizing folders for controllers, services, filters and directives. **_Time2Jam_** is small scale for now, but by keeping the code nice and organized like this, it could be grown and developed into a mainstream app.

I had a lot of fun building **_Time2Jam_** and am quite pleased with the finished product. I became much more experienced with both the jQuery library and AngularJS framework.

<!-- Check out the app in production! [Time2Jam](https://time2jam.herokuapp.com/) -->

# About me

I'm a developer who's passionate about writing good code and loves the satisfaction of solving problems.

I've developed several apps using JavaScript, AngularJS, jQuery, and Ruby on Rails, using Git/Github as well as Heroku.

I'm also experienced HTML5 and CSS, and have worked with SQL and Firebase.

Currently, I'm looking for a developer role at a company that's as passionate as I am about doing good work.

[Check out more at my site!](http://stevevancott.com)

Feel free to email me at thevanicotti@gmail.com
