 const ethereumRequest = fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30')
    .then(response => response.json())
    .then(data => {
      const prices = data.prices;
      const timestamps = prices.map(price => new Date(price[0]).toLocaleDateString());

      const ctx = document.getElementById('myethereumChart').getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'Preço do Ethereum em USD',
              data: prices.map(price => price[1]),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });