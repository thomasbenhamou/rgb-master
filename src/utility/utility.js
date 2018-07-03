export const sortPlayers = (a, b) => {
  if (Number(a.time) < Number(b.time)) {
    return -1;
  }
  if (Number(a.time) > Number(b.time)) {
    return 1;
  }
  if (Number(a.time) === Number(b.time)) {
    if (a.score < b.score) {
      return -1;
    }
  }
};
