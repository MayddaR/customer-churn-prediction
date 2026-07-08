from pathlib import Path
import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DATA_PATH = PROJECT_ROOT / "data" / "raw" / "WA_Fn-UseC_-Telco-Customer-Churn.csv"
PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
PROCESSED_DATA_PATH = PROCESSED_DIR / "telco_customer_churn_processed.csv"


def load_and_preprocess(raw_path: str | Path = RAW_DATA_PATH, output_path: str | Path = PROCESSED_DATA_PATH) -> pd.DataFrame:
    """Load the raw dataset, clean it, encode categoricals and save a processed CSV."""
    df = pd.read_csv(raw_path)
    df = df.drop_duplicates().copy()

    if "customerID" in df.columns:
        df = df.drop(columns=["customerID"])

    if "TotalCharges" in df.columns:
        df["TotalCharges"] = pd.to_numeric(df["TotalCharges"], errors="coerce")
        df["TotalCharges"] = df["TotalCharges"].fillna(0)

    for col in df.select_dtypes(include=["object", "string"]).columns:
        df[col] = df[col].fillna("Unknown").astype(str)

    for col in df.select_dtypes(include="number").columns:
        df[col] = df[col].fillna(df[col].median())

    if "Churn" in df.columns:
        df["Churn"] = df["Churn"].map({"Yes": 1, "No": 0, "Y": 1, "N": 0})

    categorical_columns = [col for col in df.select_dtypes(include=["object", "string"]).columns if col != "Churn"]
    df = pd.get_dummies(df, columns=categorical_columns, drop_first=True)

    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    df.to_csv(output_path, index=False)

    print(f"Dataset limpio guardado en: {output_path}")
    print(f"Shape final: {df.shape}")
    return df


if __name__ == "__main__":
    load_and_preprocess()
