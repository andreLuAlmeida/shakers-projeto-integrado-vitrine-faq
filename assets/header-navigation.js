(function () {

  function initHeader() {

    const cartEl = document.getElementById('cart-count');
    if (!cartEl) return;

    async function updateCartCount() {
      try {
        const res = await fetch('/cart.js');
        const cart = await res.json();

        cartEl.textContent = cart.item_count;

        cartEl.classList.add('bump');
        setTimeout(() => cartEl.classList.remove('bump'), 250);

      } catch (e) {
        console.log('Erro ao atualizar carrinho');
      }
    }

    updateCartCount();

    document.addEventListener('cart:update', updateCartCount);

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) updateCartCount();
    });
  }

  document.addEventListener('DOMContentLoaded', initHeader);
  document.addEventListener('shopify:section:load', initHeader);

})();