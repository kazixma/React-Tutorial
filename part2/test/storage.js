import {expect} from 'chai';
import Storage from '../src/Highscore/storage'

describe('HighscoreStorage', () => {

    it('has a highscore attribute', () => {
        let storage = new Storage();
        expect(storage.highscore).to.be.an('array');

    });


    describe('#add', () => {
        it('add score to hightscore',()=>{
            let storage = new Storage();
            storage.add('test',10);

            expect(storage.highscore).to.eql([
                {name: "test",score:10}

            ])

        });
        it('sort highscore by highest to lowest',()=>{
            let storage = new Storage();
            storage.add('test',10);
            storage.add('test',20);
            storage.add("test",30);
            expect(storage.highscore).to.eql([
                {name: "test",score:30},
                {name: "test",score:20},
                {name: "test",score:10} 
            ])

        });


    })

    describe('#cap', () => {
        it('limit highscore to given length')
        it('do nothing if highscore is under the given length')


    })




})