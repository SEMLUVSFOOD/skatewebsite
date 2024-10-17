const faqsContainer = document.getElementById('FAQs-container');

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    const faqItem = e.currentTarget;
    faqItem.classList.toggle('show-answer');
  });
});
