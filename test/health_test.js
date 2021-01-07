// import assert from 'assert';
import * as chai from 'chai';
import * as C from '../src/constants'
import Health from '../src/health'

let should = chai.should();
let expect = chai.expect;


describe('Health Object Tests', () => {
    const attributes = {
        pos: { x: 5, y: 10, },
    }
    let healthObject = new Health(attributes)
    const possibleHealthObjectKeys = ['x', 'y', 'ctx', 'vel', 'color', 'length']
    const myObjKeys = Object.keys(healthObject)

    it('should create an object with only the given attributes and defaults', () => {
        healthObject.should.have.property('x').equal(5)
        healthObject.should.have.property('y').equal(10)
        healthObject.should.have.property('length').equal(C.HEALTH_LENGTH)
        healthObject.should.have.property('color').equal(C.HEALTH_COLOR)

        healthObject.should.not.have.property('vel')

        expect(possibleHealthObjectKeys).to.include.members(myObjKeys)
    });
});