from fastapi import FastAPI
import jwt
from flask_sqlalchemy import SQLAlchemy

app = FastAPI()

@app.get('/')
def root():
    return {"data" : "You shouldn't be here"}
