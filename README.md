# Faerun-manager

**A multi-purpose DnD charactersheet / campaign manager**

## Running

### Server

###### Node 16+

Add [node](https://github.com/asdf-vm/asdf-nodejs) plugin to asdf, or install the latest stable with NVM. You can check current nodejs version with `node --version`. 

###### Application

```bash
$ npm install -g yarn
$ yarn install

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

The HTTP server is listening on :3000, and the GraphQL endpoint is `/graphql`.

The database is located in `server/db/database.sqlite` by default.

### Development

The API is pure GraphQL, recommended readings can be found here:

[GraphQL basics](https://graphql.org/learn/)

[GraphQL advanced queries](https://graphql.org/learn/queries/)

[Implementation details](https://doug-martin.github.io/nestjs-query/docs/concepts/queries)

Have fun, Peti! ;)