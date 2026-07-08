# Customer Churn Prediction

## Objetivo
Desarrollar un modelo que ayude a identificar los clientes con mayor probabilidad de abandonar un servicio, para que la empresa pueda aplicar estrategias de retención.

## Problema
El churn afecta la rentabilidad y la estabilidad del negocio. Detectar a los clientes en riesgo de forma temprana permite intervenir antes de que cancelen.

## Dataset
Se recomienda usar el dataset de Kaggle "Telco Customer Churn". Guardarlo en la carpeta [data/raw](data/raw).

### Descarga automática con KaggleHub
Puedes descargarlo directamente con este snippet:

```python
import kagglehub

path = kagglehub.dataset_download("blastchar/telco-customer-churn")
print("Path to dataset files:", path)
```

También puedes ejecutar el script incluido:

```bash
python src/download_dataset.py
```

## Estructura del proyecto
- data/raw/: datos originales
- data/processed/: datos limpios y preparados
- notebooks/: notebooks de exploración y modelado
- src/: scripts reutilizables para preprocessing y entrenamiento
- models/: modelos entrenados
- reports/: informes y métricas
- images/: visualizaciones
- app/: aplicación o prototipo de despliegue

## Configuración
1. Crear un entorno virtual:
   - python -m venv .venv
2. Activarlo:
   - .venv\Scripts\activate
3. Instalar dependencias:
   - pip install -r requirements.txt
4. Colocar el archivo CSV del dataset en data/raw/.

## Próximos pasos
- Exploración inicial del dataset
- Limpieza y transformación de variables
- Análisis exploratorio de datos
- Ingeniería de variables
- Entrenamiento y evaluación de modelos
- Interpretación de resultados y dashboard
