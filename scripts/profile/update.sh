#!/bin/bash

API="http://localhost:4741"
URL_PATH="/profiles"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "profile": {
      "name": "'"${NAME}"'",
      "income": "'"${INCOME}"'",
      "tax": "'"${TAX}"'",
      "disposable_income": "'"${D}"'",
      "user": "'"${USER}"'"
    }
  }'

echo
