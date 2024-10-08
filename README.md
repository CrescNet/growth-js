# growth-js

[![GitHub Pages](https://github.com/CrescNet/growth-js/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://crescnet.github.io/growth-js)

## Description
This single-site application visualizes child growth data using Chart.js. Users can choose from multiple reference values.

After data entry, users can save the data to the browser's local storage or to a JSON file. They can also create a QR code that contains the data.

Data can later be re-imported into the application.

We focused on data privacy when developing this application.

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
