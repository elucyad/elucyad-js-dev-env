import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

//var expect = require('chai');

describe('our first test', () => {

    it('should pass', () => {

        let privateVar;

        function display() {
            privateVar = 20;
        }

        display();
        expect(privateVar).to.equal(20);

    });

});

describe("index.html", () => {
    it("should say hello", (done) => {

        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            var str = window.document.getElementsByTagName('h1')[0];
            expect(str.innerHTML).to.equal("Hello how r u!");
            done();
            window.close();
        });

    });
});