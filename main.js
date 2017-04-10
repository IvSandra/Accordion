(function() {



var accItem = document.getElementsByTagName('h4');

for (var i = 0; i < accItem.length; i++) {
accItem[i].addEventListener('click', toggleItem, false);
}	

function toggleItem() {

this.classList.toggle("active");

        var accInner = this.nextElementSibling;
        if (accInner.style.display === "block") {
            accInner.style.display = "none";
        } else {
            accInner.style.display = "block";
        }
    }

})();


