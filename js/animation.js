const child = document.querySelector(".floating");
const parent = document.querySelector(".hero-section");

let posX = 500;
let posY = 500;
let velocityX = 2.5;
let velocityY = 2;
const radius = child.offsetWidth;

function animate() {
    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    // Move position
    posX += velocityX;
    posY += velocityY;

    // Bounce on edges
    if (posX <= 0 || posX + radius >= parentWidth) {
        velocityX *= -1;
        posX = Math.max(0, Math.min(posX, parentWidth - radius));
    }

    if (posY <= 0 || posY + radius >= parentHeight) {
        velocityY *= -1;
        posY = Math.max(0, Math.min(posY, parentHeight - radius));
    }

    // Apply transform
    child.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(animate);
}

animate(); // Start animation
