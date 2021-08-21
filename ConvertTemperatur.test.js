const Convert = require('./ConvertTemperature');
//Test Celscius
const Celcius = new Convert();
test('test celcius to celcius', () =>{
   expect(Celcius.fromcelcius('celcius',1)).toBe(1);
});

test('test celcius to celcius', () =>{
   expect(Celcius.fromcelcius('reamur',1)).toBe(0.8);
});

test('test celcius to reamur', () =>{
   expect(Celcius.fromcelcius('farenheit',1)).toBe(33.8);
});

//Test Farenheit
const Farenheit = new Convert();
test("test Farenheit to celcius", ()=>{
   expect(Farenheit.fromfarenheit('farenheit',1)).toBe(1);
});

test('test Farenheit to celcius', () =>{
   expect(Farenheit.fromfarenheit('celcius',1)).toBe(-17.22222222222222);
});

test('test Farenheit to reamur', () =>{
   expect(Farenheit.fromfarenheit('reamur',1)).toBe(-13.777777777777777);
});

//Test Reamur
const Reamur = new Convert();
test("test reamur to reamur", () =>{
   expect(Reamur. fromreamur('reamur',1)).toBe(1)
})

test("test reamur to celsius", () =>{
   expect(Reamur.fromreamur('celcius',1)).toBe(1.25)
})

test("test reamur to farenheit", () =>{
   expect(Reamur.fromreamur('farenheit',1)).toBe(34.25)
})

