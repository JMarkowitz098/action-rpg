import assert from 'assert';
import sinon from 'sinon'
import Hero from '../src/hero'
import faker from 'faker'
import * as chai from 'chai';

let should = chai.should();
let expect = chai.expect;


// describe('Hero Creation Tests', () => {
//     const attributes = {
//         pos: { x: 5, y: 10, },
//         vel: 1,
//         dir: 'up',
//         color: 'blue',
//     }
//     let myHero = new Hero(attributes)



//     it('should create an object with given attributes', () => {

//         // myObject.should.have.property('x').equal(5)
//         // myObject.should.have.property('y').equal(10)
//         // myObject.should.have.property('vel').equal(1)
//         // myObject.should.have.property('dir').equal('up')
//         // myObject.should.have.property('color').equal('blue')

//     });

//     it('should start hero with 3 health', () => {

//         const attributes = {
//             pos: { x: 5, y: 10, },
//             vel: 1,
//             dir: 'up',
//             color: 'blue',
//         }

//         const healthStub = sinon.stub()
//         console.log(healthStub)

//     });

// });