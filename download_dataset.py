from pathlib import Path
import subprocess
import sys

workspace_root = Path(__file__).resolve().parent
project_root = workspace_root / "customer-churn-prediction"
script_path = project_root / "src" / "download_dataset.py"
venv_python = project_root / ".venv" / "Scripts" / "python.exe"

if not script_path.exists():
    raise FileNotFoundError(f"No se encontró el script: {script_path}")

python_executable = str(venv_python) if venv_python.exists() else sys.executable
completed = subprocess.run([python_executable, str(script_path)], cwd=project_root, check=False)
raise SystemExit(completed.returncode)
