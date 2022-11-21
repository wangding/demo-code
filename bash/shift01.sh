#!/bin/bash

if [ $# -eq 0 ]
then
  echo "Usage: ./shift01.sh 1 2 3 4"
  exit 1
fi

until [ $# -eq 0 ]
do
  echo "第一个参数为: $1 参数个数为: $#"
  shift
done
