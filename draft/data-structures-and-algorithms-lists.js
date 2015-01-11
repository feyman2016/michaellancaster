/**
 * Bookshelf constructor
 * @class Bookshelf
 */
function List() {
    this.list = [];
    this.position = 0;
    this.listSize = this.list.length;
}

/**
 * Return current position in the list
 * @return {[number]} list current position
 * @method currPos
 */
List.prototype.currPos = function () {
    return this.position;
}

/**
 * Add element at specified position
 * @method insert
 */
List.prototype.insert = function (element, pos) {
    // this.list.slice();
}

/**
 * Add element at the next available position
 * which is equal to the listSize
 * also increment the listSize by 1 when
 * adding a new element
 * @method append
 */
List.prototype.append = function (element) {
    this.list[this.listSize++] = element;
}

/**
 * Responsible to return the number of
 * books in the list
 * @return {[number]} [number of books in the list]
 * @method 
 */
List.prototype.length = function () {
    return this.listSize;
}

/**
 * Responsible to check if book list is empty
 * @return {Boolean}
 * @method isEmpty
 */
List.prototype.isEmpty = function () {
    if ( this.listSize < 1 ) {
        return true;
    } else {
        return false;
    }
}

/**
 * Clear all elements in the list
 * @method clear
 */
List.prototype.clear = function () {
    this.list.length = this.position = 0;
}

/**
 * Move current position to the front/first in the list
 * @method front
 */
List.prototype.front = function () {
    this.position = 0;
}

/**
 * Move current position to the end in the list
 * @method end
 */
List.prototype.end = function () {
    this.position = this.listSize;
}

/**
 * Set current position on step left/back in the list
 * if not at the first element
 * @method prev
 */
List.prototype.prev = function () {
    if ( this.position === 0 ) {
        --this.position;
    }
}

/**
 * Set current position on step left/back in the list
 * if not at the first element
 * @method prev
 */
List.prototype.next = function () {
    if ( this.position !== (this.listSize - 1) ) {
        ++this.position;
    }
}

/**
 * Return string representation of the list
 * @return {[string]} list as string
 * @method toString
 */
List.prototype.toString = function () {
    return this.list.toString();
}

/**
 * Find element and return it's position
 * @param  {[type]} element [element to be search]
 * @return {[number]} element position
 * @method find
 */
List.prototype.find = function (element) {
    for ( var i = 0; i < this.list; ++i ) {
        if ( this.list[i] == element ) {
            return i;
        }
    }
}

/**
 * Find an element in the list
 * and returns true if exist or false if not
 * @param  element [element to be added in the list]
 * @return {[boolean]}
 * @method contains
 */
List.prototype.contains = function (element) {
    for ( var i = 0; i < this.list; ++i ) {
        if ( this.list[i] == element ) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Move current to specified position
 * @param  {[number]} position
 * @return {[type]}          [description]
 */
List.prototype.moveTo = function (position) {
    if ( ! position < 0 || ! position > (this.listSize - 1) ) {
        this.position = position;
    }
}






