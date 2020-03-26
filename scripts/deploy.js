import AWS from 'aws-sdk'

AWS.config.getCredentials((err) => {
  if (err) console.log(err.stack)
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId)
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey)
  }
})
