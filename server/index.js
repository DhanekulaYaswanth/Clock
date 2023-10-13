const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    // host: '182.18.149.144',
    // user: 'Stuinfo',
    // password: 'kcp@2023',
    // database: 'Studentsinfo',
    // port:3306,
    host: '182.18.149.144',
    user: 'Stuinfo',
    password: 'kcp@2023',
    database: 'Studentsinfo',
    port:3306,
  });

  

  
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  
    // Define the table creation SQL query
    // const createTableQuery = `
    //   CREATE TABLE IF NOT EXISTS users (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     username VARCHAR(255),
    //     email VARCHAR(255)
    //   )
    // `;
  
    // Check if the table exists
    // connection.query('SHOW TABLES LIKE "users"', (error, results, fields) => {
    //   if (error) throw error;
  
    //   if (results.length === 0) {
    //     // Table does not exist, create it
    //     connection.query(createTableQuery, (error, results, fields) => {
    //       if (error) throw error;
    //       console.log('Table created successfully');
    //     });
    //   } else {
    //     console.log('Table already exists');
    //   }



       // Define the data you want to insert
        //    const userData = { username: 'john_doe', email: 'john@example.com' };

        // Perform the insert query
        // connection.query('INSERT INTO users SET ?', userData, (error, results, fields) => {
        //     if (error) throw error;
        //     console.log('Inserted a new user with ID:', results.insertId);
        // });

  
      // Close the connection after all queries are executed
    //   connection.end((err) => {
    //     if (err) {
    //       console.error('Error closing connection:', err);
    //       return;
    //     }
    //     console.log('Connection closed');
    //   });
    // });
    connection.end((err) => {
        if (err) {
          console.error('Error closing connection:', err);
          return;
        }
        console.log('Connection closed');
      });
});