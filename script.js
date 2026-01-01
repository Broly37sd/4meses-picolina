// CONFIGURACIÓN PERSONALIZABLE
const config = {
    // CAMBIA ESTOS DATOS POR LOS TUYOS:
    tuNombre: "Nelson",
    suNombre: "Picolina",
    fechaInicio: "10/9/2025", // Ej: "15 de marzo de 2024"
    mensajeWhatsapp: "¡Hola amor! ¿Salimos a celebrar nuestros 4 meses? Te amo 💕",
    
    // FECHA REAL DE INICIO (para el contador automático)
    // Formato: 'YYYY-MM-DD'
    // ¡IMPORTANTE! Cambia esto por tu fecha REAL de inicio:
    fechaInicioReal: '2025-10-09', // FORMATO: AÑO-MES-DÍA
    // Si empezaron el 9 de octubre 2024: '2024-10-09'
    // Si empezaron el 10 de septiembre 2024: '2024-09-10'
};

// ====================
// 1. CORAZONES FLOTANTES
// ====================
function crearCorazones() {
    const corazonesContainer = document.getElementById('corazones');
    const colores = ['#ff6b8b', '#ff2e63', '#ff8fab', '#ffb3c6'];
    
    for (let i = 0; i < 40; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.innerHTML = '❤️';
        
        // Posición aleatoria
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.fontSize = (Math.random() * 20 + 15) + 'px';
        corazon.style.color = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.animationDuration = (Math.random() * 3 + 4) + 's';
        corazon.style.animationDelay = Math.random() * 5 + 's';
        
        corazonesContainer.appendChild(corazon);
    }
}

