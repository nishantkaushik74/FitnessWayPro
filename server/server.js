
function ValidateUser(userName, Password) {
    debugger;
    var userId = '';
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('./database/fitnessway.sqlite3');
      db.serialize(function () {
          db.each("SELECT id AS id FROM user where email='" + userName + "' and password='" + Password + "'", function (err, row) {
        userId = row.id;// console.log(row.id + ": " + row.info);
      });
      db.close();
    }.bind(this));
    return userId;
  }
//  constructor() {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('./database/fitnessway.sqlite3');
   // this.CreateDB(db);
  //}
  //CreateDB(db) {
    db.serialize(function () {
      // authorization tables
      db.run("CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT,Email varchar(40),phoneNo varchar(12), password varchar(200),roleId int,createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS role(id INTEGER PRIMARY KEY AUTOINCREMENT, Name varchar(40), Description varchar(200),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS module(id INTEGER PRIMARY KEY AUTOINCREMENT, Name varchar(40), Description varchar(200),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS permission(id INTEGER PRIMARY KEY AUTOINCREMENT, Name varchar(40), Description varchar(200),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS modulepermission(id INTEGER PRIMARY KEY AUTOINCREMENT, moduleId int,permissionId int,createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS modulePermissionRole(id INTEGER PRIMARY KEY AUTOINCREMENT, modulepermissionId int, roleId int,createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");

      //  client tables
      db.run("CREATE TABLE IF NOT EXISTS clients(id INTEGER PRIMARY KEY AUTOINCREMENT, firstName varchar(50),lastName varchar(50),age varchar(10),gender int,image nvarchar(65535),packageId int,reminderAlert bit,aggrementSignature nvarchar(65535),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS clientTrans(id INTEGER PRIMARY KEY AUTOINCREMENT,clientId int,paymentFromdate varchar(40),paymentToDate varchar(40),actualPayment varchar(50),paymentDone varchar(50),balance varchar(50),lastPaymentDate varchar(40),lastPaymentAmount varchar(50),lastbalance varchar(50),nextPaymentDate varchar(50),nextPaymentAmount varchar(40),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)");
      db.run("CREATE TABLE IF NOT EXISTS package(id INTEGER PRIMARY KEY AUTOINCREMENT, Name varchar(40), Description varchar(200),createdBy int,createdDate varchar(40),modifiedby int,moddifiedDate varchar(40),isActive bit,isDeleted bit)")
      //  window.alert("Table created")
      //var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
      //for (var i = 0; i < 10; i++) {
      //    stmt.run("Ipsum " + i);
      //}
      // stmt.finalize();

      //db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
      //    console.log(row.id + ": " + row.info);
      //});
    });

    db.close();
  //}


