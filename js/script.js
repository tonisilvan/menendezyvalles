document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        handleHashChange();
    } else {
        showCasa('menendez'); // Mostrar por defecto Casa Menéndez
    }

    updateMenuIcons(hash);
});

window.addEventListener('hashchange', handleHashChange);

function showCasa(casa) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    document.querySelectorAll('.casa-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(casa).style.display = 'block';

    updateMenuIcons(casa);
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash.includes('menendez')) {
        showCasa('menendez');
    } else if (hash.includes('valles')) {
        showCasa('valles');
    }
}

function updateMenuIcons(casa) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = ''; // Limpiar el menú

    if (casa.includes('menendez')) {
        menuList.innerHTML = `
            <li><a href="index.html"><i class="fas fa-arrow-left"></i> Inicio</a></li>
            <li><a href="content.html#valles"><i class="fas fa-home"></i> Casa Valles</a></li>
            <li><a href="#menendez-equipamiento"><i class="fas fa-cogs"></i> Equipamiento</a></li>
            <li><a href="#menendez-actividades"><i class="fas fa-hiking"></i> Actividades</a></li>
            <li><a href="#menendez-localizacion"><i class="fas fa-map-marker-alt"></i> Localización</a></li>
            <li><a href="#menendez-tarifas"><i class="fas fa-euro-sign"></i> Tarifas</a></li>
            <li><a href="#menendez-social"><i class="fas fa-share-alt"></i> Redes Sociales</a></li>
            <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
        `;
    } else if (casa.includes('valles')) {
        menuList.innerHTML = `
            <li><a href="index.html"><i class="fas fa-arrow-left"></i> Inicio</a></li>
            <li><a href="content.html#menendez"><i class="fas fa-home"></i> Casa Menéndez</a></li>
            <li><a href="#valles-equipamiento"><i class="fas fa-cogs"></i> Equipamiento</a></li>
            <li><a href="#valles-actividades"><i class="fas fa-hiking"></i> Actividades</a></li>
            <li><a href="#valles-localizacion"><i class="fas fa-map-marker-alt"></i> Localización</a></li>
            <li><a href="#valles-tarifas"><i class="fas fa-euro-sign"></i> Tarifas</a></li>
            <li><a href="#valles-social"><i class="fas fa-share-alt"></i> Redes Sociales</a></li>
            <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
        `;
    }
}

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
