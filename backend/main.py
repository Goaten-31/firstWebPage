from fastapi import FastAPI, HTTPException
import jwt
import sqlalchemy
from pydantic import types, optional

app = FastAPI()

@app.get('/')
def root():
    return {"data" : "You shouldn't be here"}
