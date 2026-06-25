// ============================================
// BLAINE COUNTY EMS - MANUAL OFICIAL
// JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("BCEMS Manual Loaded - We Serve To Survive");

    // ==========================================
    // ANIMACIÓN DE ENTRADA DEL LIBRO
    // ==========================================
    const book = document.querySelector('.book');
    if (book) {
        book.style.opacity = '0';
        book.style.transform = 'scale(0.95) translateY(20px)';
        book.style.transition = 'all 1s ease-out';

        setTimeout(() => {
            book.style.opacity = '1';
            book.style.transform = 'scale(1) translateY(0)';
        }, 200);
    }

    // ==========================================
    // ANIMACIÓN DE LOS CAPÍTULOS (stagger)
    // ==========================================
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach((chapter, index) => {
        chapter.style.opacity = '0';
        chapter.style.transform = 'translateX(-20px)';
        chapter.style.transition = `all 0.5s ease-out ${0.3 + (index * 0.1)}s`;

        setTimeout(() => {
            chapter.style.opacity = '1';
            chapter.style.transform = 'translateX(0)';
        }, 500);
    });

    // ==========================================
    // EFECTO PARALLAX SUAVE EN ELEMENTOS DE MESA
    // ==========================================
    const deskItems = document.querySelectorAll('.lantern, .morphine-bottle, .syringe, .radio, .bullet-shell, .badge, .sticky-note');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        deskItems.forEach((item, index) => {
            const depth = (index + 1) * 3;
            item.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
    });

    // ==========================================
    // EFECTO DE PÁGINA AL HACER SCROLL
    // ==========================================
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.addEventListener('scroll', () => {
            const scrollPercent = page.scrollTop / (page.scrollHeight - page.clientHeight);
            const shadowIntensity = 0.05 + (scrollPercent * 0.1);
            
            page.style.boxShadow = `inset 0 ${10 + scrollPercent * 20}px 30px rgba(0,0,0,${shadowIntensity})`;
        });
    });

    // ==========================================
    // INTERACCIÓN CON CAPÍTULOS
    // ==========================================
    chapters.forEach(chapter => {
        chapter.addEventListener('click', (e) => {
            e.preventDefault();
            
            const chapterName = chapter.querySelector('.chapter-name').textContent;
            
            // Efecto de "página girando" al hacer clic
            chapter.style.transform = 'scale(0.98)';
            chapter.style.transition = 'transform 0.1s';
            
            setTimeout(() => {
                chapter.style.transform = '';
                console.log(`Navegando a: ${chapterName}`);
                // Aquí iría la navegación real a la sección
                // window.location.href = chapter.getAttribute('href');
            }, 150);
        });
    });

    // ==========================================
    // ANIMACIÓN DEL SELLO
    // ==========================================
    const seal = document.querySelector('.seal');
    if (seal) {
        seal.addEventListener('mouseenter', () => {
            seal.style.transform = 'rotate(-5deg) scale(1.05)';
            seal.style.transition = 'transform 0.3s ease';
        });

        seal.addEventListener('mouseleave', () => {
            seal.style.transform = 'rotate(-5deg) scale(1)';
        });
    }

    // ==========================================
    // EFECTO DE LUZ DE LINTERNA (opcional - desktop)
    // ==========================================
    const lantern = document.querySelector('.lantern');
    if (lantern && window.innerWidth > 1200) {
        setInterval(() => {
            const glow = lantern.querySelector('.lantern-glow');
            const intensity = 0.1 + Math.random() * 0.1;
            glow.style.background = `radial-gradient(circle, rgba(255, 200, 100, ${intensity}), transparent 70%)`;
        }, 2000);
    }

    // ==========================================
    // DETECCIÓN DE TECLAS (accesibilidad)
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Cerrar cualquier modal o volver al inicio
            console.log('Escape presionado - Volviendo al inicio');
        }
    });

    // ==========================================
    // CONSOLE ART
    // ==========================================
    console.log('%c BCEMS ', 'background: #5f1010; color: #d4b896; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
    console.log('%c We Serve To Survive ', 'color: #8b7355; font-size: 14px; font-style: italic;');
});
