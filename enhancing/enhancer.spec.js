const {repair, succeed, fail} = require('./enhancer.js');

// test away!
const weapon = {
    name: 'excalibre',
    enhancement: 20,
    durability: 75
}
const Magic = {
    name: 'fireball',
    enhancement: 45,
    durability: 3
}

describe("enhancer", ()=>{
    describe("repair", () =>{
        it("returns a new item with the durability restored to 100", ()=>{
            expect(repair(weapon)).toEqual({...weapon, durability: 100})  
        })
        it("returns a new item with the durability restored to 100", () => {
          expect(repair(weapon)).not.toEqual({ ...weapon, durability: 100 });
        });
        

    })
    describe("success", ()=>{
        it( "returns a new item object modified according to the rules defined by the client for enhancement success.", () =>{

            expect(succeed(weapon)).toEqual({ ...weapon, enhancement: 20 });
        })  
        it("returns a new item object modified according to the rules defined by the client for enhancement success.", () => {
          expect(succeed(weapon)).not.toEqual({ ...weapon, enhancement: 20 });
        });  
        // it("increases in power by 1", () =>{
        //     expect
        // }

    })
        
})