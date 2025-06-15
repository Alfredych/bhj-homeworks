document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('.tab__navigation').forEach(container => {
    container.addEventListener('click', function(e) {
      const tab = e.target.closest('.tab');
      if (!tab) return;
      
      const tabs = this.querySelectorAll('.tab');
      const index = Array.from(tabs).indexOf(tab);
      const tabContents = this.nextElementSibling.querySelectorAll('.tab__content');
      
      tabs.forEach(t => t.classList.remove('tab_active'));
      tabContents.forEach(c => c.classList.remove('tab__content_active'));
      
      tab.classList.add('tab_active');
      tabContents[index].classList.add('tab__content_active');
    });
  });
});