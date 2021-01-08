// import assert from 'assert';
import * as chai from 'chai';
import * as C from '../src/constants'
import Movement from '../src/movement'

let should = chai.should();
let expect = chai.expect;


describe('Movement Object Tests', () => {
    const attributes = { length: 20, width: 10 }
    let movement = new Movement(attributes)

    it('should create an object with only the given attributes and defaults', () => {
        const possibleMovementKeys = ['length', 'width']
        const myObjKeys = Object.keys(movement)

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
    
    it('should assert if a move is valid in the x direction', () => {
        const posInCanvas =  200
        const posOutOfCanvas = 595
        const dir = 'right'

        expect(movement.validXMove(dir, posInCanvas)).to.be.true
        expect(movement.validXMove(dir, posOutOfCanvas)).to.be.false
    })

    it('should assert if a move is valid in the y direction', () => {
        const posInCanvas =  200
        const posOutOfCanvas = 595
        const dir = 'down'

        expect(movement.validYMove(dir, posInCanvas)).to.be.true
        expect(movement.validYMove(dir, posOutOfCanvas)).to.be.false
    })

    it('should assert if a move is valid in a diagonal direction', () => {
        const posInCanvas =  { x: 200, y: 300 }
        const posOutOfCanvas = { x: 560, y: 400 }
        const dir = 'down right'

        expect(movement.validMove(dir, posInCanvas.x, posInCanvas.y)).to.be.true
        expect(movement.validMove(dir, posOutOfCanvas.x, posOutOfCanvas.y))
            .to.be.false
    })
});