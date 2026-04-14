from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import date, datetime

app = FastAPI()

@app.get('/')
def root():
    return {"data" : "You shouldn't be here"}
