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

### API

The API is pure GraphQL, recommended readings can be found here:

[GraphQL basics](https://graphql.org/learn/)

[GraphQL advanced queries](https://graphql.org/learn/queries/)

[Implementation details](https://doug-martin.github.io/nestjs-query/docs/concepts/queries)

##### The non-intuitive bits:

- When creating an entity, the `id` field is *not required* and *not recommended*.
- The `createdAt` and `updatedAt` values are calculated on the server side, they don't need to be manually updated.
- When requesting multiple entities, the result is always paginated, and can be used by setting `limit` and `offset`.
- The `characterLongRest` and `characterShortRest` features are just placeholders.

##### Example queries

Create a new campaign:

```GraphQL
mutation {
  createOneCampaign(
    input: {
      campaign: {
        name: "Storm king's tündér",
        details: "Fun little campaign"
    } }
  ) {
    id
  }
}
```

Add a new character sheet to the created campaign:

```GraphQL
mutation {
  createOneCharacter(
    input: { character: {
      name: "Dethmos",
      campaignId: 1,
      level: 9,
      class: "Cleric"
      strengthScore: 14
    } }
  ) {
    id
  }
}
```

*Note: the `campaignId` is the number returned by the last query*

List the first 10 characters:

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

Execute a short rest on the created character:

```GraphQL
mutation {
  characterShortRest(id: 1) {
    healthRestored
  }
}

```

Have fun, Peti! ;)