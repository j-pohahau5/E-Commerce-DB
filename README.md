# E-Commerce-DB


## Description 

I created this project so user can see a DataBase using Insomnia to get JSON data. This application solves the issue that if a user doesn't know where to get a DataBase that includes categories, products, and tags they can just use mine and update, delete, or add to the DataBase directly.

Video Link: (https://drive.google.com/file/d/1tCbYs9obow3Y4HIH1eTluG5nOcRRgEHy/view)


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)


## Installation

Steps:
1. open terminal and direct your self to my project
2. do a "npm i" in your command line in order to install my project.
3. once it is installed do a "mysql -u root -p" Password is password.
4. do a "source ./db/schema.sql;" for table and database to be created then type exit 
5. in the command line type "npm run seed" to seed the DataBase
6. open Insomnia


## Usage 

Steps:
1. open Insomnia and get route for all the items in the route EX: localhost:3001/api/(categories, tags, or products)
2. do a get route for specific id EX: localhost:3001/api/(categories, tags, or products)/(any id number)
3. do a post route EX: localhost:3001/api/(categories, tags, or products)
4. do a put(update) route for specific id EX: localhost:3001/api/(categories, tags, or products)/(any id number)
5. do a delete route for specific id EX: localhost:3001/api/(categories, tags, or products)/(any id number)


## Credits

https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://getbootstrap.com/
https://choosealicense.com/licenses/mit/


## License

MIT License

Copyright (c) [2023] [Jonathan Pohahau]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

![badge](https://img.shields.io/badge/license-MIT-orange)
![badge](https://img.shields.io/badge/language-JavaScript-green)
![badge](https://img.shields.io/badge/language-Nodejs-brightgreen)
![badge](https://img.shields.io/badge/DataBase-MySQL-blueviolet)
![badge](https://img.shields.io/badge/npm-sequelize-blue)
![badge](https://img.shields.io/badge/npm-dotenv-red)