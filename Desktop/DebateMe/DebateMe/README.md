# Horizon AI

## Local Development Setup

**Create a virtual environment:**

```bash
python -m venv .venv
```

**Activate the virtual environment:**

On macOS/Linux:

```bash
source .venv/bin/activate
```

On Windows:

```bash
.venv\Scripts\activate
```

**Install dependencies:**

```bash
pip install -r requirements.txt
```

**Ensure the local LLM is running:**
(example ollama running llama3.1)

```bash
ollama run llama3.1
```

**Run the application:**

```bash
uvicorn app:app --reload
```
