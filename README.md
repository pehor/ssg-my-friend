# SSG-my-friend
Uses Next.js to generate a static website. Deploys it to AWS S3.
Contains an example app with dummy data to simulate a simple cms as the datasource.
# Setup
## Deployment
- set up an AWS S3 bucket at https://s3.console.aws.amazon.com/

You need to create an S3 bucket. It needs to be set up for static website hosting. Blocking public access should be turned off.

You need to create an IAM user with S3 read/write access.
You need to create "programmatic" access credentials i.e. API keys.

 - Add your keys and other configs to your development machine (or CI)

You need to have a file in your home directory called `.ssg-config.sh`
and you need to export the following AWS config envs:
```shell script
export S3_BUCKET=[your bucket]
export AWS_ACCESS_KEY_ID=[your aws key id]
export AWS_SECRET_ACCESS_KEY=[your aws secret]
export AWS_DEFAULT_REGION=[your aws region]
```

More info can be found [in the AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).

# Scripts

Check package.json for all scripts. The main scripts for the workflow is:

- `build`: Runs linting, builds the projects using static data, and exports everything to he `out` directory
- `test`: Runs unittests with jest
- `serve:static`: Serves the contents of the `out` directory locally for testing
- `deploy`: Syncs the contents of the `out` directory to an S3 bucket

# Tests

See how tests are set up [here](./docs/tests.md)
