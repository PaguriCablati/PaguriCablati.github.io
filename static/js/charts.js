var data1 = {
  labels: ["Sì", "No"],
  datasets: [{
    label: 'numero di persone',
    data: [79, 87],
    backgroundColor: [
      '#ff6384',
      '#36a2eb'
    ],
    hoverOffset: 4
  }]
};

var data2 = {
  labels: ["Fibra ottica", "Rame", "Satellitare"],
  datasets: [{
    label: 'numero di utenti',
    data: [70, 27, 13],
    backgroundColor: [
      '#ff6384',
      '#36a2eb',
      '#daa520',
    ],
    hoverOffset: 4
  }]
};

var data3 = {
  labels: ["Fibra ottica", "Rame", "Satellitare"],
  datasets: [{
    label: "Veramente scarsa",
    backgroundColor: 'blue',
    data: [1, 4, 0],
  },{
    label: "Scarsa",
    backgroundColor: 'orangered',
    data: [3, 4, 3],
  }, {
    label: "Mediocre",
    backgroundColor: 'gold',
    data: [25, 10, 4],
  }, {
    label: "Ottima",
    backgroundColor: 'green',
    data: [26, 8, 3],
  }, {
    label: "Eccellente",
    backgroundColor: 'brown',
    data: [15, 1, 3]
  }]
};

datalabels = {
  formatter: (value, ctx) => {
    let dataArr = ctx.chart.data.datasets[0].data;
    let sum = dataArr.reduce((sum, data) => sum + data, 0);
    return (value * 100 / sum).toFixed(2) + '%';
  },
  font: {
    size: 18,
    weight: 'bold',
  },
  color: '#ffffff'
};

var options1 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Percentuale di persone a conoscenza dei lavori',
      font: {
        size: 32
      }
    },
    datalabels: datalabels
  }
};

var options2 = {
  responsive: true,
  plugins: {
      title: {
          display: true,
          text: 'Percentuale di utenti per tipo di connessione',
          font: {
              size: 32
          }
      },
      datalabels: datalabels
  }
};
