const bitcoinRequest = fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30')
    .then(response => response.json())
    .then(data => {
      const prices = data.prices;
      const timestamps = prices.map(price => new Date(price[0]).toLocaleDateString());

      const ctx = document.getElementById('mybitcoinChart').getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'Preço do Bitcoin em USD',
              data: prices.map(price => price[1]),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
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