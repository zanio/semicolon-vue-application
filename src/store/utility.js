export function timeoutFunction(commit, type) {
  setTimeout(() => {
    commit(type);
  }, 5000);
}
