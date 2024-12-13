function showModal(type) {
  const modalId = type === 'investor' ? 'modalInvestor' : 'modalStartup';
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideModal(type) {
  const modalId = type === 'investor' ? 'modalInvestor' : 'modalStartup';
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.className === 'modal') {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}