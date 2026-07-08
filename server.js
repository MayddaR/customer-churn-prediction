const express = require('express');
const app = express();
const port = 3000;

// Configuración para leer archivos EJS
app.set('view engine', 'ejs');

// DATOS DE TU HOJA DE VIDA
const datosCV = {
    nombre: "MAYDDA GINNETH RODRIGUEZ FERNANDEZ",
    titulo: "Economista | Desarrolladora Full Stack | Analista de datos",
    ubicacion: "Bogotá, Colombia",
    telefono: "3204030507",
    email: "mayddarodriguez@gmail.com",
    linkedin: "www.linkedin.com/in/maydda-rodriguez",
    
    perfil: "Profesional integral con formación en economía y desarrollo Full Stack, con experiencia en análisis de datos, metodologías agiles y gestión de proyectos tecnológicos. Capacidad para integrar la visión analítica, estratégica y técnica en entornos corporativos, enfocada en la mejora continua, la eficiencia e integración.",
    
    ventajas: [
        "Liderazgo y trabajo en equipo", "Experiencia en Economía", "Desarrollo Full Stack", 
        "Análisis de datos", "Metodologías agiles", "Pensamiento analítico", "Comunicación", 
        "Adaptabilidad", "Aprendizaje continuo", "Microsoft Office", "Java", "Oracle PL/SQL", 
        "HTML/CSS/JSF", "SQL Developer", "GitHub", "Power BI", "MySQL", "JavaScript", 
        "Python", "Herramientas de IA", "Inglés Nivel B1"
    ],

    experiencia: [
        {
            cargo: "Programadora analista de sistemas junior",
            empresa: "Grupo Logístico de Carga Aviatur",
            ubicacion: "Bogotá, Colombia",
            fecha: "agosto 2023 – Actualidad",
            responsabilidades: [
                "Desarrollo Full Stack, utilizando Java, JSF, PrimeFaces, Oracle PL/SQL y SQL Developer.",
                "Diseño de modelos entidad – relación.",
                "Creaciones completas de páginas web.",
                "Generación de reportes desde base de datos.",
                "Relación pruebas funcionales y documentación técnica.",
                "Responsable de la recolección de información.",
                "Creación de proyectos y socialización de desarrollos.",
                "Soporte técnico y atención a requerimientos."
            ]
        },
        {
            cargo: "Coordinador de oficina en cuenta comercial",
            empresa: "Grupo Logístico de Carga Aviatur",
            ubicacion: "Bogotá, Colombia",
            fecha: "enero 2022 – agosto 2023",
            responsabilidades: [
                "Coordinar el desarrollo, sistematización, reorganización y control de procesos.",
                "Diseñar herramientas automatizadas con Excel Avanzado, macros en Visual Basic y Google Forms.",
                "Elaborar modelos entidad–relación y mapas de procesos.",
                "Liderar comunicación entre cliente y equipo de desarrollo.",
                "Analizar necesidades operativas y proponer estrategias de automatización."
            ]
        },
        {
            cargo: "Coordinador de conocimiento cliente",
            empresa: "Grupo Logístico de Carga Aviatur",
            ubicacion: "Bogotá, Colombia",
            fecha: "octubre 2019 – enero 2022",
            responsabilidades: [
                "Gestión de procesos de conocimiento de asociados bajo normativa LA/FT.",
                "Análisis documental y aplicación de normativa aduanera.",
                "Consultas en listas restrictivas y gestión de señales de alerta.",
                "Apoyo en implementación de requisitos de seguridad para certificación OEA."
            ]
        }
    ],

    education: [
        {
            titulo: "Economista",
            institucion: "Universidad Católica de Colombia",
            fecha: "diciembre 2018"
        },
        {
            titulo: "Profesional Developer",
            institucion: "Academia Digital House (Virtual)",
            detalle: "(1.568 Horas)",
            fecha: "septiembre 2023"
        },
        {
            titulo: "Certificado profesional de IBM Ingeniería de IA",
            institucion: "Coursera–IBM / Secretaría de Desarrollo Económico de Bogotá",
            detalle: "(Python, PyTorch y TensorFlow)",
            fecha: "noviembre 2025"
        }
    ],

    certificaciones: [
        "Metodologías Agiles – Insignia Digital IBM",
        "Curso de Autenticidad de Documentos - BASC",
        "Big Data Sin Misterios – BID Mediante edX"
    ]
};

// RUTAS
// 1. Ruta para mostrar la página web
app.get('/', (req, res) => {
    res.render('plantilla', datosCV);
});

// 2. Ruta API (opcional, para que otros sistemas consuman tus datos)
app.get('/api/cv', (req, res) => {
    res.json(datosCV);
});

// INICIAR SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});