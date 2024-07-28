1. npm init -y
3. npm install express
4. npm install typescript ts-node @types/express @types/node --save-dev
5. npm install --save-dev ts-node-dev
6. npm install --save-dev nodemon ts-node
7. npm install --save-dev jest @types/jest ts-jest
8. npm install @nestjs/testing --save-dev
9. npx tsc --init


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Installare Prisma
1. npm install @prisma/client
2. npm install -D prisma
3. npx prisma init

nel file .env => DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Istruzioni Docker
docker build -t ts_user .
docker run --name ts_user-container -d -p 5432:5432 ts_user

Istruzioni Docker
docker build -t ts-user .
docker run --name ts-user-container -d -p 3030:3030 ts-user

Update image
docker build -t ts-user .
docker stop ts-user-container
docker rm ts-user-container
docker run --name ts-user-container -d -p 3030:3030 ts-user

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

package.json
...
  "scripts": {
    "test": "jest",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node-dev --respawn src/index.ts",
    "start:dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
...

tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.spec.ts"],
};


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


.gitignore
node_modules/
dist/


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Command list

tsc -w     ->     start watch mode


------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Structure
src/
|-- controllers/
|   |-- user.controller.ts
|-- services/
|   |-- user.service.ts
|-- repositories/
|   |-- user.repository.ts
|-- models/
|   |-- user.model.ts
|-- __tests__/
|   |-- user.controller.spec.ts