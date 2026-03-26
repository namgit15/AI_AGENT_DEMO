from langchain.agents import create_agent
from langchain_google_genai import ChatGoogleGenerativeAI
from .tools import calculator, get_current_date
import os

llm = ChatGoogleGenerativeAI(model="gemini-3-flash-preview", temperature=0)

tools = [calculator, get_current_date]

# This is the full AI Agent (ReAct style)
agent_graph = create_agent(
    llm,
    tools,
    state_modifier="You are a helpful AI agent. Use tools when needed. Be concise."
)