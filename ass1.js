const books=[ {bookId: 101, title: "B Programming", author: "Dennis Ritchie", category: "Programming", copies: 5},
    {bookId: 102, title: "Java Basics", author: "James Gosling", category: "Programming", copies: 4},
    {bookId: 103, title: "Data Structures", author: "Shaums", category: "Programming", copies: 3},
    {bookId: 104, title: "Web Development", author: "John Duckett", category: "Programming", copies: 10},
    {bookId: 105, title: "Database Management", author: "Korth", category: "Database", copies: 2},
    {bookId: 106, title: "SQL Fundamentals", author: "Navathe", category: "Database", copies: 6},
    {bookId: 107, title: "Computer Networks", author: "Andrew Tanenbaum", category: "Networking", copies: 1},
    {bookId: 108, title: "Network Security", author: "William Stallings", category: "Networking", copies: 5},
    {bookId: 109, title: "Discrete Mathematics", author: "Rosen", category: "Mathematics", copies: 4},
    {bookId: 110, title: "Engineering Mathematics", author: "Grewal", category: "Mathematics", copies: 2},
    {bookId: 111, title: "Operating Systems", author: "Galvin", category: "System", copies: 7},
    {bookId: 112, title: "Linux Concepts", author: "Nemeth", category: "System", copies: 3},
    {bookId: 113, title: "Python Programming", author: "Mark Lutz", category: "Programming", copies: 8},
    {bookId: 114, title: "Artificial Intelligence", author: "Russell", category: "AI", copies: 2},
    {bookId: 115, title: "Machine Learning", author: "Tom Mitchell", category: "AI", copies: 5}, ]
    
    console.log("---Task 1: Display all books---");
    function displayAllBooks() {
        for(let i=0; i<books.length; i++) {
            console.log(`Book ID: ${books[i].bookId}\n
                Title: ${books[i].title}\n
                Author: ${books[i].author}\n
                Category: ${books[i].category}\n
                Copies: ${books[i].copies}\n`);}
            }
            displayAllBooks();


    console.log("\n---Task 2: Total number of books---\n");
    function findTotalBooks() {
        return books.length;
    }
    console.log("Total Books:", findTotalBooks());


    console.log("\n---Task 3: Low Availability Books---\n");
    function lowAvailabilityBooks() {
        for(let i=0; i<books.length; i++) {
            if(books[i].copies < 3) {
                console.log(`Book ID: ${books[i].bookId}\n
                Title: ${books[i].title}\n
                Author: ${books[i].author}\n
                Category: ${books[i].category}\n
                Copies: ${books[i].copies}\n`);
            }
        }
    }
    lowAvailabilityBooks();


    console.log("\n---Task 4: Search Books by ID---\n");
    function searchBooksById(Id) {
        for(let i=0; i<books.length; i++) {
            if(books[i].bookId === Id) {
                return books[i];
            }}}
let book=searchBooksById(105);
if(book) {
    console.log(`\n Book Found\n Title: ${book.title}\n Author: ${book.author}\n `);}
    else{
        console.log("Book not found");
    }


    console.log("\n---Task 5: Category Count---\n");
    const categoryCount = {};
    for (let i = 0; i < books.length; i++) {
        const category = books[i].category;
        if (categoryCount[category]) {
            categoryCount[category]++;
        } else {
            categoryCount[category] = 1;
        }
    }
    console.log("Category Count:", categoryCount);

    console.log("\n---Task 6: Books with Maximum Copies---\n");
    function maxBooks() {
        let maxBooks = books[0];
        for (let i = 0; i < books.length; i++) {
            if (books[i].copies > maxBooks.copies) {
                maxBooks = books[i];
            }
        }return maxBooks;}
        let max= maxBooks();
        console.log(`\n Most Available Book\n ${max.title}\n ${max.copies} `);


        console.log("\n---Task 7: Books Availability Status---\n");
        function getStatus(copies) {
            if (copies>=5) return "Available";
            else if (copies>=3) return "Limited";
            else return "Critical";
        }
        const statusCount = {Available: 0, Limited: 0, Critical: 0};
        for (let i = 0; i < books.length; i++) {
            const status = getStatus(books[i].copies);
            statusCount[status]++;
        }


        console.log("---Task 8: Count Status---\n");
        console.log(statusCount);


        console.log("\n---Task 9: Display Programming Books---\n");
        for (let i = 0; i < books.length; i++) {
             if (books[i].category === "Programming") {
                console.log(`Book ID: ${books[i].bookId}\n
                Title: ${books[i].title}\n`);}}
        
           

           
         console.log("\n---Task 10: Library Report---\n");  
         console.log("Total Book Records:", findTotalBooks());
         console.log("Available Books:", statusCount.Available);
         console.log("Limited Books:", statusCount.Limited);
         console.log("Critical Books:", statusCount.Critical);
         console.log("Highest Copies Available : ${max.copies}");
         
         console.log("--- End of Report ---");