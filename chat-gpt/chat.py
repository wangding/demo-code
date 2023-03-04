import openai

openai.api_key = ""

response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "你是大学老师，教近世代数课程。第一次给学生概述一下该课程，开始吧"},
  ]
)

result = ""
for choice in response.choices:
    result += choice.message.content

print(result)
