## Run everything with one command

    docker compose up --build
    open browser, and navigate to http://localhost:3000

or

## Run backend FASTAPI server
```bash
cd backend
uvicorn app.main:app --reload
```

## Run fronend
```bash
npm run dev
```

### What is langchain.agent.create_agent?

create_agent is a high-level helper that constructs an agent by combining an LLM, a set of tools, and an execution loop. At runtime, the agent repeatedly calls the LLM to decide whether to answer directly or invoke a tool, executes the tool if needed, and feeds the result back into the model until a final answer is produced. Under the hood, modern LangChain agents are often backed by LangGraph, which represents this workflow as a stateful execution graph with nodes for LLM calls and tool execution, enabling more flexible and robust control flow.