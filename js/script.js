document.addEventListener('DOMContentLoaded', function() {
    const menuList = document.getElementById('menu-items');
    const headerTitle = document.querySelector('.logo-container h1');

    if (!menuList || !headerTitle) {
        console.error('Menu items container or header title not found');
        return;
    }

    const hash = window.location.hash.substring(1);
    if (hash) {
        handleHashChange();
    } else {
        showCasa('menendez'); // Mostrar por defecto Casa Menéndez
    }

    updateMenuIcons(hash); // Actualizar iconos del menú según la sección
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

    const casaElement = document.getElementById(casa);
    if (casaElement) {
        casaElement.style.display = 'block';
        updateMenuIcons(casa);
        updateHeaderTitle(casa);
    }
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash === 'menendez' || hash === 'valles') {
        showCasa(hash);
    }
}

function updateMenuIcons(casa) {
    const menuList = document.getElementById('menu-items');
    if (!menuList) {
        console.error('Menu items container not found');
        return;
    }
    menuList.innerHTML = ''; 

    if (casa === 'menendez') {
        menuList.innerHTML = `
            <li><a href="index.html"><i class="fas fa-arrow-left"></i> Inicio</a></li>
            <li><a href="content.html#menendez"><i class="fas fa-home"></i> Casa</a></li>
            <li><a href="#menendez-equipamiento"><i class="fas fa-cogs"></i> Equipamiento</a></li>
            <li><a href="#menendez-actividades"><i class="fas fa-hiking"></i> Actividades</a></li>
            <li><a href="#menendez-localizacion"><i class="fas fa-map-marker-alt"></i> Localización</a></li>
            <li><a href="#menendez-tarifas"><i class="fas fa-euro-sign"></i> Tarifas</a></li>
            <li><a href="#menendez-social"><i class="fas fa-share-alt"></i> Redes</a></li>
            <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
        `;
    } else if (casa === 'valles') {
        menuList.innerHTML = `
            <li><a href="index.html"><i class="fas fa-arrow-left"></i> Inicio</a></li>
            <li><a href="content.html#valles"><i class="fas fa-home"></i> Casa</a></li>
            <li><a href="#valles-equipamiento"><i class="fas fa-cogs"></i> Equipamiento</a></li>
            <li><a href="#valles-actividades"><i class="fas fa-hiking"></i> Actividades</a></li>
            <li><a href="#valles-localizacion"><i class="fas fa-map-marker-alt"></i> Localización</a></li>
            <li><a href="#valles-tarifas"><i class="fas fa-euro-sign"></i> Tarifas</a></li>
            <li><a href="#valles-social"><i class="fas fa-share-alt"></i> Redes</a></li>
            <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
        `;
    }
}

function updateHeaderTitle(casa) {
    const headerTitle = document.querySelector('.logo-container h1');
    if (!headerTitle) {
        console.error('Header title element not found');
        return;
    }

    if (casa === 'menendez') {
        headerTitle.textContent = 'Casas de aldea Menéndez';
    } else if (casa === 'valles') {
        headerTitle.textContent = 'Casas de aldea Valles';
    }
}

// Declarar slideIndex fuera de las funciones para hacerlo accesible globalmente
let slideIndex = 0;

function showSlides(n, containerId) {
    var i;
    var container = document.getElementById(containerId);
    var slides = container.getElementsByClassName("carousel-slide");
    slideIndex = n;
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
    for (var i = 0; i <= totalImages; i++) {
        var slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-slide';
        var img = document.createElement('img');
        img.src = `images/${folderName}/${i}.jpeg`;
        img.alt = 'Imagen ' + i;
        img.className = 'carousel-image';
        img.onerror = function() {
            console.error(`Image ${this.src} not found.`);
        };
        img.onclick = function () {
            this.classList.toggle('fullscreen');
        };
        slideDiv.appendChild(img);
        container.appendChild(slideDiv);
    }
    showSlides(slideIndex, containerId); // Mostrar la primera imagen
}

document.addEventListener('DOMContentLoaded', function () {
    loadImages('carousel-container-menedez', 'menendez', 42); // Carga 29 imágenes para Casa Menéndez
    loadImages('carousel-container-valles', 'valles', 51); // Carga 57 imágenes para Casa Valles
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 180; // Ajusta este valor para cambiar el desplazamiento vertical
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
