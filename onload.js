/**
 * Created by hementsharma on 07/08/17.
 */
window.onload = function () {
    function buildDom(){
        var X = common.X;
        X().readJsonGet('main.Json',function (response) {
            var htmlString = '<li class="dropdown-item hidden" value="%VALUE%">%NAME%</li>';
            var dropDown = X().getElem(".dropdown");
            for(i in response){
                X(dropDown).appendHTML(htmlString.replace('%VALUE%',i).replace('%NAME%',response[i]));
            }

            //creation dropdown operations after DOM is build
            var dropdown = new Dropdown();
            dropdown.dropDown();
        });
    }
    buildDom();
};