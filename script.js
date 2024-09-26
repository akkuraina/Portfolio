//also does not use an api. just dom manipulation

const numStars = 700;
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 200}vw`;
    star.style.top = `${Math.random() * 200}vh`;
    star.style.animationDuration = `${Math.random() * 50 + 20}s`;
    star.style.animationDelay = `${Math.random() * 50}s`;
    starsContainer.appendChild(star);
}
