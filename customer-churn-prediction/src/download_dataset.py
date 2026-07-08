from pathlib import Path
import shutil

import kagglehub

PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = PROJECT_ROOT / "data" / "raw"


def download_telco_dataset(output_dir: str | Path | None = None) -> Path:
    """Download the Telco Customer Churn dataset and copy the CSV files into data/raw."""
    target_dir = Path(output_dir) if output_dir else RAW_DIR
    target_dir.mkdir(parents=True, exist_ok=True)

    print("Descargando dataset desde Kaggle...")
    dataset_path = kagglehub.dataset_download("blastchar/telco-customer-churn")
    downloaded_files = sorted(Path(dataset_path).glob("*.csv"))

    if not downloaded_files:
        raise FileNotFoundError(f"No se encontraron archivos CSV en: {dataset_path}")

    for csv_path in downloaded_files:
        destination = target_dir / csv_path.name
        shutil.copy2(csv_path, destination)
        print(f"Archivo guardado en: {destination}")

    return target_dir


if __name__ == "__main__":
    download_telco_dataset()
