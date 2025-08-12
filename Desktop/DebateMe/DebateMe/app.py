# app.py
import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()  

app = FastAPI()

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODEL = os.getenv("GROQ_MODEL", "meta-llama/llama-4-scout-17b-16e-instruct")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
SYSTEM_MESSAGE = (
    "Using the following transcript, return the winner of the debate based in a JSON format with the keys 'winner' and 'summary'."
)

class WinnerReq(BaseModel):
    content: str

def pass_to_ai(text: str) -> str:
    assert GROQ_API_KEY, "GROQ_API_KEY not set"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": text}
        ],
        "max_tokens": 800
    }

    r = requests.post(GROQ_URL, json=payload, headers=headers, timeout=60)
    r.raise_for_status()
    data = r.json()
    return data["choices"][0]["message"]["content"].strip()

@app.post("/get-winner")
def get_winner(req: WinnerReq):
    try:
        return {"result": pass_to_ai(req.content)}
    except Exception as e:
        return {"error": str(e)}
