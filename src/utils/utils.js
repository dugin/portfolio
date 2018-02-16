export function progressToObj(progress) {
  return progress.reduce((acc, p, i) => ({ ...acc, [i]: false }), {});
}
