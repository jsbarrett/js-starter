CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name text NOT NULL,
  complete integer NOT NULL,
  someothercolumn blob 
)