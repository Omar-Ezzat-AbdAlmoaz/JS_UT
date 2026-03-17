import {
  capitalizeText,
  createArray,
  obj1,
  obj2,
  CheckPositivity,
  MathUtils,
  Mult,
  obj3
} from "../src/index.js";

import * as chai from "chai";
const { expect, assert } = chai;
chai.should();

//* problem 1
describe("capitalizeText", () => {
  it("should return string", () => {
    expect(capitalizeText("hamada")).to.be.a("string");
  });

  it("should capitalize string", () => {
    expect(capitalizeText("hamada")).equal("HAMADA");
  });

  it("should throw error if not string", () => {
    expect(() => capitalizeText(12)).to.throw("parameter should be string");
  });
});

//* problem 2
describe("createArray", () => {

  it("should return array", () => {
    assert.isArray(createArray(3));
  });

  it("should return array of length 3 and include 1", () => {
    let result = createArray(3);
    result.should.have.lengthOf(3);
    result.should.include(1);
  });

  it("delay test 5 sec", function(done){
    this.timeout(6000);
    setTimeout(() => {
      expect(createArray(3)).to.include(2);
      done();
    }, 5000);
  });

  it("pending test"); 

});

//* problem 3
describe("objects equality", () => {

  it("expect", () => {
    expect(obj1).not.equal(obj2);
    expect(obj1).deep.equal(obj2);
  });

  it("should", () => {
    obj1.should.not.equal(obj2);
    obj1.should.deep.equal(obj2);
  });

  it("assert", () => {
    assert.deepEqual(obj1, obj2);
  });

});

//* problem 4
describe("CheckPositivity", () => {

  it("positive number", () => {
    expect(CheckPositivity(4)).true;
  });

  it("negative number", () => {
    (-1).should.satisfy(x => !CheckPositivity(x));
  });

  it("zero", () => {
    assert.isFalse(CheckPositivity(0));
  });

});

//* problem 5
describe("MathUtils", () => {

  let obj;

  before(() => {
    obj = new MathUtils();
  });

  it("has sum and sub", () => {
    assert.exists(obj.sum);
    assert.exists(MathUtils.sub);
  });

  it("instance of MathUtils", () => {
    assert.instanceOf(obj, MathUtils);
  });

  it("sum works correctly", () => {
    assert.equal(obj.sum(2,3), 5);
  });

});

//* problem 6
describe("Mult", () => {

  it("x > 0", () => {
    assert.isAbove(5, 0);
  });

  it("result > 0", () => {
    assert.isAbove(Mult(5), 0);
  });

});

//* problem 7
describe("nested object", () => {

  it("check nested value", () => {
    assert.deepInclude(obj3.a.b, {x:1});
  });

});

