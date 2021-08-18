
// class for csv data provider
class CSVDataProvider {

  // method for geetting data
  getData() {
    return {
      title: 'data in CSV',
      data: 'dataInCSV'
    };
  }
}

// class for making analytics 
class Charts {

  // method for making charts
  makeChart(data) {
    console.log(`chart for ${data.title}`);
  }

  // method for making graphs
  makeGraph(data) {
    console.log(`graph for ${data.title}`);
  }
}

// an adapter to make data provider and chart maker compatible
class AdapterForCSV {
  constructor(adaptee) {
    this.adaptee = adaptee;
  }

  // method to convert csv into json
  convertCSVtoJSON(data) {
    data.data = 'dataInJSON';
    return data
  }

  // makeChart method which uses convertCSVtoJSON method and make use of adaptee's makeChart method
  makeChart(data) {
    const dataInJSON = this.convertCSVtoJSON(data);
    this.adaptee.makeChart(dataInJSON);
  }

  // makeGraph method which uses convertCSVtoJSON method and make use of adaptee's makeGraph method
  makeGraph(data) {
    const dataInJSON = this.convertCSVtoJSON(data);
    this.adaptee.makeGraph();
  }
}

function run() {
  const chartmaker = new Charts();
  const dataProvider = new CSVDataProvider();
  const csvAdapter = new AdapterForCSV(chartmaker);

  csvAdapter.makeChart(dataProvider.getData());
}

run();