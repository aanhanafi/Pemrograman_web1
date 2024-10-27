function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Menangani klik untuk menu responsif
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('header ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle class 'show' untuk menampilkan/menyembunyikan menu
});

// Mendapatkan elemen menu
const menu = document.getElementById('menu');

// Fungsi untuk toggle menu
function toggleMenu() {
    menu.classList.toggle('hidden');
}

// Menutup menu jika mengklik di luar
window.onclick = function(event) {
    if (!event.target.matches('.burger-menu') && !menu.contains(event.target)) {
        menu.classList.add('hidden'); // Menutup menu
    }
}
