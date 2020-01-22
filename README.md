## https://lovejs.dev

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build
```

### Add Cordova Quasar Mode
```bash
quasar mode add cordova
```

### Add Platform
```bash
cd src-cordova
```

```bash
cordova platform add [android|ios]
```

```bash
cordova requirements
```

### IOS dev
```bash
quasar dev -m cordova -T ios
```

### Build to IOS
```bash
quasar build -m cordova -T ios
```

### Add In App Browser Support
```bash
cd src-cordova
```

```bash
cordova plugin add cordova-plugin-inappbrowser
```

### Add Icon-Genie Extension
```bash
quasar ext add @quasar/icon-genie
```
