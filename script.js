function showCasa(casa) {
    // Asegurarse de que la página se desplaza al principio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    document.querySelectorAll('.casa-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(casa).style.display = 'block';

    // Actualizar el menú de navegación según la casa mostrada
    updateMenu(casa);
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash === 'menendez' || hash === 'valles') {
        showCasa(hash);
    }
}

function updateMenu(casa) {
    const navList = document.getElementById('nav-list');
    navList.innerHTML = `
        <li><a href="index.html"><i class="fas fa-home"></i> Inicio</a></li>
        ${casa === 'menendez' ? '' : '<li><a href="#menendez" onclick="showCasa(\'menendez\')"><i class="fas fa-cabin"></i> Casa Menéndez</a></li>'}
        ${casa === 'valles' ? '' : '<li><a href="#valles" onclick="showCasa(\'valles\')"><i class="fas fa-cabin"></i> Casa Valles</a></li>'}
        <li><a href="#equipamiento"><i class="fas fa-tools"></i> Equipamiento</a></li>
        <li><a href="#actividades"><i class="fas fa-hiking"></i> Actividades</a></li>
        <li><a href="#localizacion"><i class="fas fa-map-marker-alt"></i> Localización</a></li>
        <li><a href="#tarifas"><i class="fas fa-money-bill-wave"></i> Tarifas</a></li>
        <li><a href="#social-${casa}"><i class="fas fa-share-alt"></i> Redes Sociales</a></li>
        <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
    `;
}

// Mostrar la casa correspondiente cuando cambia el hash
window.addEventListener('hashchange', handleHashChange);

// Mostrar la casa correspondiente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        setTimeout(() => {
            handleHashChange();
        }, 100);
    } else {
        showCasa('menendez'); // Mostrar por defecto Casa Menéndez
    }
});

var slideIndex = 0;

function showSlides(n, containerId) {
    var i;
    var container = document.getElementById(containerId);
    var slides = container.getElementsByClassName("carousel-slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n, containerId) {
    showSlides(slideIndex += n, containerId);
}

function loadImages(containerId, folderName, totalImages) {
    var container = document.getElementById(containerId);
    for (var i = 1; i <= totalImages; i++) {
        var slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-slide';
        var img = document.createElement('img');
        img.src = `images/${folderName}/${i}.jpeg`;
        img.alt = 'Imagen ' + i;
        img.className = 'carousel-image';
        img.onclick = function () {
            this.classList.toggle('fullscreen');
        };
        slideDiv.appendChild(img);
        container.appendChild(slideDiv);
    }
    showSlides(slideIndex, containerId); // Mostrar la primera imagen
}

document.addEventListener('DOMContentLoaded', function () {
    loadImages('carousel-container-menedez', 'menedez', 29); // Carga 29 imágenes para Casa Menéndez
    loadImages('carousel-container-valles', 'valles', 57); // Carga 57 imágenes para Casa Valles
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('header').classList.toggle('nav-active');
});

document.querySelectorAll('header nav ul li a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.remove('open');
        document.querySelector('header').classList.remove('nav-active');
    });
});
