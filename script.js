document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('nav-links-list').classList.toggle('active');
});

document.getElementById('bookSearchBtn').addEventListener('click', () => {
    const what = document.getElementById('bookWhat').value;
    const where = document.getElementById('bookWhere').value;
    const when = document.getElementById('bookWhen').value;
    const rooms = document.getElementById('bookRooms').value;
    const adults = document.getElementById('bookAdults').value;

    alert(`Searching: ${what} in ${where} on ${when} with ${rooms} and ${adults}.`);
});