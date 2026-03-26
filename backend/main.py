from fastapi import FastAPI, Path, HTTPException, status, Depends
from pydantic import BaseModel
from typing import Optional, List, Dict

app = FastAPI()

