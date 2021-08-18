// constructor for CSV data provider
function CSVDataProvider(){}

// method for getting data from source in CSV form
CSVDataProvider.prototype.getData = function(){
  return { 
       title : 'data in CSV',
       data : 'dataInCSV'
    };
};

// constructor for Charts 
function Charts(){}

// makeChart method for making charts using given data 
Charts.prototype.makeChart = function(data){
  console.log(`chart for ${data.title}`);
};

// makeGraph method for making graphs using given data 
Charts.prototype.makeGraph = function(data){
  console.log(`graph for ${data.title}`);
};

// Constructor for Adapter for CSV
function AdapterForCSV(adaptee){
  this.adaptee = adaptee;
}

// method to convert CSV to JSON
AdapterForCSV.prototype.convertCSVtoJSON = function (data){
  data.data = 'dataInJSON';
  return data
};

// method to make chart using the converted data
AdapterForCSV.prototype.makeChart = function(data){
  const dataInJSON = this.convertCSVtoJSON(data);
  this.adaptee.makeChart(dataInJSON);
}

// method to make graph using the converted data
AdapterForCSV.prototype.makeGraph = function(data){
  const dataInJSON = this.convertCSVtoJSON(data);
  this.adaptee.makeGraph();
}

function run(){
  const chartmaker = new Charts();
  const dataProvider = new CSVDataProvider();
  const csvAdapter = new AdapterForCSV(chartmaker);

  csvAdapter.makeChart(dataProvider.getData());
}

run();