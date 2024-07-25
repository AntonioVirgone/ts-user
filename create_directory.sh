#!/bin/zsh

usage() {
  echo
  echo "Usage: "
  echo "$SCRIPT_NAME <type> <name>"
  echo
  exit 1
}

SCRIPT_NAME=${0}

PROJECT_TYPE=$1
if [[ -z $PROJECT_TYPE ]]; then
  usage
fi
PROJECT_NAME=$2
if [[ -z $PROJECT_NAME ]]; then
  usage
fi

SCRIPT_DIR=${0%/*}

# Create directory
NEW_DIRECTORY="$SCRIPT_DIR/src/$PROJECT_TYPE/$PROJECT_NAME"
mkdir -p $NEW_DIRECTORY
echo "Create $NEW_DIRECTORY"

NEW_DIRECTORY_TEST="$SCRIPT_DIR/__tests__/$PROJECT_TYPE/$PROJECT_NAME"
mkdir -p $NEW_DIRECTORY_TEST
echo "Create $NEW_DIRECTORY_TEST"

# Prepare file name
PROJECT_NAME_UPPER=$(echo "${PROJECT_NAME:0:1}" | tr '[:lower:]' '[:upper:]')$(echo "${PROJECT_NAME:1}" | tr '[:upper:]' '[:lower:]')
echo $PROJECT_NAME_UPPER

PROJECT_TYPE_UPPER=$(echo "${PROJECT_TYPE:0:1}" | tr '[:lower:]' '[:upper:]')$(echo "${PROJECT_TYPE:1}" | tr '[:upper:]' '[:lower:]')
echo $PROJECT_TYPE_UPPER

# Create file Interface and Implementation
OUTPUT_FILE=$(echo -n "$NEW_DIRECTORY/$PROJECT_NAME_UPPER$PROJECT_TYPE_UPPER.ts")
touch $OUTPUT_FILE
echo "Create file $OUTPUT_FILE"

OUTPUT_FILE_INTERFACE=$(echo -n "$NEW_DIRECTORY/I$PROJECT_NAME_UPPER$PROJECT_TYPE_UPPER.ts")
touch $OUTPUT_FILE_INTERFACE
echo "Create file $OUTPUT_FILE_INTERFACE"

# Create file test
OUTPUT_FILE_TEST=$(echo -n "$NEW_DIRECTORY_TEST/$PROJECT_NAME_UPPER$PROJECT_TYPE_UPPER.spec.ts")
touch $OUTPUT_FILE_TEST
echo "Create file $OUTPUT_FILE_TEST"

