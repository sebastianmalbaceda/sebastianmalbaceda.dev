---
title: "Predicción del precio del oro con Machine Learning: Mi TFG"
description: "Mi Trabajo de Fin de Grado sobre la predicción del oro usando ~60 variables macroeconómicas, feature engineering riguroso y comparativa de modelos desde regresión lineal hasta Random Forest."
pubDate: 2025-06-01
category: "Machine Learning"
tags: ["Python", "Scikit-learn", "Time Series", "TFG", "Finance", "Data Science"]
draft: false
---

## El reto

El oro ha sido históricamente uno de los activos financieros más complejos de modelar. Su precio no depende de una sola variable, sino de una compleja red de factores macroeconómicos, geopolíticos y de mercado. Para mi **Trabajo de Fin de Grado** en Ingeniería Informática (UAB), me propuse construir un modelo predictivo robusto capaz de anticipar el precio del oro con precisión.

## Recopilación de datos

El primer desafío fue construir un dataset sólido. Recopilé aproximadamente **60 variables** de múltiples fuentes oficiales:

- **FRED (Federal Reserve Bank of St. Louis)**: Tipos de interés, curvas de rendimiento, índices de inflación, PIB.
- **Investing.com**: Precios históricos de commodities (plata, cobre, petróleo), índices bursátiles (S&P 500, NASDAQ).
- **CBOE**: Índice de volatilidad VIX.
- **OECD**: Indicadores económicos compuestos.

Cada variable fue documentada con su frecuencia, fuente y justificación económica en `docs/features_reference.md`.

## Pipeline de datos

Estructuré el proyecto en tres fases claras:

```python
# src/stage_1_exploration.py
# src/stage_2_feature_engineering.py
# src/stage_3_model_training.py
```

### Fase 1: Análisis exploratorio (EDA)
Análisis de correlaciones, distribuciones, estacionariedad y detección de outliers. Visualización de series temporales y matrices de correlación.

### Fase 2: Ingeniería de características
- Creación de lags y ventanas temporales.
- Transformaciones (diferenciación, normalización).
- Selección de features mediante correlación y importancia de variables.
- Manejo de datos faltantes y alineación temporal de series con diferentes frecuencias.

### Fase 3: Modelado y validación

| Modelo | R² | RMSE |
|--------|-----|------|
| Regresión Lineal | 0.72 | 142.3 |
| Ridge/Lasso | 0.74 | 138.1 |
| Random Forest | 0.89 | 89.7 |
| Gradient Boosting | 0.87 | 95.2 |
| XGBoost | 0.91 | 82.4 |

**XGBoost** fue el modelo ganador, alcanzando un R² de 0.91, demostrando que los modelos basados en árboles son particularmente efectivos para este tipo de datos tabulares con relaciones no lineales.

## Lecciones aprendidas

Este proyecto me enseñó:

1. **La importancia de la calidad del dato**: Pasar semanas limpiando y alineando datasets merece la pena.
2. **Feature engineering > Modelos complejos**: Un buen conjunto de features bien construidas supera a cualquier modelo sofisticado con datos pobres.
3. **Validación temporal**: No vale cualquier cross-validation; en series temporales hay que respetar el orden cronológico.
4. **Documentación rigurosa**: Cada decisión, cada variable y cada transformación debe quedar registrada.

El código y el dataset consolidado están disponibles en [GitHub](https://github.com/sebastianmalbaceda/gold-price-prediction).
