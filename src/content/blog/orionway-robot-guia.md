---
title: "Construyendo un robot guía para personas con discapacidad visual"
description: "El desarrollo de OrionWay, un robot asistencial que integra visión por computador, sensores y algoritmos de navegación para guiar a personas con discapacidad visual."
pubDate: 2024-07-10
category: "Robótica"
tags: ["Python", "Robotics", "Computer Vision", "OpenCV", "IoT"]
draft: false
---

## La motivación

Según la Organización Mundial de la Salud, más de 2,200 millones de personas tienen algún tipo de discapacidad visual. Los bastones tradicionales y los perros guía son herramientas efectivas, pero tienen limitaciones. **OrionWay** busca complementar estas soluciones con tecnología robótica asequible.

## Diseño del sistema

OrionWay es un robot móvil con las siguientes capacidades:

1. **Navegación autónoma**: Utiliza SLAM (Simultaneous Localization and Mapping) para mapear entornos.
2. **Detección de obstáculos**: Sensores ultrasónicos y cámara estéreo para detectar objetos a diferentes alturas.
3. **Interfaz con el usuario**: Retroalimentación háptica y por voz para guiar al usuario.

## Componentes hardware

- **Microcontrolador**: Raspberry Pi 4 para el procesamiento central.
- **Sensores**: 
  - Cámara RGB-D (Intel RealSense D435)
  - Sensores ultrasónicos HC-SR04
  - IMU (MPU6050) para estabilización
- **Actuadores**: Servomotores para dirección y motores DC para tracción.
- **Batería**: LiPo 12V con autonomía de 4 horas.

## Software

El software se desarrolló íntegramente en Python, utilizando:

```python
import cv2
import numpy as np
from sensor_msgs.msg import Image

class ObstacleDetector:
    def __init__(self):
        self.depth_threshold = 1.5  # metros

    def process_frame(self, depth_frame):
        # Convertir a matriz numpy
        depth_image = np.asanyarray(depth_frame.get_data())

        # Detectar obstáculos cercanos
        obstacles = np.where(depth_image < self.depth_threshold)

        return len(obstacles[0]) > 0
```

## Desafíos y soluciones

### Desafío 1: Procesamiento en tiempo real
El mayor desafío fue lograr que el robot procesara la información visual y respondiera en tiempo real. La solución fue implementar un pipeline de procesamiento multihilo.

### Desafío 2: Navegación en exteriores
Los sensores ultrasónicos tienen problemas con superficies irregulares. Combinamos la lectura ultrasónica con la cámara de profundidad para mejorar la precisión.

## Estado actual

OrionWay se encuentra actualmente en fase de prototipado avanzado. He realizado pruebas en entornos controlados con resultados prometedores. El próximo objetivo es realizar pruebas en entornos reales en colaboración con la ONCE.

Puedes seguir el progreso del proyecto en [GitHub](https://github.com/sebastianmalbaceda/orionway).