// ====================
// 2. LISTA COMPLETA DE 120 RAZONES
// ====================
const todasLasRazones = [
    "Por tu sonrisa que ilumina mis días",
    "Por cómo me haces reír sin esfuerzo",
    "Por tu forma de ver la vida con optimismo",
    "Por los pequeños detalles que no pasan desapercibidos",
    "Por cómo me entiendes sin necesidad de palabras",
    "Por tu calidez y ternura al abrazarme",
    "Por tu fuerza y determinación ante los retos",
    "Por cómo me inspiras a ser mejor cada día",
    "Por nuestras conversaciones profundas y divertidas",
    "Por los silencios cómodos que compartimos",
    "Por tu mirada sincera que me hace sentir especial",
    "Por tu manera única de cuidarme sin pedirlo",
    "Por lo auténtica y genuina que eres",
    "Por nuestra conexión que va más allá de lo físico",
    "Por los sueños y proyectos que compartimos",
    "Por cómo celebras mis logros como si fueran tuyos",
    "Por tu paciencia cuando tengo días difíciles",
    "Por tu risa contagiosa que llena la habitación",
    "Por cómo me haces sentir en casa donde sea que estemos",
    "Por tu inteligencia y curiosidad por aprender",
    "Por la pasión que pones en todo lo que haces",
    "Por cómo me haces sentir amado todos los días",
    "Por tu apoyo incondicional en mis decisiones",
    "Por cómo transformas los días grises en coloridos",
    "Por tu capacidad de ver lo bueno en todo y todos",
    "Por cómo me haces sentir el hombre más afortunado",
    "Por tu honestidad y transparencia en nuestra relación",
    "Por la magia que siento cada vez que te veo",
    "Por cómo has cambiado mi vida para mejor",
    "Porque contigo, todo tiene más sentido",
    "Por la forma en que me miras cuando crees que no me doy cuenta",
    "Por cómo tu voz se convierte en mi canción favorita",
    "Por tu manera de hacer que lo ordinario se sienta extraordinario",
    "Por cada 'buenos días' que comienza mi día con alegría",
    "Por cómo me haces olvidar todos mis problemas con solo un abrazo",
    "Por tu capacidad de perdonar y seguir adelante con el corazón abierto",
    "Por la manera en que defiendes lo que crees con pasión",
    "Por cómo respetas mis espacios y mis tiempos",
    "Por cada gesto espontáneo que demuestra tu cariño",
    "Por tu sensibilidad ante las necesidades de los demás",
    "Por cómo valoras las cosas simples de la vida",
    "Por tu constancia en demostrarme tu amor día tras día",
    "Por la seguridad que siento cuando estoy a tu lado",
    "Por cómo haces que cada despedida sea con la esperanza de un próximo encuentro",
    "Por tu habilidad para calmarme cuando estoy ansioso",
    "Por cada vez que me sorprendes con algo inesperado",
    "Por tu dedicación a las personas que amas",
    "Por cómo luchas por lo que quieres sin rendirte",
    "Por tu forma de escuchar con atención total",
    "Por cada 'te quiero' dicho en el momento perfecto",
    "Por cómo recuerdas los detalles que para otros pasarían desapercibidos",
    "Por tu valentía para enfrentar tus miedos",
    "Por la manera en que celebras mis peculiaridades",
    "Por cada proyecto que planeamos juntos",
    "Por cómo me haces sentir que puedo lograr cualquier cosa",
    "Por tu humildad a pesar de todas tus virtudes",
    "Por la emoción en tus ojos cuando me cuentas algo que te apasiona",
    "Por cómo respetas mis opiniones aunque sean diferentes",
    "Por cada sacrificio que haces por nuestra relación",
    "Por tu habilidad para encontrar soluciones donde otros solo ven problemas",
    "Por la forma en que cuidas de mí cuando estoy enfermo",
    "Por cómo me haces redescubrir el mundo a través de tus ojos",
    "Por cada promesa que cumples sin falta",
    "Por tu forma de bailar como si nadie te estuviera viendo",
    "Por cómo me haces sentir que soy tu prioridad",
    "Por tu generosidad sin esperar nada a cambio",
    "Por cada lección de vida que aprendo a tu lado",
    "Por cómo haces que el tiempo pase volando cuando estamos juntos",
    "Por tu estilo único que refleja tu personalidad",
    "Por la forma en que me presentas con orgullo a los demás",
    "Por cada vez que me das tu opinión honesta aunque sea difícil",
    "Por cómo mantienes la calma en situaciones estresantes",
    "Por tu amor por aprender cosas nuevas constantemente",
    "Por la manera en que celebras nuestras pequeñas victorias",
    "Por cada tradición que hemos creado juntos",
    "Por cómo me motivas a perseguir mis sueños",
    "Por tu capacidad de adaptarte a diferentes situaciones",
    "Por la confianza que depositas en mí sin dudar",
    "Por cada mañana que despierto pensando en ti",
    "Por cómo me haces sentir que pertenezco",
    "Por tu forma de cocinar con amor (aunque sea algo simple)",
    "Por cada caminata donde nuestras conversaciones fluyen naturalmente",
    "Por cómo me enseñas a ver la vida desde otra perspectiva",
    "Por tu compromiso con hacer del mundo un lugar mejor",
    "Por la forma en que manejas los conflictos con madurez",
    "Por cada recuerdo que atesoramos en nuestro corazón",
    "Por cómo respetas mi historia y mi pasado",
    "Por tu habilidad para hacer amigos donde quiera que vayas",
    "Por la manera en que planeas nuestro futuro con ilusión",
    "Por cada inside joke que solo nosotros entendemos",
    "Por cómo me haces reír hasta llorar",
    "Por tu forma de cantar aunque no seas profesional",
    "Por cada puesta de sol que hemos contemplado juntos",
    "Por cómo me haces sentir que puedo ser completamente yo mismo",
    "Por tu capacidad de sorprenderme incluso después de tanto tiempo",
    "Por la forma en que llenas mis días de significado",
    "Por cada noche estrellada que hemos compartido",
    "Por cómo me haces sentir que el amor de verdad existe",
    "Por tu manera de celebrar las pequeñas cosas",
    "Por cada proyecto que empezamos juntos con entusiasmo",
    "Por cómo me inspiras a ser más creativo",
    "Por tu forma de cuidar los animales con cariño",
    "Por cada viaje que hemos emprendido juntos",
    "Por cómo haces que cada día sea una aventura",
    "Por tu habilidad para encontrar la belleza en lo imperfecto",
    "Por la manera en que enfrentas los desafíos con gracia",
    "Por cada momento en que tu presencia me da paz",
    "Por cómo me haces querer ser un hombre mejor",
    "Por tu forma de soñar despierta conmigo",
    "Por cada vez que me das un consejo sabio",
    "Por cómo haces que mi corazón lata más fuerte",
    "Por tu manera de recordar fechas importantes",
    "Por cada canción que nos hace pensar el uno en el otro",
    "Por cómo transformas mis debilidades en fortalezas",
    "Por tu forma de verme como tu héroe personal",
    "Por cada risa que compartimos sin motivo aparente",
    "Por cómo haces que el amor sea fácil y natural",
    "Por tu manera de construir un hogar donde quiera que estemos",
    "Por cada día que elijo amarte más que ayer",
    "Por cómo has convertido mi vida en un cuento de hadas",
    "Porque eres mi mejor amiga, mi confidente y mi amor",
    "Por cada latido de mi corazón que lleva tu nombre",
    "Porque contigo, el 'para siempre' parece demasiado poco"
];

