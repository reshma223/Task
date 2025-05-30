describe('test script',()=>{
it.only('adds entries with different data using for loop', () => {
  cy.visit("https://qaplayground.dev/apps/budget-tracker/");
  cy.contains('New Entry').click();

  const data = [
    { date: '2025-03-30', desc: 'Salary', type: 'income', amount: '1000' },
    { date: '2025-04-02', desc: 'Rent', type: 'Expense', amount: '700' },
    { date: '2025-05-30', desc: 'Bonus', type: 'income', amount: '200' }

  ];
  for (let i = 1; i <= data.length; i++) {
    const a = data[i - 1];
    cy.get(`tbody tr:nth-child(${i}) td:nth-child(1) input:nth-child(1)`).type(a.date);
    cy.get(`tbody tr:nth-child(${i}) td:nth-child(2) input`).type(a.desc);
    cy.get(`tbody tr:nth-child(${i}) td:nth-child(3) select`).select(a.type);
    cy.get(`tbody tr:nth-child(${i}) td:nth-child(4) input`).type(a.amount);
    cy.contains('New Entry').click();  
  }
  cy.get('.total').should('have.text', '$500.00');
});
});

   