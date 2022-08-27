
describe('Тестирование негативного кейса авторизации сайта staya', function () {
     
   it('Авторизуюсь и ищу строку "Невозможно войти с предоставленными учетными данными." ', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kekzsilence@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('iLoveQA2022');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})