// ====================
// 3. GENERAR RAZONES DINÁMICAS (según días)
// ====================
function generarRazonesDinamicas(diasTotales) {
    const razonesLista = document.getElementById('razonesLista');
    
    let razonesHTML = '';
    
    // Calcular cuántas razones mostrar
    const razonesAMostrar = Math.min(diasTotales, todasLasRazones.length);
    
    // Si necesitamos más razones de las que tenemos
    if (diasTotales > todasLasRazones.length) {
        // Repetir razones con prefijo de ciclo
        for (let i = 0; i < diasTotales; i++) {
            const razonIndex = i % todasLasRazones.length;
            const ciclo = Math.floor(i / todasLasRazones.length) + 1;
            const prefijo = ciclo > 1 ? ` (día ${i + 1})` : '';
            
            razonesHTML += `
                <div class="razon">
                    <strong>Razón #${i + 1}:</strong> ${todasLasRazones[razonIndex]}${prefijo}
                </div>
            `;
        }
    } else {
        // Si tenemos suficientes razones únicas
        for (let i = 0; i < razonesAMostrar; i++) {
            razonesHTML += `
                <div class="razon">
                    <strong>Razón #${i + 1}:</strong> ${todasLasRazones[i]}
                </div>
            `;
        }
    }
    
    razonesLista.innerHTML = razonesHTML;
    
    // Mostrar mensaje si tenemos más días que razones
    if (diasTotales > todasLasRazones.length) {
        const mensajeExtra = document.createElement('div');
        mensajeExtra.className = 'razon';
        mensajeExtra.style.textAlign = 'center';
        mensajeExtra.style.marginTop = '30px';
        mensajeExtra.style.padding = '20px';
        mensajeExtra.style.background = 'linear-gradient(135deg, #fff5f7, #ffe8ec)';
        mensajeExtra.style.borderRadius = '15px';
        mensajeExtra.style.border = '2px dashed #ff6b8b';
        mensajeExtra.innerHTML = `
            <strong>✨ Y ${diasTotales - todasLasRazones.length} razones más...</strong><br>
            <em>Que no caben aquí porque necesitaría otra página completa para describir todo lo que siento por ti 💖</em>
        `;
        razonesLista.appendChild(mensajeExtra);
    }
}

