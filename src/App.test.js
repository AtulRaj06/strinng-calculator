import {sum} from utils;

describe('sum function', ()=>{
    it('should return sum',()=>{
        expect(sum('1,2,3,4')).toBe(10)
    })

    it('should return sum if string empty',()=>{
        expect(sum('')).toBe(0)
    })

    it('should return error in negetive num', ()=>{
        expect(sum("1,-9")).toBe('negative numbers not allowed <negative_number>')
    })

    it('should return error in negetive num', ()=>{
        expect(sum("1\n2,3")).toBe('6')
    })

    it('should change delimeter', ()=>{
        expect(sum("//;\n1;2")).toBe('3')
    })
})
