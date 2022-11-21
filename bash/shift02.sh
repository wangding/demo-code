#!/bin/bash

if [ $# -eq 0 ]
then
  echo "Usage: ./shift02.sh 1 2 3 4"
  exit 1
fi
sum=0
until [ $# -eq 0 ]
do
  sum=`expr $sum + $1`
  shift
done
echo "sum is: $sum"
