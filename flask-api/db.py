import sqlite3

conn = sqlite3.connect('shipping_db.sqlite')

cursor = conn.cursor()
sql_query = \
""" 
CREATE TABLE location (
  location_id INTEGER PRIMARY KEY AUTOINCREMENT,
  address VARCHAR(50) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  country VARCHAR(50) NOT NULL,
  state VARCHAR(2)
);

CREATE TABLE user (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  FOREIGN KEY (location_id) REFERENCES location(location_id)
);

"""
"""

CREATE TABLE recipient (
  recipient_id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
);

CREATE TABLE item (
  item_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50) NOT NULL,
  weight INTEGER NOT NULL,
  width INTEGER NOT NULL,
  length INTEGER NOT NULL,
  height INTEGER NOT NULL
);

CREATE TABLE order (
  order_id INTEGER PRIMARY KEY AUTOINCREMENT,
  sender_id INTEGER NOT NULL,
  recipient_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  item_quantity INTEGER NOT NULL,
  box_quantity INTEGER NOT NULL,
  box_size INTEGER NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (sender_id) REFERENCES user(user_id),
  FOREIGN KEY (recipient_id) REFERENCES recipient(recipient_id),
  FOREIGN KEY (item_id) REFERENCES item(item_id)
);

CREATE TABLE order_book (
  order_book_id INTEGER NOT NULL AUTO_INCREMENT,
  order_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  date_created VARCHAR(50) NOT NULL,
  PRIMARY KEY (order_book_id),
  FOREIGN KEY (order_id) REFERENCES order(order_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);
"""
cursor.execute(sql_query)
