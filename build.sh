#!/bin/bash
echo "begin building";
rm -rf src/**;
cp -rf tssrc/** src;
find src -name "*.ts" -print -exec rm {} \;
