FROM python:3.6
COPY . /app
WORKDIR /app
RUN pip install --trusted-host mirrors.aliyun.com  -r requirements.txt
EXPOSE 5000
CMD ["python", "index.py"]