### Database Management

1. **Create a Database**:
   ```sql
   CREATE DATABASE database_name;
   ```

2. **Select a Database**:
   ```sql
   USE database_name;
   ```

3. **Show All Databases**:
   ```sql
   SHOW DATABASES;
   ```

4. **Delete a Database**:
   ```sql
   DROP DATABASE database_name;
   ```

---

### Table Management

1. **Create a Table**:
   ```sql
   CREATE TABLE table_name (
       column1_name column1_datatype constraints,
       column2_name column2_datatype constraints,
       ...
   );
   ```

2. **Show All Tables in the Current Database**:
   ```sql
   SHOW TABLES;
   ```

3. **Describe Table Structure**:
   ```sql
   DESCRIBE table_name;
   ```
   or
   ```sql
   SHOW COLUMNS FROM table_name;
   ```

4. **Delete a Table**:
   ```sql
   DROP TABLE table_name;
   ```

5. **Alter a Table (Add, Modify, or Drop Columns)**:
   - **Add a Column**:
     ```sql
     ALTER TABLE table_name ADD column_name datatype;
     ```
   - **Modify a Column**:
     ```sql
     ALTER TABLE table_name MODIFY column_name new_datatype;
     ```
   - **Delete a Column**:
     ```sql
     ALTER TABLE table_name DROP COLUMN column_name;
     ```

---

### Data Manipulation

1. **Insert Data into a Table**:
   ```sql
   INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
   ```

2. **Select Data from a Table**:
   ```sql
   SELECT column1, column2 FROM table_name WHERE conditions;
   ```
   - **Select All Columns**:
     ```sql
     SELECT * FROM table_name;
     ```

3. **Update Data in a Table**:
   ```sql
   UPDATE table_name SET column1 = value1, column2 = value2 WHERE conditions;
   ```

4. **Delete Data from a Table**:
   ```sql
   DELETE FROM table_name WHERE conditions;
   ```

---

### Data Retrieval and Querying

1. **Filter Results (WHERE Clause)**:
   ```sql
   SELECT * FROM table_name WHERE column = value;
   ```

2. **Sort Results (ORDER BY Clause)**:
   ```sql
   SELECT * FROM table_name ORDER BY column_name ASC|DESC;
   ```

3. **Limit the Number of Results**:
   ```sql
   SELECT * FROM table_name LIMIT number;
   ```

4. **Aggregate Functions**:
   - **Count Rows**:
     ```sql
     SELECT COUNT(*) FROM table_name;
     ```
   - **Sum Values**:
     ```sql
     SELECT SUM(column_name) FROM table_name;
     ```
   - **Average**:
     ```sql
     SELECT AVG(column_name) FROM table_name;
     ```
   - **Minimum and Maximum**:
     ```sql
     SELECT MIN(column_name), MAX(column_name) FROM table_name;
     ```

5. **Group Results (GROUP BY Clause)**:
   ```sql
   SELECT column, COUNT(*) FROM table_name GROUP BY column;
   ```

6. **Join Tables**:
   - **Inner Join**:
     ```sql
     SELECT columns FROM table1 INNER JOIN table2 ON table1.common_column = table2.common_column;
     ```
   - **Left Join**:
     ```sql
     SELECT columns FROM table1 LEFT JOIN table2 ON table1.common_column = table2.common_column;
     ```

---

### User Management

1. **Create a New User**:
   ```sql
   CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
   ```

2. **Grant Privileges to a User**:
   ```sql
   GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
   ```

3. **Revoke Privileges from a User**:
   ```sql
   REVOKE ALL PRIVILEGES ON database_name.* FROM 'username'@'localhost';
   ```

4. **Delete a User**:
   ```sql
   DROP USER 'username'@'localhost';
   ```

5. **Show All Users**:
   ```sql
   SELECT User, Host FROM mysql.user;
   ```

---

### Additional Commands

1. **Show Current User**:
   ```sql
   SELECT USER();
   ```

2. **View MySQL Version**:
   ```sql
   SELECT VERSION();
   ```

3. **Exit MySQL**:
   ```sql
   exit;
   ```
