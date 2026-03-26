from langchain_core.tools import tool
import datetime

@tool
def calculator(expression: str) -> str:
    """Useful for any math. Input must be a valid Python math expression."""
    try:
        result = eval(expression, {"__builtins__": {}}, {})
        return str(result)
    except Exception as e:
        return f"Error: {e}"

@tool
def get_current_date() -> str:
    """Returns today's date in YYYY-MM-DD format."""
    return datetime.date.today().isoformat()