// ====================
// 4. CONTADOR DE DÍAS Y RAZONES
// ====================
function actualizarContador() {
    // Primero, corregir el formato de fecha si es necesario
    let fechaInicio;
    
    // Intentar diferentes formatos de fecha
    try {
        if (config.fechaInicioReal.includes('/')) {
            // Formato DD/MM/YYYY o MM/DD/YYYY
            const partes = config.fechaInicioReal.split('/');
            if (partes[0].length === 4) {
                // Formato YYYY/MM/DD
                fechaInicio = new Date(config.fechaInicioReal.replace(/\//g, '-'));
            } else {
                // Formato DD/MM/YYYY - asumimos MM/DD/YYYY para EE.UU.
                fechaInicio = new Date(partes[2], partes[0] - 1, partes[1]);
            }
        } else {
            // Formato YYYY-MM-DD
            fechaInicio = new Date(config.fechaInicioReal);
        }
    } catch (e) {
        console.error("Error en fecha:", e);
        // Usar fecha por defecto si hay error
        fechaInicio = new Date('2024-10-09');
    }
    
    const hoy = new Date();
    
    // Asegurarse de que la fecha sea válida
    if (isNaN(fechaInicio.getTime())) {
        console.error("Fecha inválida:", config.fechaInicioReal);
        fechaInicio = new Date('2024-10-09');
    }
    
    // Calcular diferencia en días
    const diferenciaTiempo = hoy.getTime() - fechaInicio.getTime();
    const diasJuntos = Math.max(1, Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)));
    
    console.log("Fecha inicio:", fechaInicio);
    console.log("Hoy:", hoy);
    console.log("Días juntos:", diasJuntos);
    
    // Actualizar en la página
    const contadorElement = document.querySelector('.numero-dias');
    const subtituloElement = document.querySelector('.subtitulo');
    
    // Actualizar número
    contadorElement.textContent = diasJuntos;
    
    // Actualizar subtítulo
    subtituloElement.innerHTML = `
        ${diasJuntos} días descubriendo que el amor sí existe,<br>
        y tiene tu nombre: <span style="color: #ff2e63;">${config.suNombre}</span>
    `;
    
    // Actualizar título de sección de razones
    const tituloRazones = document.querySelector('#razones .titulo-seccion');
    if (tituloRazones) {
        tituloRazones.innerHTML = `${diasJuntos} Razones (y contando) por las que te amo`;
    }
    
    // Generar las razones según los días
    generarRazonesDinamicas(diasJuntos);
    
    return diasJuntos;
}

// ====================
// 5. TEST INTERACTIVO
// ====================
function configurarTest() {
    const opciones = document.querySelectorAll('.opcion');
    
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function() {
            const esCorrecta = this.getAttribute('data-correct') === 'true';
            const resultado = document.getElementById('resultado');
            
            // Mostrar resultado
            resultado.style.display = 'block';
            
            // Cambiar colores según respuesta
            opciones.forEach(o => {
                o.style.background = '#f8f9fa';
                o.style.transform = 'scale(1)';
            });
            
            if (esCorrecta) {
                this.style.background = '#d4edda';
                this.style.transform = 'scale(1.05)';
                resultado.innerHTML = '¡Exacto! Y hay muchos más que solo nosotros entendemos 💖';
                resultado.style.color = '#28a745';
            } else {
                this.style.background = '#f8d7da';
                resultado.innerHTML = '¡Casi! Pero hay uno que nos hace reír más 😉';
                resultado.style.color = '#dc3545';
            }
            
            // Deshabilitar más clics
            opciones.forEach(o => {
                o.style.pointerEvents = 'none';
            });
        });
    });
}

// ====================
// 6. CÁPSULA DEL TIEMPO
// ====================
function guardarCapsula() {
    const mensaje = document.getElementById('mensajeCapsula').value.trim();
    const confirmacion = document.getElementById('confirmacion');
    
    if (mensaje) {
        // Guardar en localStorage
        localStorage.setItem('capsula4meses', mensaje);
        
        // Crear objeto de recordatorio
        const recordatorio = {
            mensaje: mensaje,
            fecha: new Date().toLocaleDateString('es-ES'),
            fechaRevision: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')
        };
        localStorage.setItem('recordatorioCapsula', JSON.stringify(recordatorio));
        
        // Mostrar confirmación
        confirmacion.style.display = 'block';
        confirmacion.innerHTML = `💌 Mensaje guardado el ${recordatorio.fecha}. Lo revisaremos el ${recordatorio.fechaRevision}`;
        
        // Efecto visual
        confirmacion.style.animation = 'aparecer 0.5s ease-out';
        
        // Ocultar después de 5 segundos
        setTimeout(() => {
            confirmacion.style.opacity = '0.7';
        }, 5000);
    } else {
        alert('¡Escribe algo bonito para nuestro futuro! ✨');
        document.getElementById('mensajeCapsula').focus();
    }
}

