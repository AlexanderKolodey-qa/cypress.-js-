describe('Тестирование позитивного кейса авторизации сайта staya', function () {
     
   it('Авторизуюсь и ищу строку "Мои заказы" ', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kekzsilence@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('SashaKolodey1606');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})



    

    
