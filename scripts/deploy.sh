#!/bin/bash
# You need to have a file in your home directory called
# .ssg-config.sh
# and you need to export the following AWS confgi envs
# export S3_BUCKET=[your bucket]
# export AWS_ACCESS_KEY_ID=[your aws key id]
# export AWS_SECRET_ACCESS_KEY=[your aws secret]
# export AWS_DEFAULT_REGION=[your aws region]
source ~/.ssg-config.sh
node ./node_modules/s3-redeploy/bin/s3-redeploy.js --bucket $S3_BUCKET --cwd ./out
