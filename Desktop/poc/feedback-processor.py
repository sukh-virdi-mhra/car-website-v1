"""Agent Workflow - Feedback Processor.

This sample demonstrates:

Use case: Automatically suggest actions based on feedback received.
"""

from agent_framework import WorkflowBuilder
from agent_framework.ollama import OllamaChatClient

# Create Ollama chat client
chat_client = OllamaChatClient()

# Create Summariser agent - summaries content
summariser = chat_client.create_agent(
    name="Summariser",
    instructions=(
        "Summarize the customer's feedback in one short sentence. Keep it neutral and concise."
        "Example output:"
        "App crashes during photo upload."
        "User praises dark mode feature."
    ),
)

# Create Classifier agent - classifies feedback
classifier = chat_client.create_agent(
    name="Classifier",
    instructions=(
        "Classify the feedback as one of the following: Positive, Negative, or Feature request."
    ),
)

# Create Suggestion agent - suggests next action based on summary and classification
suggestion_agent = chat_client.create_agent(
    name="Suggestion Agent",
    instructions=(
        "Based on the summary and classification, suggest the next action in one short sentence."
        "If the feedback is positive, suggest how to maintain or enhance that aspect."
        "If negative, suggest a solution to address the issue."
        "If it's a feature request, suggest how to implement it effectively."
        "Example output:"
        "Escalate as a high-priority bug for the mobile team."
        "Log as positive feedback to share with design and marketing."
        "Log as enhancement request for product backlog."
    ),
)

workflow = (
    WorkflowBuilder(
        name="Feedback suggestion workflow",
        description="Multi-agent feedback suggestion workflow with classification and summarisation",
    )
    .set_start_executor(summariser)
    .add_edge(summariser, classifier)
    .add_edge(classifier, suggestion_agent)
    .build()
)


def main():
    """Launch the branching workflow in DevUI."""
    import logging

    from agent_framework.devui import serve

    logging.basicConfig(level=logging.INFO, format="%(message)s")
    logger = logging.getLogger(__name__)

    logger.info("Starting Agent Workflow (Content Review with Quality Routing)")
    logger.info("Available at: http://localhost:8093")

    serve(entities=[workflow], port=8093, auto_open=True)


if __name__ == "__main__":
    main()
