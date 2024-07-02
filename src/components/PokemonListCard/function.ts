export function makeIndexStr(index: string) {
  const MAX_DIGITS = 3;
  const indexLength = index.length;
  const zeroLength = MAX_DIGITS - indexLength;
  const strArr: string[] = [];
  for (let i = 0; i < zeroLength; i++) {
    strArr.push("0");
  }
  return strArr.join("") + index;
}
