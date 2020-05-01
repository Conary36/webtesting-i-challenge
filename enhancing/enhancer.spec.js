const {repair, succeed, fail} = require('./enhancer.js');

// test away!


describe("enhancer", ()=>{
    describe("repair", () =>{
        it("returns a new item with the durability restored to 100", ()=>{
            const weapon = {
                name: 'excalibre',
                enhancement: 20,
                durability: 75
            }
            expect(repair(weapon)).toEqual({...weapon, durability: 100})  
        })
        // it("returns a new item with the durability restored to 100", () => {
        //   expect(repair(weapon)).not.toEqual({ ...weapon, durability: 100 });
        // });
    })



 describe("success", ()=>{
      it("increases in power by 1", () => {
    const weapon = {
        name: 'excalibre',
        enhancement: 20,
        durability: 75
    }
    const expected = {
        name: 'excalibre',
        enhancement: 21,
        durability: 75
    }
    const testingReturn = succeed(weapon) 
    expect(testingReturn).toEqual(expected);

      });
    })

describe("failure", () =>{
    it("a fail(item) method that accepts an item ", ()=>{
        const newWeapon = {
            name: 'Gauntlet',
            enhancement: 10,
            durability: 97
        }
        expect(fail(newWeapon)).not.toEqual(newWeapon)
    
    });
})


})