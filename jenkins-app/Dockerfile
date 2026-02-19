FROM node:20-bullseye-slim
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000
EXPOSE 3000

# Vite needs --host to be reachable outside container
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --port $PORT"]
