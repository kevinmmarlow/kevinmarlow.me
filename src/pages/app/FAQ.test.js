const FAQ = require("./FAQ")
// @ponicode
describe("handleSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new FAQ.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSubmit("invoice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleSubmit("payment")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleSubmit("withdrawal")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleSubmit("deposit")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
