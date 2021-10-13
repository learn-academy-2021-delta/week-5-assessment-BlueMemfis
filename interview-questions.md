<!-- # ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby methods are accessors. I actually just had this question on the game Kahoot during my coding bootcamp at LEARN ACADAMY...and yes, I got it right.  

  Researched answer:  I forgot about the banger '!' Damn.  Ruby methods are all accessors!  While nothing is 100% besides gravity but for the most part the methods are accessors.  They dont mutate the objects they are called on.  

num3 = [6,3,5,3]
num3.include?(5) true
num3.delete(2)
num3.include?(5) true
num3.delete_at(2)
p num3.include?(5) false

num3.each do |value|
    puts value
  end

6
3
3

(just me trying to get better at white boarding) I know I didnt use '!' but I just went down the rabbit hole.  Learned about the flatten method.

2. What is a block in Ruby?

  Your answer:  Blocks are lots of code between do..end or braces that you can kinda line with methods.  I know they can sometime have their own argument...

  Researched answer: After further research I learned that blocks are ways of grouping elements.  I also was remembered that the block is written starting on the same line as the method last parameter. I also learned about no_blocks_given? lol block_given?

3. What is a gem?

  Your answer:  A gem enables adding features without making the code over and over again. They are like plugin for Ruby.

  Researched answer:  First of all it makes sense that Rails is a gem! Gems is a package manager for the Ruby programming language ONLY and it provides format for distributing Ruby programs and libraries...smh, a tool designed to easily manage the installation of gems.

4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database that is digital and uses stored information. Basically Excel or Google Sheet.   Made up of rows and columns.  And each row in the table is a record with a unique ID called the key. Tables are one set of rows and columns.  Microsoft SQL Server and Oracle Database are some other kinds of databases

  Researched answer:  Databases can have many tables that have relationships to each other. The description of the layout of all the tables in a database and the name and data type of each column within each table in a database is called a schema.  MySQL is another one as well.

5. What are primary keys? Why are they important?

  Your answer: ...every row has a primary key and that ID is guaranteed to be unique to that row.  Say for instance we have two cars with the same make name...we wont get confused because car has its own PK.

  Researched answer:  A primary key is a COLUMN or a set of COLUMNS in a table and the values uniquely identify a row.  A relational database is designed to enforce the uniqueness of primary keys by allowing only one row with a given primary key value in a table. Using the primary key, you can easily identify and find unique rows in the database table. They allow you to update/delete only specific records by uniquely identifying them.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer (REST) routing is a standard for creating reusable and efficient routes by asserting the routes that complete common actions have names that accurately depict the action it is performing. It is a route that provides mapping from HTTP to controller CRUD actions.

2. JSON: JSON or JavaScript Object notation is a text-based format that is used to represent structured data. It is primarily used for data transmission in web applications.

3. ERB: Embedded Ruby or ERB is a file structure that allows developers to code HTML with Ruby code embedded in the view file.

4. Params: Params also known as URL parameters or query strings. They are used to dynamically modify the view or to query the database by passing in additional information into a controller method.

5. API: Application Programming Interface is a software that allows two separate applications or two separate computers to communicate with each other.
