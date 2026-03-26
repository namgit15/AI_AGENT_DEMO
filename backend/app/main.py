from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .agent import agent_graph

app = FastAPI(title="Simple LangGraph AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    query: str

@app.post("/api/invoke")
async def invoke_agent(request: Query):
    result = agent_graph.invoke({
        "messages": [{"role": "user", "content": request.query}]
    })
    # Get the final answer
    final_message = result["messages"][-1].content
    print(f'final-mssg: {final_message}')
    return {"response": final_message}