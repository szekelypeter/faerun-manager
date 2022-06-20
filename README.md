# Faerun-manager

**A multi-purpose DnD charactersheet / campaign manager**

## Running

### Server

###### Node.js 16+

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

##### The non-intuitive bits:

- When creating an entity, the `id` field is *not required* and *not recommended*.
- The `createdAt` and `updatedAt` values are calculated on the server side, they don't need to be manually updated.
- When requesting multiple entities, the result is always paginated, and can be used by setting `limit` and `offset`. Example query:

```GraphQL
{
  characters(paging: { limit: 10, offset: 0 }) {
    pageInfo {
      hasNextPage
    }
    nodes {
      name
      level
      strengthScore
      backstory
      campaign {
        name
      }
    }
  }
}
```

- The `characterLongRest` and `characterShortRest` features are just placeholders.

Have fun, Peti! ;)