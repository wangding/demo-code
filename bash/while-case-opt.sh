# bash while-case-opt.sh -n wangding -a 20
while getopts n:a: OPT
do
  case "${OPT}"
  in
    n) name=${OPTARG};;
    a) age=${OPTARG};;
    *) echo "Invalid option"
      exit 1;;
  esac
done

printf "My name is $name and am $age years old.\n"
