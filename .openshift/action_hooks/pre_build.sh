#!/bin/bash

#NODE_VERSION_URL
TARGET_NODE_VERSION=$(node -e "var p = require('$OPENSHIFT_REPO_DIR/package.json')||{engines:{}}; console.log(encodeURI(p.engines.node||''));")
echo "https://semver.io/node/resolve/$TARGET_NODE_VERSION" > ${HOME}.env/user_vars/NODE_VERSION_URL

#NPM_VERSION_URL
TARGET_VERSION=$(node -e "var p = require('$OPENSHIFT_REPO_DIR/package.json')||{engines:{}}; console.log(encodeURI(p.engines.npm||''));")
echo "https://semver.io/npm/resolve/$TARGET_VERSION" > ${HOME}.env/user_vars/NPM_VERSION_URL