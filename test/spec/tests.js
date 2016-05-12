var Calendrical, chai, expect, astro, cal;

Calendrical.constants = require ('../../src/calendrical.calendar.constants');
Calendrical = require ('../../src/calendrical.astro');

    // c2 = require ('../../src/calendrical.calendar.base.js'),
    // c3 = require ('../../src/calendrical.calendar.calc.js'),
Calendrical.calendar = require ('../../src/calendrical.calendar.conversions');

require ('../../src/calendrical.date');

chai = require ('chai');
require ('dirty-chai');
require ('mocha');

/*
mocha.setup ({
  ui: 'bdd',
  ignoreLeaks: true
});
*/

expect = chai.expect;

astro = Calendrical.astro;
cal   = Calendrical.calendar;

require ('./astro.spec');
