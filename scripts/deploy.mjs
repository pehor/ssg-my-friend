import AWS from 'aws-sdk'
import util from 'util'

const S3BucketName = 'psys-serve-test'
const S3ApiVersion = '2006-03-01'

const _setup = async () => {
  try {
    await util.promisify(AWS.config.getCredentials)
  } catch (err) {
    console.log(err.stack)
  }
  // we have now:
  // AWS.config.credentials.accessKeyId
  // AWS.config.credentials.secretAccessKey
}

const main = async () => {
  await _setup()

  const S3 = new AWS.S3({ apiVersion: S3ApiVersion })

  const objectParams = {
    Bucket: S3BucketName,
    Key: 'testFile2',
    Body: 'Hello World!'
  }

  console.log('Uploading file to S3...')
  try {
    await S3.putObject(objectParams).promise()
  } catch (err) {
    console.log(err, 'Error uploading file to S3')
    return
  }
  console.log('Successfully uploaded file to S3')
}

main()
