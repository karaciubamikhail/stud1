let hero = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

function herolist(hero) {
        return (a, b) => a[hero] < b[hero] ? 1: -1;
}

export const heroarray = hero.sort(herolist('health'))

console.log(heroarray)