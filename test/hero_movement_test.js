// import assert from 'assert';
import * as chai from 'chai';
import * as C from '../src/constants'
import HeroMovement from '../src/hero_movement'

let should = chai.should();
let expect = chai.expect;


describe('Hero Movement Object Tests', () => {
    const attributes = { length: 20, width: 10 }
    let movement = new HeroMovement(attributes)

    it('should create an object with only the given attributes and defaults', () => {
        const possibleMovementKeys = ['length', 'width']
        const myObjKeys = Object.keys(movement)

        movement.should.have.property('length').equal(20)
        movement.should.have.property('width').equal(10)
        expect(possibleMovementKeys).to.include.members(myObjKeys)
    });

    it('should change the hero\'s direction if receiving valid input', () => {
        let newDir = { 'right': true };
        let currentDir = 'up'
        let expectedDir = 'right'
        let changedDir = movement.changeDir(newDir, currentDir)
        expect(changedDir).to.eql(expectedDir)
    })

    it('should change the heroes direction when receiving opposite directions', () => {
        let newDir = [['right', true], ['left', true]];
        let currentDir = 'right'
        let expectedDir = [['left', true]]
        let oppositeDir = movement.filterExtraKeys(newDir, currentDir)
        expect(oppositeDir).to.eql(expectedDir)
        
        newDir = [['down', true], ['up', true]];
        currentDir = 'up'
        expectedDir = [['down', true]]
        oppositeDir = movement.filterExtraKeys(newDir, currentDir)
        expect(oppositeDir).to.eql(expectedDir)
    })

    it('should get new coordinates when the hero moves', () => {
        let moveData = {
            x: 50,
            y: 100,
            dir: 'down',
            vel: C.HERO_NORMAL_VEL,
        }
        let expectedPos = { newX: 50, newY: 104 }
        let newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'up'
        expectedPos = { newX: 50, newY: 96 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'left'
        expectedPos = { newX: 46, newY: 100 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'right'
        expectedPos = { newX: 54, newY: 100 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'left up'
        expectedPos = { newX: 46, newY: 96 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'right up'
        expectedPos = { newX: 54, newY: 96 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'down left'
        expectedPos = { newX: 46, newY: 104 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)

        moveData.dir = 'down right'
        expectedPos = { newX: 54, newY: 104 }
        newPos = movement.getNewPosUsingDir(moveData)
        expect(expectedPos).to.eql(newPos)
    })

    it('should move the hero', () => {
        let moveData = {
            x: 50,
            y: 100,
            dir: 'up',
            vel: C.HERO_NORMAL_VEL,
        }
        let expectedPos = { x: moveData.x, y: moveData.y - 4, moved: true }
        let newPos = movement.move(moveData)

        expect(expectedPos).to.eql(newPos)
    })

    it('should not move the hero if they would leave the playing screen', () => {
        let moveData = {
            x: 50,
            y: C.PLAY_AREA_DOWN_BOUNDARY,
            dir: 'down',
            vel: C.HERO_NORMAL_VEL,
        }
        let expectedPos = { x: moveData.x, y: moveData.y, moved: false }
        let newPos = movement.move(moveData)

        expect(expectedPos).to.eql(newPos)
    })


    
});