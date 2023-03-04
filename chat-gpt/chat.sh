curl -m 6000 -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer sk' \
  -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "你是大学老师，教近世代数课程。给学生概述一下该课程，开始吧"}]}' \
https://api.openai.com/v1/chat/completions

curl -m 6000 -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer sk-' \
  -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "hello world"}]}' \
https://api.openai.com/v1/chat/completions


curl -m 6000 -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer sk-' -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "hello world"}]}' https://api.openai.com/v1/chat/completions
