function fly() {
    const elements = document.querySelector('.elements');

    const [spaceship, asteroid, ufo] = elements.children;

    const start = spaceship.src;
    spaceship.src = ufo.src;
    ufo.src = asteroid.src;
    asteroid.src = start;

    setTimeout(fly, 500);
}