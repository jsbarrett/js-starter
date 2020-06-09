# js-starter

## Dependencies

This currently uses syntax that needs NodeJS 12+

## Description

This is meant to serve as a teaching tool to get people excited about starting a new project using Javascript.
It is influenced by the likes of Laravel and Ruby on Rails, and so it takes the more traditional server-client
approach (for now) rather than building a single-page-application with a REST-ish API.

This may change in the future.

For now, a user builds a new model/entity with the npm run generate command.

```
npm run generate tableName columnOne:text:required columnTwo:integer:optional
```

Currently there is no validation on user input for this command,
and eventually we would like to have an alternative means of generating new entities.
One that could prompt the user for input rather than expect everything in a single command.

Work is also needed to further improve the design for the default interface.

And we may also wish to use some ORM (or build our own simple one) to be able to integrate more than just
SQLite.

## Setup

To get started, you will need to clone this repository and run `npm install` in order to get the dependencies.
Then you can run `npm run migrate todos` to update the sqlite3 database to have the simple todos example table.
Now you can run `npm run dev` and it'll start the server for you on port 3000.

If you visit at port 3000/todos (for example: http://localhost:3000/todos)
you will see a simple example that has full crud operations baked in.
(This is still being converted over from when it was a more custom todo app)

If you wish to create your own models,
then you may run the `npm run generate` command previously mentioned.
You will then want to run `npm run migrate tablename` in order to update the database.
Once generated and migrated, you can visit /tablename and you'll get a similar looking
bare bones means of interacting with your model.
