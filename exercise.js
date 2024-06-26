// Fungsi untuk mengkonversi Celsius ke Fahrenheit
function celsiusKeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Contoh penggunaan
  let celsius = 60;
  let fahrenheit = celsiusKeFahrenheit(celsius);
  console.log(`${celsius} Celsius sama dengan ${fahrenheit} Fahrenheit`);
  