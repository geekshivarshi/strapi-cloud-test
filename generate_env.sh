#!/bin/bash

# Check if jq is installed
command -v jq >/dev/null 2>&1 || { echo >&2 "jq is required but not installed. Aborting."; exit 1; }

# Check if a JSON file and branch name are provided as arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <json_file> <branch_name>"
    exit 1
fi

json_file=$1
branch_name=$2

# Check if the file exists
if [ ! -f "$json_file" ]; then
    echo "Error: File not found - $json_file"
    exit 1
fi


jq -r 'to_entries[] | "\(.key)=\(.value | tostring | gsub("\"";""))"' "$json_file"

# Append branch name to .env file
# echo "BRANCH_NAME=$branch_name" 