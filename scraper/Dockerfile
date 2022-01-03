FROM python:3.7
WORKDIR /usr/jsonrpc-server
COPY . .
RUN pip install -r requirements.txt
EXPOSE 3204
CMD ["python3", "dispatcher.py"]