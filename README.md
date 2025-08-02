# TypeScript multi runtime compatible project example

### Node.js v22.18.0

Install dependencies

```shell
npm ci
```

Run in watch mode (for development)

```shell
npm run dev
```

Build for production & run

```shell
npm run build

node ./dist/main.mjs
```

### Bun 1.2.19

Install dependencies

```shell
bun install
```

Run in watch mode (for development)

```shell
bun run dev
```

Build for production & run

```shell
bun run compile

./dist/server-bun
```

### Deno 2.4.3

Install dependencies

```shell
deno install
```

Run in watch mode (for development)

```shell
deno task dev
```

Build for production & run

```shell
deno task compile

./dist/server-deno
```
