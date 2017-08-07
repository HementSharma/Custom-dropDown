/**
 * Created by hementsharma on 30/07/17.
 */
window.onload = function() {
    var Dropdown = function() {

        this.dropDown = function() {
            /*
             dropdown will contain all dropdown Elements;
             */
            var dropdown = document.querySelectorAll(".dropdown");
            /*
            bind mothod will bind different actions for dropdown element
             */
            for (i = 0; i < dropdown.length; i++) {
                bindmethod(dropdown[i]);
            }
        };

        var bindmethod = function(dropdownElement) {
            var listItems = dropdownElement.querySelectorAll("li");
            var input = dropdownElement.querySelector("input");
            input.dataset.node = 0;
            input.setAttribute("node", -1);
            /*
            Display the items on click
             */
            input.addEventListener('click', function() {
                unhideList(input, listItems);
            });

            /*
             impliment item selection on click
             */
            for (i = 0; i < listItems.length; i++) {
                listItems[i].addEventListener('click', function() {
                    this.parentNode.querySelector("input").value = this.innerHTML;
                    hideList(input, listItems);
                });
            };
            /*
            Impliment Search and keys up and down logic
             */
            input.addEventListener('keyup', function(evt) {
                /*
                    node is an integer having value from 0 to dropdown list length -1 and in saved with input element to determine currently selected item
                */
                var node = parseInt(this.getAttribute("node"));
                /*
                    Detect arrowUp arrowDown and enter key's press
                */
                if (evt.code == "ArrowDown" | evt.code == "ArrowUp" | evt.code == "Enter") {
                    /*
                    detect arrow keys for selection
                     */
                    /*
                       local list Item will select only visible entries and thus removes the items eliminated via search option
                    */
                    var locallistItems = dropdownElement.querySelectorAll("li:not(.hidden)"); //select only non hidden

                    /*
                        If arrowdown key is pressed and its not the last item then increase the node count and remove the selected item and select the next item
                    */
                    if (evt.code == "ArrowDown" && node < locallistItems.length - 1) {
                        node += 1;
                        locallistItems[node].classList.add("selected");
                        if (node > 0) {
                            locallistItems[node - 1].classList.remove("selected");
                        }
                        dropdownElement.querySelector("input").setAttribute('node', node.toString());  //save the node 
                    }
                    /*
                        If arrowup key is pressed and its not the first item then increase the node count and remove the selected item and select the previous item

                    */
                    else if (evt.code == "ArrowUp" && node > 0) {
                        if (node >= 1) {
                            locallistItems[node].classList.remove("selected");
                            node -= 1;
                            locallistItems[node].classList.add("selected");
                        }
                        dropdownElement.querySelector("input").setAttribute('node', node.toString());
                    } 
                    /*
                        restert from bigining if the last item is selected
                    */
                    else if (evt.code == "ArrowDown" && node == locallistItems.length - 1) {
                        locallistItems[node].classList.remove("selected");
                        node = 0;
                        locallistItems[node].classList.add("selected");
                        dropdownElement.querySelector("input").setAttribute('node', node.toString());
                    } 
                    /*
                     Start from last if first item is reached
                    */
                    else if (evt.code == "ArrowUp" && node == 0) {
                        locallistItems[node].classList.remove("selected");
                        node = locallistItems.length - 1;
                        locallistItems[node].classList.add("selected");
                        dropdownElement.querySelector("input").setAttribute('node', node.toString());
                    }
                    /*
                        Update the input element if enter is pressed
                    */
                    if (evt.code == "Enter") {
                        var item = document.querySelector(".dropdown .selected");
                        if (item) {
                            this.value = item.innerHTML;
                            item.classList.remove("selected");
                            this.setAttribute("node", 0);
                            hideList(input, listItems);
                        }
                    }
                } else {
                    /*
                    Search logic if any other key is pressed except for keyup keydown and enter 
                     */
                    //remove all selected class
                    var locallistItems = dropdownElement.querySelectorAll(".selected");
                    dropdownElement.querySelector("input").setAttribute('node', -1);
                    for (i = 0; i < locallistItems.length; i++) {
                        locallistItems[i].classList.remove("selected");
                    }
                    /*
                        Hide all element except the one containing search string
                    */
                    var input = this.value;
                    hideList(input, listItems);
                    for (i = 0; i < listItems.length; i++) {
                        if (listItems[i].innerHTML.indexOf(input) >= 0) {
                            unhideList(input, listItems, i);
                        }
                    }
                }

            });
            closeMenuOutsideClick(input,listItems);
        };

        var closeMenuOutsideClick = function (input,listItems) {
            window.addEventListener('click',function (evt) {
                if(!evt.target.classList.contains('search-input')){
                    //hide list
                    hideList(input,listItems);
                }
            });
        };

        /*
            below function will hilde all elemnts of for listItems if only 2 paramter given else will hide only the element number given in the third parameter
        */
        var hideList = function(input, listItems, list) {
                if (arguments.length <= 2) {
                    for (i = 0; i < listItems.length; i++) {
                        listItems[i].classList.add("hidden");
                    }
                } else {
                    listItems[list].classList.add("hidden");

                }
            }
            /*
                below function will Show all elemnts of for listItems if only 2 paramter given else will show only the element number given in the third parameter
            */

        var unhideList = function(input, listItems, item) {
            if (arguments.length <= 2) {
                for (i = 0; i < listItems.length; i++) {
                    listItems[i].classList.remove("hidden");
                }
            } else {
                listItems[item].classList.remove("hidden");
            }
        }
    };

    var dropdown = new Dropdown();
    dropdown.dropDown();
};