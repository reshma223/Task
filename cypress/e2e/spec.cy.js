describe('test script',()=>{
    it('test script',()=>{
        cy.visit("https://qaplayground.dev/apps/budget-tracker/")
        cy.get("button[class='btn btn-green-outline new-entry']").click()
        cy.get("input[type='date']")
        cy.get("input[placeholder='Add a Description (e.g. wages, bills, etc.)']").type('Food')
        cy.get(".input.input-type").select('income')
        cy.get("input[type='number']").type('1000')
        cy.get("button[class='btn btn-green-outline new-entry']").click()
        cy.get(".total").should('have.text','$1,000.00')

        cy.get("input[type='date']")
        cy.get("tbody tr:nth-child(2) td:nth-child(2) input:nth-child(1)").type('Food Expense')
        cy.get("tbody tr:nth-child(2) td:nth-child(3) select:nth-child(1)").select('Expense')
        cy.get("tbody tr:nth-child(2) td:nth-child(4) input:nth-child(1)").type('500')
        cy.get("button[class='btn btn-green-outline new-entry']").click()
        cy.get(".total").should('have.text','$500.00')
})
   
})