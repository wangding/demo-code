num=1
while :
do
  echo "$num: wangding"
  ((num++))
  if [ $num -gt 5 ];
  then
    break
  fi
done
