document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budgetForm');
    const goalContainer = document.getElementById('goalContainer');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const type = document.getElementById('goalType').value;
      const category = document.getElementById('goalCategory').value;
      const amount = document.getElementById('budgetAmount').value;
      const period = document.getElementById('goalPeriod').value;
  
      const card = document.createElement('div');
      card.classList.add('goal-card');
      card.innerHTML = `
        <div>
          <strong>${type.toUpperCase()}</strong> (${period})<br>
          Category: ${category}<br>
          Target: $${amount}
        </div>
        <button class="delete-btn">✕</button>
      `;
  
      goalContainer.appendChild(card);
  
      // Remove goal
      card.querySelector('.delete-btn').addEventListener('click', () => {
        goalContainer.removeChild(card);
      });
  
      form.reset();
    });
  });
  