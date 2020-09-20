let container = document.querySelector("#container");
        let div;

        for (let i = 0; i < 256; i++) {
            div = document.createElement("div");
            div.classList.add("cell");
            container.appendChild(div);
        }

        
        let allDivs = document.querySelectorAll(".cell");
        
        //Black
        let black = document.getElementById("black1");
        black.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("black");
                })
            })
        })
        
        
        //Blue
        let blue = document.getElementById("blue1");
        blue.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("blue");
                })
            })
        })

        
        //Green
        let green = document.getElementById("green1");
        green.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("green");
                })
            })
        })

        
        //Grey
        let grey = document.getElementById("grey1");
        grey.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("grey");
                })
            })
        })
        
        //Red
        let red = document.getElementById("red1");
        red.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("red");
                })
            })
        })

        //Yellow
        let yellow = document.getElementById("yellow1");
        yellow.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add("yellow");
                })
            })
        })

        //Random
        let colorArray = ["black", "blue", "green", "grey", "red", "yellow"];
        let randomColor = Math.floor(Math.random()*colorArray.length);

        let random = document.getElementById("random1");
        random.addEventListener("click", function(){
            allDivs.forEach(function(item){
                item.addEventListener("mouseover", function(){
                    item.classList.remove("black", "blue", "green", "grey", "red", "yellow");
                    item.classList.add(colorArray[randomColor]);
                })
            })
        })



        
        let reset = document.getElementById("btn");
        reset.addEventListener("click", function(){
            allDivs.forEach(function(item) {
                item.classList.remove("black", "blue", "green", "grey", "red", "yellow", "random");
            })
        })