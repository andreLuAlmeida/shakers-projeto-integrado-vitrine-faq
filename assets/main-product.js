(function () {

  function initProduct() {

    const section = document.getElementById('product-section');
    if (!section) return;

    const variantsEl = document.getElementById('variants');
    const imagesEl = document.getElementById('variant-images');

    if (!variantsEl || !imagesEl) return;

    const variants = JSON.parse(variantsEl.textContent);
    const images = JSON.parse(imagesEl.textContent);

    const state = {};
    let current = null;

    const price = document.getElementById('price');
    const img = document.getElementById('product-image');
    const add = document.getElementById('add');

    if (!price || !img || !add) return;

    const format = v =>
      (v / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

    const getVariant = () =>
      variants.find(v =>
        Object.keys(state).every(k => v[k] === state[k])
      );

    function updateAvailability() {
      document.querySelectorAll('.opt').forEach(btn => {
        const key = btn.dataset.key;
        const val = btn.dataset.val;

        const test = { ...state, [key]: val };

        const available = variants.some(v =>
          Object.keys(test).every(k => v[k] === test[k]) && v.available
        );

        btn.disabled = !available;
        btn.classList.toggle('disabled', !available);
      });
    }

    document.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {

        const key = btn.dataset.key;
        const val = btn.dataset.val;

        state[key] = val;

        document
          .querySelectorAll(`[data-key="${key}"]`)
          .forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        const v = getVariant();
        if (!v) return;

        current = v;

        price.innerHTML = v.compare_at_price > v.price
          ? `${format(v.price)} <span class="compare">${format(v.compare_at_price)}</span>`
          : format(v.price);

        add.disabled = !v.available;

        if (images[v.id]) {
          img.src = images[v.id];
        }

        updateAvailability();
      });
    });

    add.addEventListener('click', async () => {
      if (!current) return;

      add.classList.add('loading');
      add.textContent = 'Adicionando...';

      try {
        await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: current.id, quantity: 1 }]
          })
        });

        const cart = await fetch('/cart.js').then(r => r.json());

        add.classList.remove('loading');
        add.classList.add('success');
        add.textContent = 'Adicionado';

        document.dispatchEvent(new CustomEvent('cart:update', {
          detail: { count: cart.item_count }
        }));

        setTimeout(() => {
          add.classList.remove('success');
          add.textContent = 'Adicionar ao carrinho';
        }, 1400);

      } catch {
        add.classList.remove('loading');
        add.textContent = 'Erro';
      }
    });

    document.querySelectorAll('.thumb').forEach(t => {
      t.addEventListener('click', () => {
        img.src = t.dataset.image;
      });
    });

    updateAvailability();
  }

  document.addEventListener('DOMContentLoaded', initProduct);
  document.addEventListener('shopify:section:load', initProduct);

})();