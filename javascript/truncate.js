function truncate(str, num) {
  if(num <= 3) return str.slice(0, num) + '...';

  if(num >= str.length) return str;

  return str.slice(0, num-3) + '...';
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2));
