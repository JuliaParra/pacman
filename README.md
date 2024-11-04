# Proyecto Pacman

Este proyecto recrea una versión simplificada del clásico juego de **Pacman** utilizando solo HTML, CSS y JavaScript. El objetivo es hacer que Pacman "coma" fantasmas y recolecte cerezas, aumentando el puntaje hasta que se alcance el límite de **Game Over**. 🕹️

## Descripción del Proyecto

El juego comienza con Pacman y un fantasma en escena. Cada vez que el usuario hace clic en el fantasma, Pacman se mueve hacia él, "come" al fantasma y acumula puntos. Los fantasmas reaparecen cada 2 segundos y, cada tres fantasmas comidos, aparece una cereza que otorga puntos extra. Al alcanzar los **5000 puntos**, el juego termina con un mensaje de **Game Over**.

### Características

- **Fondos y Sonido**: Al abrir la aplicación, se reproduce automáticamente un sonido clásico de Pacman y se muestra un fondo característico.
- **Puntuación Dinámica**: Los puntos se muestran en la esquina superior derecha. Cada fantasma comido otorga **100 puntos** y cada cereza **500 puntos**.
- **Condición de Victoria**: Al alcanzar los **5000 puntos**, se muestra un mensaje de **Game Over**.

## Requisitos Implementados

1. **Diseño Inicial**:
   - Imagen de Pacman y fantasma en el centro de la pantalla (100x100 px).
   - Fondos e iconos basados en la estética de Pacman.

2. **Interactividad**:
   - Cuando Pacman come un fantasma, este desaparece y Pacman toma su lugar.
   - Fantasmas reaparecen cada 2 segundos.
   - Aparece una cereza tras cada tres fantasmas comidos.
   
3. **Sistema de Puntos**:
   - Pacman gana **100 puntos** por cada fantasma comido.
   - Pacman gana **500 puntos** por cada cereza.
   - El juego termina con **Game Over** al alcanzar 5000 puntos.

## Herramientas Utilizadas

- **HTML**: Estructura del juego y elementos visuales.
- **CSS**: Estilos para la posición, tamaño y fondo del juego.
- **JavaScript**: Lógica de juego, control de puntuación y eventos de interactividad.

## Captura de Pantalla

![Pacman Game]("/assets/img/juego.png)
![Pacman Game]("/assets/img/pac-man-logo-png-transparent.png)



## Cómo Jugar

1. Abre `index.html` en tu navegador.
2. Disfruta viendo a Pacman comer fantasmas y cerezas.
3. Haz clic en el fantasma para que Pacman lo "coma" y sume puntos.
4. ¡Sigue jugando hasta alcanzar el **Game Over**!

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/pacman.git
