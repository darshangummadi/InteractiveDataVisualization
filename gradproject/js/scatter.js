function loadscatterplot(data,svg_name){

    let chart = d3.select(svg_name);
    chart_width = $(svg_name).width();
    chart_height = $(svg_name).height();

    birds = data.length;

    var tooltips = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "black")
        .style("border-radius", "4px")
        .style("color", "white").style("padding", "5px")
    
    bird_name = 
    data.filter(function(d){ return d.bird_name=="Rose-crested Blue Pipit"})


    console.log(bird_name);
    xScale = d3.scaleLinear()
                .domain([0,160])
                .range([30,chart_width - 90]);

    yScale = d3.scaleLinear()
                .domain([0, 160])
                .range([chart_height - 70, 80]);


    chart.selectAll("circle")
        .data(bird_name).enter()
            .append("circle")
                .attr("class", "dot")
                .attr("cx", function(d) {  
                
                    return xScale(d["xcordinate"]); })
                .attr("cy", function(d) {  
                    return yScale(d["ycordinate"]); })
                    .attr("r", 5)
                    .attr("stroke-width","2px")
                    .attr("fill-opacity",0.9)
                .attr("fill", "#77b300")
                .on("mouseover", function(d) {
                    tooltips.style("visibility", "visible")
                    .html("Year: " + d["date"] + "<br>" + "X: " + d["xcordinate"] + "<br>" + "Y: " + d["ycordinate"])
                })
                .on("mousemove", function(d) {
                    tooltips.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
                });

    
    yAxis = chart.append("g")
                .attr("transform", "translate(40,-50)")
                .call(d3.axisLeft().scale(yScale));

    xAxis = chart.append("g")
                .attr("transform", "translate(50,"+(chart_height-40)+")")
                .call(d3.axisBottom().scale(xScale));

    chart.append("text")
            .text("X cordinates of the Boonsong Lekagul Nature Preserve")
            .attr("y",chart_height-10)
            .attr("dx",chart_width/2 - 10)
            .style("text-anchor","middle")
            .attr("font-weight","bold");

    chart.append("text")
        .text("Y cordinates of the Boonsong Lekagul Nature Preserve")
        .attr("transform", "rotate(-90)")
        .attr("y",15)
        .attr("dx",-100)
        .style("text-anchor","end")
        .attr("font-weight","bold");;

    
      
}