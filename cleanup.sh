#!/bin/bash

# Find and remove node_modules directories
find . -type d -name "node_modules" -exec rm -rf {} \;

# Find and remove package-lock.json files
find . -type f -name "package-lock.json" -exec rm -f {} \;
npm cache clean --force
