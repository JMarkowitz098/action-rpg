// import assert from 'assert';
import * as chai from 'chai';
import GameObject from '../src/game_object'

let should = chai.should();
let expect = chai.expect;


describe('Game Object Tests',() => {
    const attributes = {
        pos: { x: 5, y: 10, },
        vel: 1,
        dir: 'up',
        color: 'blue',
    }
    let myObject = new GameObject(attributes)

    it('should create an object with given attributes', () => {
        myObject.should.have.property('x').equal(5)
        myObject.should.have.property('y').equal(10)
        myObject.should.have.property('vel').equal(1)
        myObject.should.have.property('dir').equal('up')
        myObject.should.have.property('color').equal('blue')
    });

    it('should only have properties that were passed in', () => {
        myObject.should.not.have.property('ctx')
    });

    it('should not have extra properties', () => {
        const possibleGameObjectKeys = ['x', 'y', 'ctx', 'vel', 'dir', 'color']
        const myObjKeys = Object.keys(myObject)
        
        expect (possibleGameObjectKeys).to.include.members(myObjKeys)
    })
});