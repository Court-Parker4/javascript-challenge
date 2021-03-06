// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select('#ufo-table').select('tbody');

for (var i=0; i<tableData.length; i++){
    var curr_row=tableData[i];
    var row=tbody.append('tr')
    Object.keys(curr_row).forEach(each_key=>{
        var value=row.append('td');
        value.text(curr_row[each_key]);
    });
};

function handleClick(){
    tbody.html('');
    var filter_input=d3.select('#datetime').property('value');
    console.log(filter_input)
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