num=0
while [ $num -lt 10 ];
do
  ((num++))
  if [ $((num%2)) -eq 0 ];
  then
    continue
  fi
  echo "$num: wangding"
done
