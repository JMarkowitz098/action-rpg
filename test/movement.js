// import assert from 'assert';
import * as chai from 'chai';
import * as C from '../src/constants'
import Movement from '../src/movement'

let should = chai.should();
let expect = chai.expect;


describe('Movement Object Tests', () => {
    const attributes = { length: 20, width: 10 }
    let movement = new Movement(attributes)
    const possibleMovementKeys = ['length', 'width']
    const myObjKeys = Object.keys(movement)

    it('should create an object with only the given attributes and defaults', () => {
        movement.should.have.property('length').equal(20)
        movement.should.have.property('width').equal(10)
        expect(possibleMovementKeys).to.include.members(myObjKeys)
    });

    it('should correctly assert if object is in play area', () => {
        const posInCanvas = { x: 200, y: 300 }
        const posOutOfCanvas = { x: 700, y: 200 }

        expect(movement.isInCanvas(posInCanvas)).to.be.true
        expect(movement.isInCanvas(posOutOfCanvas)).to.be.false
    })
});