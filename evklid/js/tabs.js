document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tab-button').forEach(function(TabsBtn) {
    TabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content_active')
      document.querySelectorAll('.tab-button').forEach(function(tabButton) {
        tabButton.classList.remove('tab_active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tab_active')
    })
  })
})
