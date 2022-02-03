FROM node:16-alpine as builder

COPY . .

RUN npm ci && \
    npm run build && \
    npm prune --production

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder .nuxt ./.nuxt
COPY --from=builder node_modules ./node_modules
COPY --from=builder package.json .
COPY --from=builder config.js .
COPY --from=builder nuxt.config.js .

ENV HOST=0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]