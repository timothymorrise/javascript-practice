// Create a Book constructor that has two properties :

// Title
// Author

// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.

// and instantiate this constructor by creating 3 new books:
// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

function Book(title, author) {
	// Write your properties and methods here
	this.title = title
	this.author = author
	this.getTitle = function() {return "Title: " + this.title}
	this.getAuthor = function() {return "Author: " + this.author}
}

// Instantiate your Book constructor here
const PP = new Book("Pride and Prejudice", "Jane Austen")
const H = new Book("Hamlet", "William Shakespeare")
const WP = new Book("War and Peace", "Leo Tolstoy")