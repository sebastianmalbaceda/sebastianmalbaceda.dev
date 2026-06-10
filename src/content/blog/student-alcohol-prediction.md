---
title: "Machine Learning para la predicción del consumo de alcohol en estudiantes"
description: "Análisis exploratorio y modelado predictivo utilizando técnicas de machine learning para identificar patrones de consumo de alcohol en estudiantes de secundaria."
pubDate: 2024-09-20
category: "Machine Learning"
tags: ["Python", "Scikit-learn", "Pandas", "ML", "Data Science"]
draft: false
---

## Contexto del proyecto

El consumo de alcohol entre adolescentes es una preocupación social importante. Este proyecto, realizado como parte de mi formación en Ingeniería Informática, busca aplicar técnicas de machine learning para identificar patrones y factores de riesgo asociados al consumo de alcohol en estudiantes.

## Dataset

Utilicé el dataset **Student Alcohol Consumption** disponible en Kaggle, que contiene datos de 1,044 estudiantes de secundaria de Portugal. Incluye variables como:

- Datos demográficos (edad, género, lugar de residencia)
- Contexto familiar (educación de los padres, ingresos familiares)
- Actividades extracurriculares
- Consumo de alcohol (variable objetivo)
- Calificaciones y absentismo escolar

## Análisis Exploratorio de Datos (EDA)

El primer paso fue realizar un análisis exploratorio exhaustivo utilizando **Pandas** y **Matplotlib/Seaborn** para visualizar las distribuciones y correlaciones.

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('student_data.csv')
correlation_matrix = df.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
```

Algunos hallazgos interesantes:

- Existe una correlación significativa entre el consumo de alcohol y el absentismo escolar.
- Los estudiantes con actividades extracurriculares tienden a consumir menos alcohol.
- El consumo es mayor en estudiantes cuyos padres tienen un nivel educativo más alto.

## Modelado

Probé varios algoritmos de clasificación:

| Modelo | Precisión | F1-Score |
|--------|-----------|----------|
| Random Forest | 0.82 | 0.81 |
| SVM | 0.79 | 0.78 |
| KNN | 0.75 | 0.74 |
| Logistic Regression | 0.77 | 0.76 |

**Random Forest** fue el modelo con mejor rendimiento, alcanzando un 82% de precisión tras realizar optimización de hiperparámetros con GridSearchCV.

## Lecciones aprendidas

Este proyecto me permitió profundizar en:

- Técnicas de preprocesamiento y limpieza de datos.
- Feature engineering para variables categóricas.
- Interpretación de métricas de clasificación.
- La importancia de evitar el sobreajuste con validación cruzada.

El código completo del proyecto está disponible en [GitHub](https://github.com/sebastianmalbaceda/CasKaggleStudentAlcoholConsumption).
