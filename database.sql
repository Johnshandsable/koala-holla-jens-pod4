-- Delete table
DROP TABLE "koala_inventory";

-- Create table
CREATE TABLE "koala_inventory" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(1024) NOT NULL,
  "gender" VARCHAR(1) NOT NULL,  -- Either "M" for male or "F" for female
  "age" INT NOT NULL,
  "ready_to_transfer" BOOLEAN NOT NULL DEFAULT FALSE,
  "notes" VARCHAR(1024)
);

INSERT INTO "koala_inventory"
  ("name", "gender", "age", "notes")
VALUES
  ('Scotty', 'M', 4, 'Born in Guatemala'),
  ('Jean', 'F', 5, 'Allergic to lots of lava'),
  ('Ororo', 'f', 7, 'Loves listening to Paula (Abdul)'),
  ('Logan', 'M', 15, 'Loves the sauna'),
  ('Charlie', 'M', 9, 'Favorite band is Nirvana'),
  ('Betsy', 'F', 4, 'Has a pet iguana');