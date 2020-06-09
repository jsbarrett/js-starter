# js-starter

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
