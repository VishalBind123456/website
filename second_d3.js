function clicked(){
    //var svg_cont = 
    d3.select("#svg_rect").append("svg")
        .attr("id","svg1")
        .attr("height","30em")
        .attr("width","80%")
        .style("background-color","lightblue")
        .style("border","10px solid brown");

    for(var i = 1 ; i < 4 ; i++){
        d3.select("#svg1").append("rect")
            .attr("x",i*100)
            .attr("y",100)
            .attr("height","10em")
            .attr("width","13")
            .style("stroke","brown")
            .style("fill","green");
    }

}