function isMerge(s, part1, part2) {
  let combined = part1 + part2;
  let data = {};
  for (let i = 0; i < combined.length; i++) {
    if (!data[combined[i]) {
      data[combined[i]] = true
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (!data[s[j]) return false;
  }
  return true;
}
