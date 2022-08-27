describe('Тестирование Yandex', function () {
   it('Проверка, что сервис выдает картинки по запросу Котята', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('Котята').type('{enter}');
        cy.get('.Composite > :nth-child(1) > .UniSearchHeader > .Link > .UniSearchHeader-Title-Text')
        cy.contains('Картинки по запросу «Котята»');
    })
})
