FROM node:22.15.1-alpine3.20 AS build

WORKDIR /app
#ENV NODE_ENV production

#RUN apk --no-cache --virtual build-dependencies add \
#        python \
#        make \
#        g++

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build --mode production

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
