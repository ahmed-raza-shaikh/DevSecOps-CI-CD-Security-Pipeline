# Intentionally outdated base image for portfolio demonstration.
# Trivy should flag critical OS/package vulnerabilities and fail the PR gate.
FROM node:12-buster

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY app ./app

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "app/server.js"]
