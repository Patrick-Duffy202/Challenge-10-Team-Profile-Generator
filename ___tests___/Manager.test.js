const Manager = require('../lib/Manager');

  
test('creates an Manager object', () => {
    const manager = new Manager('Patrick', 54, 'Patrickduffy494@yahoo.com', 6);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Patrick', 54, 'Patrickduffy494@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 