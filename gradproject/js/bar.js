function loadbar(data,svg_name){

    let chart = d3.select(svg_name);
    chart_width = $(svg_name).width();
    chart_height = $(svg_name).height();

    birds = data.length;
 
    bird_name = data;


    var tooltips = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "black")
        .style("border-radius", "4px")
        .style("color", "white").style("padding", "5px")


    console.log(bird_name);
    
  

    xScale = d3.scaleLinear()
                .domain([2007, 2018])
                .range([50,chart_width - 30]);

    yScale = d3.scaleLinear()
                .domain([0, 20])
                .range([chart_height - 40, 0]);

    

    chart.selectAll("rect")
        .data(bird_name).enter()
            .append("rect")
                .attr("class", "dot")
                .attr("x", function(d) {  return xScale(d.Year); })
                .attr("y", function(d) {  return yScale(d.noofentries); })
                .attr("width", "20px")
                .attr("height", function(d) { return yScale(20 - d.noofentries); })
                .attr("fill", "#ff884d")
                .on("mouseover", function(d) {
                    tooltips.style("visibility", "visible")
                    .html("Year: " + d["Year"] + "<br>" + "No_of_entries: " + d["noofentries"])
                })
                .on("mousemove", function(d) {
                    tooltips.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
                })

   
    
    yAxis = chart.append("g")
                .attr("transform", "translate(40,0)")
                .call(d3.axisLeft().scale(yScale));

    xAxis = chart.append("g")
                .attr("transform", "translate(10,"+(chart_height-40)+")")
                .call(d3.axisBottom().scale(xScale));

    chart.append("text")
            .text("Year")
            .attr("y",chart_height-10)
            .attr("dx",chart_width/2 - 10)
            .style("text-anchor","middle")
            .attr("font-weight","bold");

    chart.append("text")
        .text("No of entries of birds in the Lekagul Nature Preserve")
        .attr("transform", "rotate(-90)")
        .attr("y",15)
        .attr("dx",-100)
        .style("text-anchor","end")
        .attr("font-weight","bold");;

    
      
}