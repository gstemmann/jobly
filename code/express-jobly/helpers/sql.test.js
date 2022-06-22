const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
//   test("works: no data", function () {
//     expect(() => sqlForPartialUpdate({
//         // no data
//     })).toThrow(BadRequestError);
//   });


test("works: 1 item", function () {
    const result = sqlForPartialUpdate(
        { f1: "v1" },
        { f1: "f1", fF2: "f2" });
    expect(result).toEqual({
      setCols: "\"f1\"=$1",
      values: ["v1"],
    });
    
  });    

  test("works: 2 items", function () {
    const result = sqlForPartialUpdate(
        { f1: "v1", jsF2: "v2" },
        { jsF2: "f2" });
    expect(result).toEqual({
      setCols: "\"f1\"=$1, \"f2\"=$2",
      values: ["v1", "v2"],
    });
  });

// test("works: one data", function () {
//     const { setCols, values } = sqlForPartialUpdate({ firstName: "Aliya" });
//     expect(setCols).toBe("\"first_name\"=$1");
//     expect(values).toEqual(["Aliya"]);
//   });

//   test("works: multiple data", function () {
//     const { setCols, values } = sqlForPartialUpdate({
//       firstName: "Aliya",
//       age: 32,
//     });
//     expect(setCols).toBe("\"first_name\"=$1, \"age\"=$2");
//     expect(values).toEqual(["Aliya", 32]);
//     })
})        // Compare thi0