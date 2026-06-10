---
title: "Visión por Computador aplicada a la detección de baches en carreteras"
description: "Cómo construí FixMyRoad, un sistema de deep learning capaz de detectar y clasificar el deterioro del asfalto en tiempo real usando redes neuronales convolucionales."
pubDate: 2024-11-15
category: "Computer Vision"
tags: ["Python", "OpenCV", "PyTorch", "Deep Learning", "Visión por Computador"]
draft: false
---

## Introducción

El mantenimiento de las carreteras es un desafío constante para las administraciones públicas. Los baches y el deterioro del asfalto no solo generan incomodidad a los conductores, sino que también pueden causar accidentes y daños en los vehículos. **FixMyRoad** nace como respuesta a esta problemática, utilizando técnicas de visión por computador y deep learning para automatizar la detección de baches.

## El problema

Tradicionalmente, la inspección de carreteras se realiza de forma visual por personal especializado, un proceso que consume tiempo y recursos. La idea detrás de FixMyRoad es permitir que cualquier conductor pueda reportar incidencias simplemente usando la cámara de su teléfono.

## Arquitectura del sistema

El sistema se compone de tres módulos principales:

1. **Módulo de captura**: Procesa imágenes y vídeo en tiempo real desde la cámara del dispositivo.
2. **Módulo de detección**: Utiliza una CNN (Red Neuronal Convolucional) entrenada con un dataset de más de 10,000 imágenes etiquetadas de carreteras con y sin baches.
3. **Módulo de clasificación**: Clasifica el estado del asfalto en categorías (buen estado, deterioro leve, bache moderado, bache profundo).

## Implementación con PyTorch y OpenCV

Para la implementación, elegí **PyTorch** por su flexibilidad y facilidad para prototipar. Usé una arquitectura basada en **YOLOv5** modificada para la detección de objetos específicos (baches), y **OpenCV** para el preprocesamiento de imágenes.

```python
import cv2
import torch
import numpy as np

# Cargar modelo pre-entrenado
model = torch.hub.load('ultralytics/yolov5', 'custom',
                       path='models/fixmyroad.pt')

def detect_pothole(frame):
    results = model(frame)
    detections = results.xyxy[0].cpu().numpy()
    return detections
```

## Resultados

El modelo alcanzó una precisión del **89%** en la detección de baches con una latencia de menos de 30ms por frame en dispositivos móviles de gama media, lo que lo hace viable para su uso en tiempo real.

## Próximos pasos

Actualmente estoy trabajando en:
- Integración con mapas para generar rutas alternativas.
- Sistema de puntuación para priorizar reparaciones.
- Versión embebida para dashcams.

FixMyRoad es un proyecto open source, disponible en [GitHub](https://github.com/sebastianmalbaceda/fixmyroad).
