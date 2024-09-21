const container = document.querySelector('.comments_container');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const commentWidth = document.querySelector('.comment').offsetWidth + 16; // 16 for margin

rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: commentWidth, behavior: 'smooth' }); // Scroll to the right
});

leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -commentWidth, behavior: 'smooth' }); // Scroll to the left
});
