document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  
  document.addEventListener('click', function(e) {

    if (e.target.classList.contains('has-tooltip')) {
      e.preventDefault();
      const tooltipText = e.target.getAttribute('title');
      const rect = e.target.getBoundingClientRect();
      
      if (tooltip.textContent === tooltipText) {
        tooltip.classList.toggle('tooltip_active');
      } else {
        tooltip.textContent = tooltipText;
        tooltip.classList.add('tooltip_active');
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = rect.bottom + 'px';
      }
            
    } else {
      tooltip.classList.remove('tooltip_active');
    }
  });
});