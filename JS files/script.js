document.addEventListener("DOMContentLoaded", (e) => {
    const icon = document.getElementById('icon');

    const showSidebarBtn = document.getElementById('showSidebarBtn');
    const hideSidebarBtn = document.getElementsByClassName('hideSidebarBtn');
    const sidebar = document.getElementById('sidebar');
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
