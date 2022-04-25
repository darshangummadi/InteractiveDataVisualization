function loadscatterplot(data,svg_name){

    let chart = d3.select(svg_name);
    chart_width = $(svg_name).width();
    chart_height = $(svg_name).height();

    birds = data.length;
    //alert(no_of_passengers);
    bird_name = 
    data.filter(function(d){ return d.bird_name=="Rose-crested Blue Pipit"})


    console.log(bird_name);
    
    /*let new_data = [];

    embarked_locs = d3.map(data, d => d.embarked).keys();
    embarked_locs.splice(3,1);  // Removing null values
    //alert(embarked_locs);
    embarked_locs.forEach(ele => {
        obj = {};
        obj[field] = ele;  // field = "Embarked"
        perc_of_pass = no_of_ps_emb(ele)/no_of_passengers * 100;
        obj['% of total pass'] = perc_of_pass;
        new_data.push(obj);
    });
    
    //new_data.splice(3,1);  */

    xScale = d3.scaleLinear()
                .domain([0,160])
                .range([30,chart_width - 30]);

    yScale = d3.scaleLinear()
                .domain([0, 160])
                .range([chart_height - 70, 80]);

    

    // chart.selectAll("rect")
    //     .data(new_data).enter()
    //         .append("rect")
    //             .attr("x", function(d) {  return xScale(d["embarked"]); })
    //             .attr("y", function(d) {  return yScale(d['% of total pass']); })
    //             .attr("width", "150px")
    //             .attr("height", chart_height - 30)
    //             .attr("fill", function(d) { return colorScale(d["embarked"]);
    //         });

    chart.selectAll("circle")
        .data(bird_name).enter()
            .append("circle")
                .attr("cx", function(d) {  
                    console.log(d.xcordinate);
                    return xScale(d["xcordinate"]); })
                .attr("cy", function(d) {  
                    return yScale(d["ycordinate"]); })
                    .attr("r", 5)
                    .attr("stroke-width","2px")
                    .attr("fill-opacity",0.9)
                //.attr("height", d=> yScale(100-d["% of total pass"]))//chart_height - 30)
                .attr("fill", "blue");

    
    yAxis = chart.append("g")
                .attr("transform", "translate(40,-50)")
                .call(d3.axisLeft().scale(yScale));

    xAxis = chart.append("g")
                .attr("transform", "translate(10,"+(chart_height-40)+")")
                .call(d3.axisBottom().scale(xScale));

    chart.append("text")
            .text("Embarkment location")
            .attr("y",chart_height-20)
            .attr("dx",chart_width/2 - 150)
            .style("text-anchor","middle")
            .attr("font-weight","bold");

    chart.append("text")
        .text("% of total no. of passengers")
        .attr("transform", "rotate(-90)")
        .attr("y",13)
        .attr("dx",-180)
        .style("text-anchor","end")
        .attr("font-weight","bold");;

    
      
}