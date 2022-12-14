const Intern = require('../lib/Intern');

  
test('creates an Intern object', () => {
    const intern = new Intern('Patrick', 54, 'Patrickduffy494@yahoo.com', 'UH');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Patrick', 54, 'Patrickduffy494@yahoo.com', 'UH');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Patrick', 54, 'Patrickduffy494@yahoo.com', 'UH');

    expect(intern.getRole()).toEqual("Intern");
});