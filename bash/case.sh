scores=(95 81 88 56 34 71)

for s in ${scores[@]};
do
  case $(($s/10)) in
    9) echo "$s 优";;
    8) echo "$s 良";;
    7) echo "$s 中";;
    6) echo "$s 及格";;
    *) echo "$s 不及格";;
  esac
done
