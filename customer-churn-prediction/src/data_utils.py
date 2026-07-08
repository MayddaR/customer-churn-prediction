from pathlib import Path
import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_RAW_DIR = PROJECT_ROOT / "data" / "raw"
DATA_PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"


def load_dataset(filename: str) -> pd.DataFrame:
    path = DATA_RAW_DIR / filename
    if not path.exists():
        raise FileNotFoundError(f"No se encontró el archivo: {path}")
    return pd.read_csv(path)


def save_processed_dataset(df: pd.DataFrame, filename: str) -> None:
    DATA_PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    output_path = DATA_PROCESSED_DIR / filename
    df.to_csv(output_path, index=False)
    print(f"Dataset guardado en: {output_path}")
