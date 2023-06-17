document.addEventListener('DOMContentLoaded', function() {
    const category1Select = document.getElementById('category1-select');
    const category2Select = document.getElementById('category2-select');
    const category3Select = document.getElementById('category3-select');
    const category4Select = document.getElementById('category4-select');
    const discountSelect = document.getElementById('discount-select');
    const totalSpan = document.getElementById('total');
    const prices = {
      'BurgueDia': 22,
      'BurgueMes': 30,
      'BurguePrazer': 29,
      'BurgueOlho': 20,
      'BurgueEggplosao': 18,
      'BurgueTudoNela': 45,
      'BurgueVege': 30,

      'Uva': 6,
      'Abacaxi': 5,
      'Maracuja': 6,
      'Morango': 7,
      'Coca_Cola': 10,
      'Coca_Lata': 7,
      'H2O': 5,
      'Guarana_Lata': 7,
      'Skol': 5,

      'PorcaoCamarao': 80,
      'PorcaoPrazer': 35,
      'PorcaoCalabreza': 20,
      'PorcaoFrango': 25,
      'PorcaoNacho': 15,

      'ComboCasal': 45,
      'ComboFamilia': 75,
      'ComboGiga': 40,
      'ComboBacon': 51,
      'ComboCheese': 42,
      'ComboDuplo': 37
    };
  
    category1Select.addEventListener('change', updateTotalPrice);
    category2Select.addEventListener('change', updateTotalPrice);
    category3Select.addEventListener('change', updateTotalPrice);
    category4Select.addEventListener('change', updateTotalPrice);
    discountSelect.addEventListener('change', updateTotalPrice);
  
    function updateTotalPrice() {
      const selectedCategory1 = category1Select.value;
      const selectedCategory2 = category2Select.value;
      const selectedCategory3 = category3Select.value;
      const selectedCategory4 = category4Select.value;
      const discount = parseFloat(discountSelect.value) || 0;
      
      const totalPrice = calculateTotalPrice(selectedCategory1, selectedCategory2, selectedCategory3, selectedCategory4);
      const discountedPrice = applyDiscount(totalPrice, discount);
      totalSpan.innerText = 'R$ ' + discountedPrice.toFixed(2);
    }
  
    function calculateTotalPrice(category1, category2, category3, category4) {
      let totalPrice = 0;
      
      if (category1) {
        totalPrice += prices[category1] || 0;
      }
      
      if (category2) {
        totalPrice += prices[category2] || 0;
      }
      
      if (category3) {
        totalPrice += prices[category3] || 0;
      }
      
      if (category4) {
        totalPrice += prices[category4] || 0;
      }
      
      return totalPrice;
    }
  
    function applyDiscount(totalPrice, discount) {
      const discountedPrice = totalPrice - (totalPrice * (discount / 100));
      return discountedPrice;
    }
  });
  