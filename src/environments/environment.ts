// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
        config : {
          apiKey: "AIzaSyBW0p8pTz2kHiNrNrKvbuNQG4xsXxM6PjA",
          authDomain: "storeapp-7c8bb.firebaseapp.com",
          projectId: "storeapp-7c8bb",
          storageBucket: "storeapp-7c8bb.appspot.com",
          messagingSenderId: "728961461051",
          appId: "1:728961461051:web:0917bfad1825069a3e651e"
        }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  },
  url: 'http://localhost:5200'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
