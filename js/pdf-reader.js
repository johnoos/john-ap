let currentPage = 0;
const pages = document.querySelectorAll('.document-page');

function openFullView() {
    document.getElementById('fullViewModal').style.display = "block";
    showPage(0);
}

function closeFullView() {
    document.getElementById('fullViewModal').style.display = "none";
}

function changePage(step) {
    let newPage = currentPage + step;
    if (newPage >= 0 && newPage < pages.length) {
        showPage(newPage);
    }
}

function showPage(index) {
    pages[currentPage].classList.remove('active');
    pages[index].classList.add('active');
    currentPage = index;
    document.getElementById('pageIndicator').innerText = `Page ${index + 1} of ${pages.length}`;
}