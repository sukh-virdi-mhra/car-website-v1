##### Multimodal Demo with Ollama ######

import asyncio

from agent_framework import ChatMessage, DataContent, Role, TextContent
from agent_framework.ollama import OllamaChatClient

def create_sample_image() -> str:
    """Create a simple 1x1 pixel PNG image for testing."""
    # This is a tiny red pixel in PNG format
    png_data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    return f"data:image/png;base64,{png_data}"


async def test_image() -> None:
    """Test image analysis with Ollama."""

    client = OllamaChatClient()

    image_uri = create_sample_image()

    message = ChatMessage(
        role=Role.USER,
        contents=[
            TextContent(text="What's in this image?"),
            DataContent(uri=image_uri, media_type="image/png"),
        ],
    )

    response = await client.get_response(message)
    print(f"Image Response: {response}")


async def main() -> None:
    print("=== Testing Ollama Multimodal ===")
    await test_image()


if __name__ == "__main__":
    asyncio.run(main())
