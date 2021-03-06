// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);
var tbody=d3.select('#ufo-table').select('tbody');

for (var i=0; i<tableData.length; i++){
    var curr_row=tableData[i];
    var row=tbody.append('tr')
    // var value=row.append('td')
    // value.text(curr_row['datetime']);
    // value=row.append('td')
    // value.text(curr_row['city']);
    // value=row.append('td')
    // value.text(curr_row['state']);
    // value=row.append('td')
    // value.text(curr_row['country']);
    // value=row.append('td')
    // value.text(curr_row['shape']);
    // value=row.append('td')
    // value.text(curr_row['durationMinutes']);
    // value=row.append('td')
    // value.text(curr_row['comments']);
    Object.keys(curr_row).forEach(each_key=>{
        var value=row.append('td');
        value.text(curr_row[each_key]);
    });
};

function handleClick(){
    tbody.html('');
    var filter_input=d3.select('#datetime').property('value');
    console.log(filter_input)
    // console.log(filter_input.property('value'));
    // var filter_table=tableData.filter(element => function plot(element) {
    //     element['datetime']==filter_input;
    // });
    var filter_table=tableData.filter(element => element['datetime']==filter_input);
    console.log(filter_table);
    for (var i=0; i<filter_table.length; i++){
        var curr_row=filter_table[i];
        var row=tbody.append('tr')
        Object.keys(curr_row).forEach(each_key=>{
            var value=row.append('td');
            value.text(curr_row[each_key]);
        });
    };
};

var filter_btn=d3.select('#filter-btn');
filter_btn.on('click', handleClick);

// console.log(first_row);