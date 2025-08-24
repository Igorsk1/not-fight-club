export function savePlayerInfo(player) {
  localStorage.setItem('player', JSON.stringify(player));
};

export function getPlayerInfo() {
  const data = localStorage.getItem('player');
  return data ? JSON.parse(data) : null;
}
