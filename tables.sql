CREATE TABLE moments(
  id INTEGER PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  location VARCHAR(255),
  description VARCHAR(255) NOT NULL,
  tumbnail_url TEXT NOT NULL,
  author VARCHAR(160) NOT NULL
);

CREATE TABLE pictures(
  id INTEGER PRIMARY KEY,
  moment_id INT REFERENCES moments("id"),
  picture_url TEXT NOT NULL
);

CREATE TABLE tags(
  id INTEGER PRIMARY KEY,
  tag_name VARCHAR(255) NOT NULL
);

CREATE TABLE moments_tags(
  id INTEGER PRIMARY KEY,
  moment_id INT REFERENCES moments("id"),
  tag_id INT REFERENCES tags("id")
);