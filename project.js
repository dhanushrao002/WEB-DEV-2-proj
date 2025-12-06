var quotes = [];
var savedQuotes = localStorage.getItem("quotes");

if(savedQuotes){
    quotes = JSON.parse(savedQuotes);
    showQuotes();
}

var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){
    var inp = document.getElementById("quoteInput");
    var q = inp.value;

    if(q.trim() !== ""){
        quotes.push(q);
        inp.value = "";
        localStorage.setItem("quotes", JSON.stringify(quotes));
        showQuotes();
    }
});

function showQuotes(){
    var list = document.getElementById("quoteList");
    list.innerHTML = "";

    for(var i=0; i<quotes.length; i++){
        var li = document.createElement("li");
        li.textContent = quotes[i];

        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        delBtn.dataset.index = i;

        li.appendChild(delBtn);
        list.appendChild(li);
    }
}

var quoteList = document.getElementById("quoteList");

quoteList.addEventListener("click", function(e){
    if(e.target.classList.contains("delBtn")){
        var idx = e.target.dataset.index;
        quotes.splice(idx, 1);
        localStorage.setItem("quotes", JSON.stringify(quotes));
        showQuotes();
    }
});
