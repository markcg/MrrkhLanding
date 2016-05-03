(function() {
    var randKeyword = {
        e: null,
        words: ['Mark', 'Mrrkh', 'Web Developer', 'Software Engineer', 'Marketing Consultant', 'Software Consultant', 'Mobile Developer'],
        current: 0,
        init: function() {
            this.e = document.getElementById("keywordMark");
            setInterval(function(){randKeyword.random()}, 1000);
        },
        random: function() {
            size = this.words.length;
            index = Math.floor((Math.random() * size));
            if(index == this.current){
            	this.random();
            }else{
            	this.current = index;
            	this.e.innerHTML = this.words[index];
            }
            
        }
    };
    randKeyword.init();
})();