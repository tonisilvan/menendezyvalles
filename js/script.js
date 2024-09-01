document.addEventListener('DOMContentLoaded', function() {
    const menuList = document.getElementById('menu-items');
    const mobileMenu = document.getElementById('mobile-menu');
    const headerElement = document.querySelector('header');

    if (!menuList) {
        console.error('Menu items container not found');
        return;
    }

    const hash = window.location.hash.substring(1);
    if (hash.startsWith('menendez')) {
        showCasa('menendez');
    } else if (hash.startsWith('valles')) {
        showCasa('valles');
    } else {
        showCasa('menendez'); // Mostrar por defecto Casa Menéndez
    }

    // Evento para abrir/cerrar el menú móvil
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('open');
        headerElement.classList.toggle('nav-active');
    });

    // Captura los clics en los enlaces de navegación
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Cancela el comportamiento por defecto

            const href = this.getAttribute('href');
            if (href.startsWith("#")) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = 147; // Ajusta este valor según la altura de tu encabezado
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    // Realiza el desplazamiento suave
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Actualiza la URL sin recargar la página
                    history.pushState(null, null, `#${targetId}`);
                }
            } else {
                // Redirige para el enlace "Inicio"
                window.location.href = href;
            }

            // Colapsa el menú en la versión móvil después de cualquier clic
            if (window.innerWidth <= 768) {
                mobileMenu.classList.remove('open');
                headerElement.classList.remove('nav-active');
            }
        });
    });

    // Ajusta la posición inicial si se carga con un hash
    if (hash) {
        setTimeout(() => {
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                const headerOffset = 150; // Ajusta este valor según la altura de tu encabezado
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 0); // Se ejecuta después de que el navegador haya manejado la posición inicial
    }

    // Cargar las imágenes de los carruseles
    loadImages('carousel-container-menedez', 'menendez', 42);
    loadImages('carousel-container-valles', 'valles', 51);

    // Mostrar la primera imagen del carrusel por defecto
    showSlides(0, 'carousel-container-menedez');
    showSlides(0, 'carousel-container-valles');
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

    // Cerrar el menú móvil si se ha seleccionado una casa
    const mobileMenu = document.getElementById('mobile-menu');
    const headerElement = document.querySelector('header');
    if (window.innerWidth <= 768) {
        mobileMenu.classList.remove('open');
        headerElement.classList.remove('nav-active');
    }
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith('menendez')) {
        showCasa('menendez');
    } else if (hash.startsWith('valles')) {
        showCasa('valles');
    } else {
        // Mostrar por defecto la sección 'menendez' si el hash no es válido
        showCasa('menendez');
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
            <li><a href="#menendez"><i class="fas fa-home"></i> Casa</a></li>
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
            <li><a href="#valles"><i class="fas fa-home"></i> Casa</a></li>
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
        headerTitle.textContent = 'Casa de aldea Menéndez';
    } else if (casa === 'valles') {
        headerTitle.textContent = 'Casa de aldea Valles';
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

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.querySelector('.video-container video');

    // Verificar si el video está en pantalla y luego intentar reproducirlo
    if (videoElement) {
        videoElement.muted = true;
        videoElement.play().catch(error => {
            console.log('El video no pudo reproducirse automáticamente:', error);
        });

        // Asegura que se intente reproducir el video de nuevo si se hace scroll
        window.addEventListener('scroll', function() {
            if (videoElement.paused) {
                videoElement.play().catch(error => {
                    console.log('El video no pudo reproducirse al hacer scroll:', error);
                });
            }
        });
    }
});
