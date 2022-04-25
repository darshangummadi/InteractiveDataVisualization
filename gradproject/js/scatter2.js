function load_second_visualization(svg_name, data, x_field, y_field){
    let chart = d3.select(svg_name);
    chart_width = $(svg_name).width();
    chart_height = $(svg_name).height();

    xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d[x_field]))
                .range([50,chart_width-50]);
    
    yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d[y_field]))
                .range([chart_height-50, 50]);
    

    chart.selectAll("circle")
            .data(data).enter()
                .append("circle")
                    .attr("class","rings")
                    .attr("cx", function(d){ return xScale(d[x_field]); })
                    .attr("cy", function(d){ return yScale(d[y_field]); })
                    .attr("r", 5)
                    .attr("stroke-width","2px")
                    .attr("fill-opacity",0.9);

    let xax_height = chart_height - 40;
    
    xAxis = chart.append("g")
                .attr("transform","translate(0,"+xax_height+")")
                .call(d3.axisBottom().scale(xScale));
            
    yAxis = chart.append("g")
                .attr("transform","translate(30,0)")
                .call(d3.axisLeft().scale(yScale));

    chart.append("text")
            .text("Family members")
            .attr("y",(xax_height+30))
            .attr("dx",chart_width/2 - 75)
            .style("text-anchor","middle")
            .style("font-weight","bold");

    chart.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",10)
        .attr("dx",(-chart_height+30)/2 + 20)
        .style("text-anchor","end")
        .text("Age")
        .style("font-weight","bold");
        
    
}