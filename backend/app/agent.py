from dotenv import load_dotenv
from langchain.agents import create_agent
from langchain_google_genai import ChatGoogleGenerativeAI
from .tools import calculator, get_current_date

load_dotenv()
MODEL = "gemini-3-flash-preview"

llm = ChatGoogleGenerativeAI(model=MODEL, temperature=0)

tools = [calculator, get_current_date]

# This is the full AI Agent (ReAct style)
agent_graph = create_agent(
    llm,
    tools,
    system_prompt="You are a helpful AI agent. Use tools when needed. Be concise."
)