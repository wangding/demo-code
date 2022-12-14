factorial() {
  if [ $# -eq 0 ]; then
    return 0
  fi

  local fac=1
  for((num=1; num<=$1; num++));
  do
    ((fac*=$num))
  done
  return $fac
}

n=5
factorial $n
echo "$n! = $?"
