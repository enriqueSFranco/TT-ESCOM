# 🎓 Bolsa de Trabajo Inteligente para Estudiantes — ESCOM (IPN)

**Proyecto de Tesis - Escuela Superior de Cómputo (IPN)**  
Sistema web desarrollado como Proyecto Terminal para la **Escuela Superior de Cómputo (IPN)**.  
Su objetivo es conectar a estudiantes con oportunidades laborales adecuadas a su perfil mediante un sistema de recomendación inteligente.

### 👥 Integrantes del equipo
- Cruz Heras Joel Antonio**  
- Martínez González Iris Yonitzi**  
- Salinas Franco Carlos Enrique**

---

## 🚀 Características Principales (Features)

| Área | Característica | Descripción |
| :--- | :--- | :--- |
| **Autenticación** | 🔒 Registro de doble rol | Usuarios (Estudiantes) y Reclutadores (Empresas) con paneles dedicados. |
| **Reclutamiento** | 📝 Gestión de Vacantes | Publicación, edición y seguimiento de vacantes por parte de las empresas. |
| **Candidatos** | 👤 Perfil Profesional | Los estudiantes completan un perfil detallado que alimenta el motor de recomendación. |
| **Búsqueda** | 🔎 Filtros Avanzados | Herramientas de búsqueda por rango salarial, modalidad, tecnología, y más. |
| **El Core** | 🧠 Algoritmo Inteligente | Sistema de recomendación que calcula la afinidad entre perfil y vacante. |

---

## 🧠 Algoritmo de Recomendación: El Motor Inteligente

Esta sección detalla el corazón del proyecto: el motor que calcula la afinidad entre el perfil del estudiante y las vacantes.

### Criterios de *Matching*

El cálculo de *score* se basa en una ponderación de los siguientes factores:

* **Habilidades Técnicas (Hard Skills):** Coincidencia directa de *frameworks*, lenguajes y herramientas.
* **Habilidades Blandas (Soft Skills):** Compatibilidad en trabajo en equipo, liderazgo, comunicación, etc.
* **Experiencia:** Nivel de experiencia requerido vs. nivel declarado por el estudiante.
* **Condiciones:** Match en Modalidad (Remoto, Híbrido, Presencial) y Disponibilidad de Horario/Rango Salarial.

### 📊 Metodología de Ponderación

El motor utiliza una combinación de técnicas para refinar la recomendación:

1.  **Distancia Semántica:** Se aplica para medir la cercanía entre habilidades que no son idénticas, pero son análogas (ej. React vs. Vue.js).
2.  **Ponderación Personalizada:** Cada criterio tiene un peso que puede ajustarse para priorizar ciertos *skills* según el sector o el tipo de vacante.
3.  **Algoritmo de Scoring:** Un sistema de puntuación final que ordena las vacantes por mayor afinidad.

### 🖼️ Presentación del Algoritmo (Capturas de la Tesis)

A continuación, se adjuntan las capturas de la presentación que detallan el funcionamiento lógico y la arquitectura del algoritmo:


## 💻 Arquitectura y Tecnologías

### 🏗️ Diagrama de Arquitectura de Alto Nivel

El sistema sigue una arquitectura de Microservicios para separar el Frontend (React), el Backend (Django REST) y el Motor de Recomendación.

<img width="1437" alt="Screenshot 2025-11-11 at 2 37 52 p m" src="https://github.com/user-attachments/assets/faf2faac-5299-4174-9656-462f7add9122" />

---

## 🛠️ Tecnologías utilizadas

| Tecnología              | Rol                          |
|-------------------------|------------------------------|
| **React**               | Frontend (interfaz web)      |
| **Python**              | Lógica del backend           |
| **Django REST Framework** | API RESTful               |
| **PostgreSQL**          | Base de datos relacional     |
| **Docker** *(opcional)* | Contenerización del sistema  |

---

## 🧠 Sistema de Recomendación
El sistema analiza el perfil profesional del estudiante y calcula la afinidad con las vacantes registradas por las empresas.  
Algunos criterios utilizados:

- Coincidencia de skills técnicos  
- Match de habilidades blandas  
- Compatibilidad de horario  
- Experiencia requerida  
- Modalidad (remoto, híbrido, presencial)

El motor de recomendación puede emplear:
- Distancia semántica entre habilidades  
- Ponderación personalizada
- Algoritmos de scoring  

---

## 🚀 Instrucciones para contribuir

1. Asegúrate de ser **colaborador** del repositorio.
2. Crea una **rama nueva** basada en `develop`. Ejemplo:
   ```bash
   git checkout develop
   git checkout -b feature/nueva-funcionalidad
``

---

📸 Capturas de pantalla

### Lista de vacantes
<img width="480" alt="home-page" src="https://github.com/user-attachments/assets/619845ba-1deb-4722-aa3b-a9748df945a4" />

### Dashboard del reclutador
<img width="480" alt="dashboard-recruiter" src="https://github.com/user-attachments/assets/8429f884-166b-4132-ac1f-f918183c2a62" />

### Formulario para iniciar sesión
<img width="1235" height="631" alt="Bolsa de trabajo - Login" src="https://github.com/user-attachments/assets/139a551e-0c1a-4e91-bc32-7defdfb5dca8" />

### Perfil de un candidato
<img width="1038" height="531" alt="Bolsa de trabajo - Perfil de usuario" src="https://github.com/user-attachments/assets/40fb0c7a-b8f6-403d-a3ed-9c6c5b2e7a96" />

