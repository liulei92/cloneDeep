import { expect } from 'chai';
import deepClone from '../index.js';
describe('深拷贝测试', function() {
   this.timeout(50000);
   it('未返回正确的值', function (done) {
         const obj = {
               a: '1',
               b: {
                  c: '2',
                  d: '3',
                  e: {
                     f: '5'
                  }
               }
         }
         const result = deepClone(obj);
         if(JSON.stringify(result) === JSON.stringify(obj)) {
            done()
         }else {
         done('错误');
         };  
   });

   it('循环引用验证', function (done) {
         const obj = {
               a: '1',
               b: {
                  c: '2',
                  d: '3',
                  e: {
                     f: '5'
                  }
               }
         }
         obj.b.e.f = obj.b;
         const result = deepClone(obj);
         expect(result).to.deep.equal(obj); 
         done();
   });
   it('数组拷贝验证', function (done) {
      const obj = [
         {
            a: '1',
            b: {
               c: '2',
               d: '3',
               e: {
                  f: [1, 3, 4, 5, 6]
               }
            }
         },
         {
            a: '6',
            b: {
               c: '7',
               d: '8',
               e: {
                  f: '9'
               }
            }
         },
      ];
      const result = deepClone(obj);
      expect(result).to.deep.equal(obj); 
      done();
   });
   it('方法拷贝验证', function (done) {
      const obj = function() {
         return '1';
      };
      const result = deepClone(obj);
      expect(result).to.deep.equal(obj); 
      done();
   });
   it('日期拷贝验证', function (done) {
      const obj = new Date();
      const result = deepClone(obj);
      expect(result).to.deep.equal(obj); 
      done();
   });
});