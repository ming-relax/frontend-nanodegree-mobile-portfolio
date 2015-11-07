##### Part 1: Optimize PageSpeed Insights score for index.html

To see the result of the optimized website, please visit:

https://storage.googleapis.com/udacity-5/index.html

Google PageSpeed Insights test result:

https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fstorage.googleapis.com%2Fudacity-5%2Findex.html&tab=mobile

In this project, I have tried the following things:

- use `asyc` for scripts that don't change DOM

- specify media type for external css

- compress and inline css for current page

- resize, minimize images

- compress html, css, js when release the website.

- set Cache-Control for resources in the website.

I am using `grunt` to generate css, image, js I want; and using google cloud storage to host the website.

To generate the assets in this project, please install `grunt` and run:

`grunt`

To upload assets into google cloud storage, I run this:

`./upload`

##### Part 2: Optimize Frames per Second in pizza.html

1. Run this command:
`$> python -m SimpleHTTPServer 8080`

2. Use your browser and you can see the result.

A list of optimization I made:

- Optimize css queries in `determineDx`.

- Optimize css queries in `changePizzaSizes`

- Put `updatePositions` into `requestAnimationFrame`

- Optimize css queries in `updatePositions`.

- Optimize css queries in line 473 to make the first load faster.

- Determine the number of moving pizza based on the current window height to reduce the number of pizza needs to be drawn.
