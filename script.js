let currentPage = 1;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById('page' + pageNumber).style.display = 'block';
}

function nextPage() {
    currentPage++;
    if (currentPage > 3) currentPage = 1;
    showPage(currentPage);
}

function restart() {
    currentPage = 1;
    showPage(currentPage);
}

// Show first page on load
window.onload = () => showPage(1);
