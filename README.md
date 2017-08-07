# Custom-dropDown
This repo contain an plugin for creating quick custom drop down
# User guide
main.css file contains CSS styling for the search bar (can be customized as per liking) and main.js contain the constructor 
class for Dropdown object. common.js is the common library and onload.js file contains sample code on how to use this.

## Sample HTML Code
    <ul class="dropdown"> 
        <input placeholder="Please type here for search" class="search-input"></input>
        <li class="dropdown-item" value="item1">Hement</li>
        <li class="dropdown-item" value="item1">Item2</li>
    </ul>
    
By adding classes "dropdown" "search-input" "dropdown-items" as listed in above html code and creating dropdown object in 
javascript file we should be able to use this search functionality
## JS Code:-
            var dropdown = new Dropdown();
            dropdown.dropDown();


## Necessary filese 
Necessary filese for including this in your project are main.css, common.js, and myJs.js

### Contact
For any query and suggestion please write me on hementsharma@outlook.com
