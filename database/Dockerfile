## Build
FROM golang:1.19-buster AS build

WORKDIR /

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /database

RUN /database


## Deploy
FROM debian:buster

WORKDIR /pb

COPY --from=build /database /pb/database

EXPOSE 8090

CMD ["./database", "serve", "--http=0.0.0.0:8090"]
