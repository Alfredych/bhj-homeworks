document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('has-tooltip')) {
      e.preventDefault();
      const tooltipText = e.target.getAttribute('title');
      const rect = e.target.getBoundingClientRect();
      tooltip.textContent = tooltipText;
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = rect.bottom + 'px';
      
      if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.remove('tooltip_active');
      } else {
        tooltip.classList.add('tooltip_active');
      }
    } else {
      tooltip.classList.remove('tooltip_active');
    }
  });
});