# Listify
This project was generated using [Angular CLI](https://github.com/angular/angular-cli).

### Firebase
Project uses [Cloud Firestore](https://firebase.google.com/docs/firestore).
<br />Every <b>list is a document</b> in Firebase collection.
<br /><b>Document ID is list ID</b>

#### Document Structure
<pre>
{
  "structure": [
    {
      "type": "TITLE",
      "key": "fullName",
      "title": "Full Name"
    },
    {
      "type": "TEXT",
      "key": "biography",
      "title": "Biography"
    }
  ],
  "list": [
    {
      "fullName": "Name Surname",
      "biography": "Very long text"
    }
  ]
}
</pre>

##### Property: `structure`
List of objects defining column. Column properties:
<br />`type` - column type (enum value)
<br />`key` - storage property name. E.g. we are creating a new record, this column value will be stored in property: `fullName`
<br />`title` - column title. Table column header label. New record creation input field label, etc.  


##### Property: `list`
List of objects. Every object will be displayed as row in list.

### Development
#### Environment Variables
Runtime has required env variables. Variables has to be defined in runtime configuration.

##### `COLLECTION_PATH`
<pre>env-collection-path-value</pre>

##### `FIREBASE_CONFIG`
<pre>{apiKey:'xxx',authDomain:'xxx',databaseURL:'xxx',projectId:'xxx',storageBucket:'xxx',messagingSenderId:'123',appId:'app:123',measurementId:'G-XX'}</pre>

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. Use the `--prod` flag for a production build.

#### Prod Build (Netlify)
Run `npm run build-prod` to build the project.
<br />It has pre script to install dependencies.
<br />It has post script to build redirects file for Netlify.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
