#!/bin/bash

API="http://localhost:4741"
URL_PATH="/bills"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "bill": {
      "name": "'"${NAME}"'",
      "price": "'"${PRICE}"'",
      "date": "'"${DATE}"'",
      "user": "'"${ID}"'"
    }
  }'
  
echo
