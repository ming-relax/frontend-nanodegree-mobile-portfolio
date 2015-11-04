##### Part 1: Optimize PageSpeed Insights score for index.html
In this project, I have tried the follwing things:

- use `asyc` for scripts that don't change DOM

- specify media type for external css

- compress and inline css for current page

To get the css that is needed between:

```css
<style media="screen">
</style>
```

Run the following command:

`npm install`

`npm run build`

To see the result, run the following commands:
1. Run this command
`$> python -m SimpleHTTPServer 8080`

2. ngrok 8080

3. Goto google's speed insight test:

https://developers.google.com/speed/pagespeed/insights/

##### Part 2: Optimize Frames per Second in pizza.html

1. Run this command:
`$> python -m SimpleHTTPServer 8080`

2. Use your browser and you can see the result.
