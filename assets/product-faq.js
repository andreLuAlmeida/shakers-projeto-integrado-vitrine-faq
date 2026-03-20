(function () {

  function initFAQ() {

    const section = document.getElementById('product-faq');
    if (!section) return;

    const items = section.querySelectorAll('.faq-item');

    items.forEach(item => {

      const btn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!btn || !answer) return;

      btn.addEventListener('click', () => {

        const isOpen = item.classList.contains('open');

        items.forEach(i => {
          i.classList.remove('open');
          const a = i.querySelector('.faq-answer');
          if (a) a.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }

      });

    });

  }

  document.addEventListener('DOMContentLoaded', initFAQ);
  document.addEventListener('shopify:section:load', initFAQ);

})();