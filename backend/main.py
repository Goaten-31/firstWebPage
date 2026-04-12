from fastapi import FastAPI
import jwt
import sqlalchemy

app = FastAPI()

@app.get('/')
def root():
    return {"data" : "You shouldn't be here"}
