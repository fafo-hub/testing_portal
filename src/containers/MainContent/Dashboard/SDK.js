
Parse.initialize("FortCore", "abc FortCore 234");
Parse.serverURL = 'https://test.fortcoretech.com/api/';


//javascriptKey is required only if you have it on server.

const TestObject = Parse.Object.extend("TestObject");
const testObject = new TestObject();
testObject.set("foo", "bar");
testObject.save().then((response) => {
  console.log("New object created with objectId: " + response.id);
  testObject.set("score", 12345);
  //testObject.set("foo", "hello");
  console.log(testObject.get("score"));
  console.log(testObject.get("foo"));
}).catch((error) => {
  console.error("Error: " + error.code + " " + error.message);
});
