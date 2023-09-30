export function getMotivationalQuote() {
  return fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => data);
}
