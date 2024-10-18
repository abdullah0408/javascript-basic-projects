document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.querySelector("#expense-form");
  const expenseName = document.querySelector("#expense-name");
  const expenseAmount = document.querySelector("#expense-amount");
  const expenseList = document.querySelector("#expense-list");
  const totalAmountDisplay = document.querySelector("#total-amount");

  let expense = JSON.parse(localStorage.getItem("expense")) || [];
  // let totalAmount = calculateTotal();
  function calculateTotal() {
    let amount = 0;
    expense.forEach((expense) => (amount += expense.amount));
    return amount;
  }
  function saveExpense() {
    localStorage.setItem("expense", JSON.stringify(expense));
  }
  function updateAmount() {
    totalAmountDisplay.textContent = calculateTotal();
  }
  // ${expense.name}: ${expense.amount}
  function renderAmount() {
    expenseList.innerHTML = "";
    expense.forEach((expense) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="expense-item">
    <div class="expense-info">
        <div class="expense-label">Name: ${expense.name} </div> 
        <div class="expense-label">Amount: ${expense.amount}</div> 
    </div>
    <button class="delete-button" id="${expense.id}">Delete</button>
</div>

        `;
      expenseList.prepend(listItem);
    });
    updateAmount();
  }
  function deleteExpense(id) {
    expense = expense.filter((exp) => exp.id !== id);
    saveExpense();
    renderAmount();
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
      const id = parseInt(e.target.id);
      deleteExpense(id);
    }
  });
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseInt(expenseAmount.value.trim());
    if (name != "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expense.push(newExpense);

      saveExpense();
      renderAmount();
      expenseName.value = "";
      expenseAmount.value = "";
    }
  });
  renderAmount();
});
