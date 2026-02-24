document.addEventListener("DOMContentLoaded", function(event){
    const icon = document.getElementById('icon');
    const showSidebarBtn = document.getElementById('showSidebarBtn');
    const hideSidebarBtn = document.getElementsByClassName('hideSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const scrollableArea = document.getElementById("scrollableArea");
    const scrollTarget = document.getElementById('scroll-target');

// Logically clone the inner HTML to create the "second set"
});


icon.addEventListener('click', (e) => {
            setTimeout(() => {
                window.location.href = "https://github.com/Goaten-31";
            }, 250)});


showSidebarBtn.addEventListener('click', () => {
  sidebar.style.display = "block";
  sidebar.classList.remove('slideOut');
  sidebar.classList.add('slideIn');
});

hideSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('slideIn');
  sidebar.classList.add('slideOut');
});

rightArrow.addEventListener("click", () => {
  scrollableArea.scrollBy({
    left: 810,
    behavior: 'smooth'
  });
});


leftArrow.addEventListener("click", () => {
  scrollableArea.scrollBy({
    left: -810,
    behavior: 'smooth'
  });
});


function autoScrollFeed(){
    setTimeout(() => {
    scrollableArea.scrollBy({
    left: 810,
    behavior: 'smooth'
  });}, 1500)
}

autoScrollFeed();