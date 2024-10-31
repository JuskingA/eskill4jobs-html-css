# MySQL Commands Guide

This guide provides a comprehensive list of MySQL commands with examples for each, covering basic to advanced commands.

## Table of Contents
- [MySQL Commands Guide](#mysql-commands-guide)
  - [Table of Contents](#table-of-contents)
    - [Database Operations](#database-operations)
    - [Table Operations](#table-operations)
    - [CRUD Operations](#crud-operations)
    - [Clauses](#clauses)
    - [Joins](#joins)
    - [Indexes](#indexes)
    - [Views](#views)
    - [Transactions](#transactions)
  - [Additional Notes](#additional-notes)

---

### Database Operations

- **Create Database**
  ```sql
  CREATE DATABASE database_name;
  ```
  Example:
  ```sql
  CREATE DATABASE test_db;
  ```

- **Use Database**
  ```sql
  USE database_name;
  ```
  Example:
  ```sql
  USE test_db;
  ```

- **Show Databases**
  ```sql
  SHOW DATABASES;
  ```

- **Drop Database**
  ```sql
  DROP DATABASE database_name;
  ```
  Example:
  ```sql
  DROP DATABASE test_db;
  ```

---

### Table Operations

- **Create Table**
  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      ...
  );
  ```
  Example:
  ```sql
  CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100),
      email VARCHAR(100)
  );
  ```

- **Show Tables**
  ```sql
  SHOW TABLES;
  ```

- **Describe Table**
  ```sql
  DESCRIBE table_name;
  ```
  Example:
  ```sql
  DESCRIBE users;
  ```

- **Drop Table**
  ```sql
  DROP TABLE table_name;
  ```
  Example:
  ```sql
  DROP TABLE users;
  ```

---

### CRUD Operations

- **Insert Data**
  ```sql
  INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
  ```
  Example:
  ```sql
  INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
  ```

- **Select Data**
  ```sql
  SELECT column1, column2, ... FROM table_name;
  ```
  Example:
  ```sql
  SELECT name, email FROM users;
  ```

- **Update Data**
  ```sql
  UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
  ```
  Example:
  ```sql
  UPDATE users SET email = 'newemail@example.com' WHERE id = 1;
  ```

- **Delete Data**
  ```sql
  DELETE FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  DELETE FROM users WHERE id = 1;
  ```

---

### Clauses

- **Where Clause**
  ```sql
  SELECT column1, column2 FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  SELECT * FROM users WHERE name = 'Alice';
  ```

- **Order By Clause**
  ```sql
  SELECT column1, column2 FROM table_name ORDER BY column1 ASC|DESC;
  ```
  Example:
  ```sql
  SELECT * FROM users ORDER BY name ASC;
  ```

- **Group By Clause**
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1;
  ```
  Example:
  ```sql
  SELECT email, COUNT(*) FROM users GROUP BY email;
  ```

- **Having Clause**
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING COUNT(*) > value;
  ```
  Example:
  ```sql
  SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;
  ```

- **Limit Clause**
  ```sql
  SELECT * FROM table_name LIMIT number;
  ```
  Example:
  ```sql
  SELECT * FROM users LIMIT 5;
  ```

---

### Joins

- **Inner Join**
  ```sql
  SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id;
  ```

- **Left Join**
  ```sql
  SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT users.name, orders.amount FROM users LEFT JOIN orders ON users.id = orders.user_id;
  ```

- **Right Join**
  ```sql
  SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT users.name, orders.amount FROM users RIGHT JOIN orders ON users.id = orders.user_id;
  ```

- **Full Join** (not directly supported in MySQL, workaround using UNION)
  ```sql
  SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column
  UNION
  SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
  ```

---

### Indexes

- **Create Index**
  ```sql
  CREATE INDEX index_name ON table_name (column1, column2, ...);
  ```
  Example:
  ```sql
  CREATE INDEX idx_user_email ON users (email);
  ```

- **Drop Index**
  ```sql
  DROP INDEX index_name ON table_name;
  ```
  Example:
  ```sql
  DROP INDEX idx_user_email ON users;
  ```

---

### Views

- **Create View**
  ```sql
  CREATE VIEW view_name AS SELECT columns FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';
  ```

- **Select from View**
  ```sql
  SELECT * FROM view_name;
  ```
  Example:
  ```sql
  SELECT * FROM active_users;
  ```

- **Drop View**
  ```sql
  DROP VIEW view_name;
  ```
  Example:
  ```sql
  DROP VIEW active_users;
  ```

---

### Transactions

- **Start Transaction**
  ```sql
  START TRANSACTION;
  ```

- **Commit Transaction**
  ```sql
  COMMIT;
  ```

- **Rollback Transaction**
  ```sql
  ROLLBACK;
  ```

  Example Transaction:
  ```sql
  START TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
  COMMIT;
  ```

---

## Additional Notes

- Always back up your data before making changes.
- Use transactions for critical updates to ensure data integrity.

---
```

This README covers all the basic MySQL operations with examples for easy understanding. Let me know if you'd like any additional sections!