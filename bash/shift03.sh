#!/bin/bash

if [ $# -eq 0 ]
then
  echo "Usage: ./shift03.sh 1 2 3 4"
  exit 1
fi

function func_t(){
  shift
  echo $@
}

shift
func_t a b c d

echo $@
