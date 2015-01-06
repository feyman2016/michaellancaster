/**
 * Bookshelf constructor
 * @class Bookshelf
 */
function Bookshelf() {
    this.books = [];
    this.listSize = this.books.length;
}

/**
 * Responsible to insert element at the beginning
 * @method insert
 */
Bookshelf.prototype.insert = function() {

}

/**
 * Responsible to append element at certain position
 * @method append
 */
Bookshelf.prototype.append = function() {

}

/**
 * Responsible to return the number of
 * books in the list
 * @return {[number]} [number of books in the list]
 * @method 
 */
Bookshelf.prototype.length = function() {
    return this.listSize;
}

/**
 * Responsible to check if book list is empty
 * @return {Boolean}
 * @method isEmpty
 */
Bookshelf.prototype.isEmpty = function() {
    if ( this.listSize < 1 ) {
        return true;
    } else {
        return false;
    }
}