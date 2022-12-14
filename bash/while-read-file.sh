num=1
while read -r line;
do
  echo "$num:  $line"
  ((num++))
done < /etc/passwd
