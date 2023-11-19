export function createId() {
  return (Date.now() * Math.random()).toString(36);
}