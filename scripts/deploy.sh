#!/bin/bash
# You need to have a file in your home directory called
# .ssg-config.sh
# and in it, you need to export the following AWS config envs
# export S3_BUCKET=[your bucket]
# export AWS_ACCESS_KEY_ID=[your aws key id]
# export AWS_SECRET_ACCESS_KEY=[your aws secret]
# export AWS_DEFAULT_REGION=[your aws region]
#
# Alternatively you can specify a file path as the first param to point to a different file.

CONFIG=${1:-~/.ssg-config.sh}
echo "using config at $CONFIG"
source $CONFIG
node ./node_modules/s3-redeploy/bin/s3-redeploy.js --bucket $S3_BUCKET --cwd ./out
