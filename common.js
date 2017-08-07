(function (global, document) {
	var common =  global.common = global.common || {};
	common.X = function(elem) {
		return {
			click: function(func) {
				console.log(elem);
				if (elem.length > 1) {
					var i;
					for (i = 0; i < elem.length; i++) {
						elem[i].addEventListener('click', func);
					}
				} 
				else{
					elem[0].addEventListener('click', func);
				}
			},
			getElem: function(query){
				return document.querySelectorAll(query);
			},
			updateHtml : function(html){
				elem[0].innerHTML = html;
			},
			appendHTML : function (html) {
				elem[0].innerHTML +=html;
            },
			keyup: function(func){
				if (elem.length > 1) {
					var i;
					for (i = 0; i < elem.length; i++) {
						elem[i].addEventListener('keyup', func);
					}
				} else {
					elem[0].addEventListener('keyup', func);
				}
			},
			save : function(name,item){
				console.log(JSON.stringify(item));
				localStorage.setItem(name, JSON.stringify(item));
			},
			removeItem : function(name){
				localStorage.removeItem(name);
			},

			getSavedItem : function(name){
				return JSON.parse(localStorage.getItem(name));
			},
			addClass : function (className) {
                if (elem.length > 1) {
                    var i;

                    for (i = 0; i < elem.length; i++) {
                        elem[i].classList.add(className);
                    }
                } else {
                    elem[0].classList.add(className);
                }
            },

            removeClass : function (className) {
                if (elem.length > 1) {
                    var i;
                    for (i = 0; i < elem.length; i++) {
                        elem[i].classList.remove(className);
                    }
                } else {
                    elem[0].classList.remove(className);
                }
            },
			
			readJsonGet : function (jsonName,func) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
						func(JSON.parse(this.responseText));
                    }
                };
                xhttp.open("GET", jsonName , true);
                xhttp.send();
            }

		};
	};
}(window, document));