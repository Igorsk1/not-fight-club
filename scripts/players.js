export function createPlayer(name) {
  return {
    name,
    avatar: "img/avatars/subzero.png",
    wins: 0,
    losses: 0,
    health: 150,
  }
}

const enemies = [
  {
    name: 'Ashra',
    avatar: "assets/img/avatars/ashra.png",
    health: 120,
    attackZones: 1,
    defenceZones: 2,
  },
  {
    name: 'Kitana',
    avatar: "assets/img/avatars/kitana.png",
    health: 140,
    attackZones: 2,
    defenceZones: 2,
  },
  {
    name: 'Li Mei',
    avatar: "assets/img/avatars/limei.png",
    health: 130,
    attackZones: 1,
    defenceZones: 2,
  },
  {
    name: 'Milina',
    avatar: "assets/img/avatars/milina.png",
    health: 120,
    attackZones: 2,
    defenceZones: 2,
  },
  {
    name: 'Sindel',
    avatar: "assets/img/avatars/sindell.png",
    health: 120,
    attackZones: 2,
    defenceZones: 2,
  },
  {
    name: 'Reiko',
    avatar: "assets/img/avatars/reiko.png",
    health: 140,
    attackZones: 2,
    defenceZones: 2,
  },
  {
    name: 'Reptile',
    avatar: "assets/img/avatars/reptile.png",
    health: 130,
    attackZones: 2,
    defenceZones: 2,
  },
  {
    name: 'Scorpion',
    avatar: "assets/img/avatars/scorpion.png",
    health: 120,
    attackZones: 2,
    defenceZones: 3,
  },
  {
    name: 'Shang Tsung',
    avatar: "assets/img/avatars/shantsung.png",
    health: 120,
    attackZones: 2,
    defenceZones: 3,
  },
  {
    name: 'Sub-Zero',
    avatar: "assets/img/avatars/subzero.png",
    health: 150,
    attackZones: 1,
    defenceZones: 2,
  },
]

export function getRandomEnemy() {
  const randomNum = Math.floor(Math.random() * enemies.length);
  return enemies[randomNum];
}
