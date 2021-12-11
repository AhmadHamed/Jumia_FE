# Jumia_FE

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Running locally

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Run the application:

```
cd [Jumia_FE]
ng serve
```
Building the application:

```
npm run build
```
Dockerizing the application:

```
docker build -t jumia-fe:latest  .
docker run -d -p 4200:4200 jumia-fe:latest 
```
