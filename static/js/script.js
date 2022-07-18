const accordions = Array.from(document.querySelectorAll('.accordion__header'));

/**
 * Toggle the accordion
 * @param {Element} header - The accordion header element.
 * @param {Boolean} [expanded] - Expands the accordion, otherwise collapses it (default: false).
 */
const toggleAccordion = (header, expanded = false) => {
  const content = header.nextElementSibling;

  if (!content) return;

  if (expanded) {
    header.classList.add('open');
    content.style['max-height'] = content.scrollHeight + 'px';
    content.style['margin-top'] = '1rem';
  } else {
    header.classList.remove('open');
    content.style['max-height'] = null;
    content.style['margin-top'] = null;
  }
};

accordions.forEach(title => {
  title.addEventListener('click', () => {
    if (title.classList.contains('open')) {
      toggleAccordion(title, false);
    } else {
      accordions.forEach(a => toggleAccordion(a, false));
      toggleAccordion(title, true);
    }
  });
});
