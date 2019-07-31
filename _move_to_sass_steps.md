# Move to SASS from CSS Steps

1. Rename _assets/css to _assets/scss
2. Rename _assets/scss/*.css to _*.scss, except site.scss
3. Update site.scss, remove url func and css extensions
4. Update gulpfile.js, uncomment SASS compile, update ALL paths
5. Re-launch gulp