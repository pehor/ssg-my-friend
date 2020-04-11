# SSG-my-friend
This repository is meant to be an example and a starting point for building a static website generator.
It uses Next.js to generate a static website. Scripts are included to deploy the results to AWS S3.

There are simple static pages and generated static pages. The `dummyData` folder is included to emulate a simple CMS as the data source for the generated pages (see `src/pages/posts`).
This data is read at build time from there.

# Setup to support deployment to AWS S3
- set up an AWS S3 bucket at https://s3.console.aws.amazon.com/

You need to create an S3 bucket. It needs to be set up for static website hosting. Blocking public access should be turned off.
You need to add a bucket policy that allows reading from it. It should look like this:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<your-bucket-name>/*"
        }
    ]
}
```

You need to create an IAM user with S3 read/write access.
You need to create "programmatic" access credentials i.e. API keys.

 - Add your keys and other configs to your development machine (or CI)

You need to have a file in your home directory called `.ssg-config.sh`
and you need to export the following AWS config environment variables:
```shell script
export S3_BUCKET=[your bucket]
export AWS_ACCESS_KEY_ID=[your aws key id]
export AWS_SECRET_ACCESS_KEY=[your aws secret]
export AWS_DEFAULT_REGION=[your aws region]
```

More info can be found [in the AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).

# Scripts

You need to run `npm install` before running any of the scripts below.

All scripts can be run by `npm run <script>`. Check package.json for all scripts. The main scripts for the workflow is:

- `build`: Runs linting, builds the projects using static data, and exports everything to he `out` directory
- `test`: Runs unittests with jest
- `serve:static`: Serves the contents of the `out` directory locally for testing
- `deploy`: Syncs the contents of the `out` directory to an S3 bucket

# Tests

Unittests are run by Jest. Coverage is also available. You can run them like this:

```shell script
npm run test
npm run coverage
```

Because we use React, we need a few extra configs to test rendering of pages.

`.babelrc` is required to transpile jsx files using babel, so that the tests can use them.

`tests/setupTests.js` is a common setup file. In our case it loads `@testing-library/jest-dom/extend-expect`, which contains extensions to help with matching things in the dom.

`jest.config.js` sets up coverage checking, defines the route to setupTests.js, and defines transpiling options. 

`"jest": true` is added to `.eslintre.json` so that we don't get undefined errors for test() and expect() in our tests.

In order to make .scss module imports work in tests, in `jest.config.js`, the `moduleNameMapper` object was added to point all style (and other non-js) files to a mock.
# Styling

This project uses Sass and styles are set up to be module-scoped. This means that the styles for your xxx.jsx file need to be in a file called xxx.module.scss.
That file needs to be imported in the jsx module, and the class names defined in the scss file should be used. For example:

```jsx harmony
// contents of mainContainer.jsx:
import styles from './mainContainer.module.scss'

class MainContainer extends Component {
  render () {
    ...
    return (
      ...
      <div className={ styles.pageHeader }></div>
    )
  }
}
```

Reset.scss is loaded from an npm module and resets some of the common default browser stylings.

Common variables are defined in `src/styles/variables.scss` and need to be imported to files that use them.

Font-awesome is included by default, see examples of its usage in `index.jsx`.

# Static assets

All static assets need to be stored in the `/public` folder. See the `/public/logo.png` as an example. Make sure files don't have the same name as a file in the `/pages` directory.

# Web crawlers

A robots.txt file is included to disallow all indexing. Change this according to your needs.

# License

This repository licensed under MIT license.
