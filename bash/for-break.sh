num=1
for((; ;));
do
  echo "$num wangding"
  ((num++))
  if(( $num > 5 )); then
    break;
  fi
done
