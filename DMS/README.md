# MySQL Command Reference Guide

This guide provides a comprehensive list of MySQL commands with examples, covering all the essential operations for databases, tables, data manipulation, user management, and advanced SQL functions.

## Table of Contents
- [MySQL Command Reference Guide](#mysql-command-reference-guide)
  - [Table of Contents](#table-of-contents)
    - [Database Operations](#database-operations)
    - [Table Operations](#table-operations)
    - [CRUD Operations](#crud-operations)
    - [Clauses](#clauses)
    - [Joins](#joins)
    - [Indexes](#indexes)
    - [Views](#views)
    - [Transactions](#transactions)
    - [User Management](#user-management)
    - [Security Best Practices](#security-best-practices)

---

### Database Operations

- **Create Database**
  ```sql
  CREATE DATABASE database_name;
  ```
  Example:
  ```sql
  CREATE DATABASE project_db;
  ```

- **Use Database**
  ```sql
  USE database_name;
  ```
  Example:
  ```sql
  USE project_db;
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
  DROP DATABASE project_db;
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
  CREATE TABLE employees (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100),
      department VARCHAR(50)
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
  DESCRIBE employees;
  ```

- **Drop Table**
  ```sql
  DROP TABLE table_name;
  ```
  Example:
  ```sql
  DROP TABLE employees;
  ```

---

### CRUD Operations

- **Insert Data**
  ```sql
  INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
  ```
  Example:
  ```sql
  INSERT INTO employees (name, department) VALUES ('Alice', 'HR');
  ```

- **Select Data**
  ```sql
  SELECT column1, column2, ... FROM table_name;
  ```
  Example:
  ```sql
  SELECT name, department FROM employees;
  ```

- **Update Data**
  ```sql
  UPDATE table_name SET column1 = value1 WHERE condition;
  ```
  Example:
  ```sql
  UPDATE employees SET department = 'IT' WHERE id = 1;
  ```

- **Delete Data**
  ```sql
  DELETE FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  DELETE FROM employees WHERE id = 1;
  ```

---

### Clauses

- **Where Clause**
  ```sql
  SELECT * FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  SELECT * FROM employees WHERE department = 'HR';
  ```

- **Order By Clause**
  ```sql
  SELECT * FROM table_name ORDER BY column_name [ASC|DESC];
  ```
  Example:
  ```sql
  SELECT * FROM employees ORDER BY name ASC;
  ```

- **Group By Clause**
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1;
  ```
  Example:
  ```sql
  SELECT department, COUNT(*) FROM employees GROUP BY department;
  ```

- **Having Clause**
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING COUNT(*) > value;
  ```
  Example:
  ```sql
  SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;
  ```

- **Limit Clause**
  ```sql
  SELECT * FROM table_name LIMIT number;
  ```
  Example:
  ```sql
  SELECT * FROM employees LIMIT 10;
  ```

---

### Joins

- **Inner Join**
  ```sql
  SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT employees.name, departments.dept_name 
  FROM employees 
  INNER JOIN departments 
  ON employees.department_id = departments.id;
  ```

- **Left Join**
  ```sql
  SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT employees.name, departments.dept_name 
  FROM employees 
  LEFT JOIN departments 
  ON employees.department_id = departments.id;
  ```

- **Right Join**
  ```sql
  SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
  ```
  Example:
  ```sql
  SELECT employees.name, departments.dept_name 
  FROM employees 
  RIGHT JOIN departments 
  ON employees.department_id = departments.id;
  ```

---

### Indexes

- **Create Index**
  ```sql
  CREATE INDEX index_name ON table_name (column);
  ```
  Example:
  ```sql
  CREATE INDEX idx_name ON employees (name);
  ```

- **Drop Index**
  ```sql
  DROP INDEX index_name ON table_name;
  ```
  Example:
  ```sql
  DROP INDEX idx_name ON employees;
  ```

---

### Views

- **Create View**
  ```sql
  CREATE VIEW view_name AS SELECT columns FROM table_name WHERE condition;
  ```
  Example:
  ```sql
  CREATE VIEW hr_employees AS SELECT * FROM employees WHERE department = 'HR';
  ```

- **Select from View**
  ```sql
  SELECT * FROM view_name;
  ```
  Example:
  ```sql
  SELECT * FROM hr_employees;
  ```

- **Drop View**
  ```sql
  DROP VIEW view_name;
  ```
  Example:
  ```sql
  DROP VIEW hr_employees;
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

Example:
```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

### User Management

- **Create User**
  ```sql
  CREATE USER 'username'@'host' IDENTIFIED BY 'password';
  ```
  Example:
  ```sql
  CREATE USER 'john_doe'@'localhost' IDENTIFIED BY 'pass123';
  ```

- **Grant Privileges**
  ```sql
  GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'host';
  ```
  Example:
  ```sql
  GRANT ALL PRIVILEGES ON project_db.* TO 'john_doe'@'localhost';
  FLUSH PRIVILEGES;
  ```

- **Update User Password**
  ```sql
  ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';
  ```
  Example:
  ```sql
  ALTER USER 'john_doe'@'localhost' IDENTIFIED BY 'newpass456';
  ```

- **Delete User**
  ```sql
  DROP USER 'username'@'host';
  ```
  Example:
  ```sql
  DROP USER 'john_doe'@'localhost';
  ```

---

### Security Best Practices

1. **Use Strong Passwords** for all user accounts.
2. **Restrict Access by Host**: Limit user access to specific hosts instead of `%` for better security.
3. **Grant Minimal Privileges**: Only grant the necessary privileges to each user.
4. **Regularly Review and Revoke Unused Accounts** to reduce potential security risks.

---

This MySQL guide is intended to be a comprehensive reference for managing databases, tables, data, and users. Always back up your data before making structural changes, and ensure best practices are followed for security.