// ====================
// 7. MENSAJE WHATSAPP
// ====================
function enviarMensaje() {
    const mensajeCodificado = encodeURIComponent(config.mensajeWhatsapp);
    window.open(`https://wa.me/?text=${mensajeCodificado}`, '_blank');
}

// ====================
// 8. SCROLL SUAVE
// ====================
function configurarScrollSuave() {
    document.getElementById('btnDescubrir').addEventListener('click', () => {
        document.getElementById('lineaTiempo').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// ====================
// 9. EFECTO ESCRITURA TÍTULO
// ====================
function efectoEscrituraTitulo() {
    const titulo = document.querySelector('.titulo-principal');
    if (!titulo) return;
    
    const textoOriginal = titulo.textContent;
    let i = 0;
    
    // Limpiar título inicialmente
    titulo.textContent = '';
    
    function escribir() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escribir, 100);
        }
    }
    
    // Iniciar después de 500ms
    setTimeout(escribir, 500);
}

// ====================
// 10. CARGAR CÁPSULA GUARDADA
// ====================
function cargarCapsulaGuardada() {
    const capsulaGuardada = localStorage.getItem('capsula4meses');
    if (capsulaGuardada) {
        document.getElementById('mensajeCapsula').value = capsulaGuardada;
    }
}

// ====================
// 11. PERSONALIZAR FOOTER
// ====================
function personalizarFooter() {
    const footerTexto = document.querySelector('footer p:nth-child(3)');
    if (footerTexto) {
        footerTexto.innerHTML = 
            `<strong>${config.tuNombre}</strong> ama a <strong>${config.suNombre}</strong> desde <strong>${config.fechaInicio}</strong>`;
    }
}

// ====================
// 12. INICIALIZAR TODO
// ====================
function inicializar() {
    console.log('💖 Inicializando página de amor...');
    
    // 1. Crear corazones flotantes
    crearCorazones();
    
    // 2. Configurar test interactivo
    configurarTest();
    
    // 3. Actualizar contador de días (ESTA FUNCIÓN AHORA GENERA LAS RAZONES)
    actualizarContador();
    
    // 4. Configurar scroll suave
    configurarScrollSuave();
    
    // 5. Efecto escritura título
    efectoEscrituraTitulo();
    
    // 6. Cargar cápsula si existe
    cargarCapsulaGuardada();
    
    // 7. Personalizar footer
    personalizarFooter();
    
    console.log('✅ ¡Página lista! El amor está en el aire 💘');
    
    // Mensaje de bienvenida en consola
    console.log(`
    ╔══════════════════════════════════╗
    ║   ${diasJuntos || 'X'} DÍAS DE AMOR Y FELICIDAD   ║
    ║   Esta página fue hecha con      ║
    ║   todo el amor para ${config.suNombre.padEnd(15)}║
    ╚══════════════════════════════════╝
    `);
}

// Variable global para días juntos
let diasJuntos = 0;

// ====================
// EJECUTAR CUANDO SE CARGA LA PÁGINA
// ====================
document.addEventListener('DOMContentLoaded', function() {
    // Ejecutar inicialización
    inicializar();
    
    // Guardar días juntos en variable global
    diasJuntos = actualizarContador();
});

// ====================
// FUNCIONES GLOBALES (para botones HTML)
// ====================
// Hacer las funciones accesibles desde HTML
window.guardarCapsula = guardarCapsula;
window.enviarMensaje = enviarMensaje;
window.actualizarContador = actualizarContador;