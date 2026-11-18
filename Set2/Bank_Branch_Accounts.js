use("RetailReviewsDB")
switched to db RetailReviewsDB
use('BankActivityDB');db["reviews"].find()
db.createCollection("customerActivityLogs", {
    capped: true,
    size: 1048576,
    max: 1000
});
{ ok: 1 }
show collections
customerActivityLogs
db.customerActivityLogs.insertMany([
    { logId: 1, customerId: "C101", activityType: "LOGIN", device: "Mobile", activityTime: ISODate("2026-11-01T09:00:00Z") },
    { logId: 2, customerId: "C102", activityType: "LOGIN", device: "Desktop", activityTime: ISODate("2026-11-01T09:15:00Z") },
    { logId: 3, customerId: "C101", activityType: "LOGOUT", device: "Mobile", activityTime: ISODate("2026-11-01T10:00:00Z") },
    { logId: 4, customerId: "C103", activityType: "LOGIN", device: "Tablet", activityTime: ISODate("2026-11-02T08:30:00Z") },
    { logId: 5, customerId: "C101", activityType: "LOGIN", device: "Desktop", activityTime: ISODate("2026-11-02T09:00:00Z") },
    { logId: 6, customerId: "C104", activityType: "LOGIN", device: "Mobile", activityTime: ISODate("2026-11-02T09:30:00Z") },
    { logId: 7, customerId: "C101", activityType: "LOGOUT", device: "Desktop", activityTime: ISODate("2026-11-02T11:00:00Z") },
    { logId: 8, customerId: "C102", activityType: "LOGOUT", device: "Desktop", activityTime: ISODate("2026-11-03T10:00:00Z") },
    { logId: 9, customerId: "C101", activityType: "LOGIN", device: "Mobile", activityTime: ISODate("2026-11-03T09:00:00Z") },
    { logId: 10, customerId: "C105", activityType: "LOGIN", device: "Desktop", activityTime: ISODate("2026-11-03T10:30:00Z") },
    { logId: 11, customerId: "C101", activityType: "LOGIN", device: "Tablet", activityTime: ISODate("2026-11-04T08:00:00Z") },
    { logId: 12, customerId: "C103", activityType: "LOGOUT", device: "Tablet", activityTime: ISODate("2026-11-04T12:00:00Z") },
    { logId: 13, customerId: "C101", activityType: "LOGOUT", device: "Tablet", activityTime: ISODate("2026-11-04T13:00:00Z") },
    { logId: 14, customerId: "C101", activityType: "LOGIN", device: "Desktop", activityTime: ISODate("2026-11-05T09:00:00Z") },
    { logId: 15, customerId: "C104", activityType: "LOGOUT", device: "Mobile", activityTime: ISODate("2026-11-05T10:00:00Z") },
    { logId: 16, customerId: "C101", activityType: "LOGIN", device: "Mobile", activityTime: ISODate("2026-11-06T09:00:00Z") },
    { logId: 17, customerId: "C105", activityType: "LOGOUT", device: "Desktop", activityTime: ISODate("2026-11-06T11:00:00Z") },
    { logId: 18, customerId: "C101", activityType: "LOGIN", device: "Tablet", activityTime: ISODate("2026-11-07T09:00:00Z") },
    { logId: 19, customerId: "C102", activityType: "LOGIN", device: "Mobile", activityTime: ISODate("2026-11-07T10:00:00Z") },
    { logId: 20, customerId: "C101", activityType: "LOGIN", device: "Desktop", activityTime: ISODate("2026-11-08T09:00:00Z") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6afc3fae484a4320476d2857'),
    '1': ObjectId('6afc3fae484a4320476d2858'),
    '2': ObjectId('6afc3fae484a4320476d2859'),
    '3': ObjectId('6afc3fae484a4320476d285a'),
    '4': ObjectId('6afc3fae484a4320476d285b'),
    '5': ObjectId('6afc3fae484a4320476d285c'),
    '6': ObjectId('6afc3fae484a4320476d285d'),
    '7': ObjectId('6afc3fae484a4320476d285e'),
    '8': ObjectId('6afc3fae484a4320476d285f'),
    '9': ObjectId('6afc3fae484a4320476d2860'),
    '10': ObjectId('6afc3fae484a4320476d2861'),
    '11': ObjectId('6afc3fae484a4320476d2862'),
    '12': ObjectId('6afc3fae484a4320476d2863'),
    '13': ObjectId('6afc3fae484a4320476d2864'),
    '14': ObjectId('6afc3fae484a4320476d2865'),
    '15': ObjectId('6afc3fae484a4320476d2866'),
    '16': ObjectId('6afc3fae484a4320476d2867'),
    '17': ObjectId('6afc3fae484a4320476d2868'),
    '18': ObjectId('6afc3fae484a4320476d2869'),
    '19': ObjectId('6afc3fae484a4320476d286a')
  }
}
db.customerActivityLogs.find();
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e2'),
  logId: 1,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e3'),
  logId: 2,
  customerId: 'C102',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-01T09:15:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e4'),
  logId: 3,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e5'),
  logId: 4,
  customerId: 'C103',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-02T08:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e6'),
  logId: 5,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e7'),
  logId: 6,
  customerId: 'C104',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-02T09:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e8'),
  logId: 7,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e9'),
  logId: 8,
  customerId: 'C102',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-03T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ea'),
  logId: 9,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-03T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75eb'),
  logId: 10,
  customerId: 'C105',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-03T10:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ec'),
  logId: 11,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T08:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ed'),
  logId: 12,
  customerId: 'C103',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T12:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ee'),
  logId: 13,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T13:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ef'),
  logId: 14,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-05T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f0'),
  logId: 15,
  customerId: 'C104',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-05T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f1'),
  logId: 16,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-06T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f2'),
  logId: 17,
  customerId: 'C105',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-06T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f3'),
  logId: 18,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-07T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f4'),
  logId: 19,
  customerId: 'C102',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-07T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f5'),
  logId: 20,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-08T09:00:00.000Z')
}
Type "it" for more
db.customerActivityLogs.find().pretty();
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e2'),
  logId: 1,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e3'),
  logId: 2,
  customerId: 'C102',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-01T09:15:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e4'),
  logId: 3,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e5'),
  logId: 4,
  customerId: 'C103',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-02T08:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e6'),
  logId: 5,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e7'),
  logId: 6,
  customerId: 'C104',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-02T09:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e8'),
  logId: 7,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e9'),
  logId: 8,
  customerId: 'C102',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-03T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ea'),
  logId: 9,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-03T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75eb'),
  logId: 10,
  customerId: 'C105',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-03T10:30:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ec'),
  logId: 11,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T08:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ed'),
  logId: 12,
  customerId: 'C103',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T12:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ee'),
  logId: 13,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T13:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ef'),
  logId: 14,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-05T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f0'),
  logId: 15,
  customerId: 'C104',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-05T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f1'),
  logId: 16,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-06T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f2'),
  logId: 17,
  customerId: 'C105',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-06T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f3'),
  logId: 18,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-07T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f4'),
  logId: 19,
  customerId: 'C102',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-07T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f5'),
  logId: 20,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-08T09:00:00.000Z')
}
Type "it" for more
db.customerActivityLogs.countDocuments();
40
db.customerActivityLogs.find({
    customerId: "C101"
});
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e2'),
  logId: 1,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e4'),
  logId: 3,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e6'),
  logId: 5,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75e8'),
  logId: 7,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ea'),
  logId: 9,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-03T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ec'),
  logId: 11,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T08:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ee'),
  logId: 13,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T13:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75ef'),
  logId: 14,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-05T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f1'),
  logId: 16,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-06T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f3'),
  logId: 18,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-07T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f5'),
  logId: 20,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-08T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2857'),
  logId: 1,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2859'),
  logId: 3,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Mobile',
  activityTime: ISODate('2026-11-01T10:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d285b'),
  logId: 5,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d285d'),
  logId: 7,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Desktop',
  activityTime: ISODate('2026-11-02T11:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d285f'),
  logId: 9,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-03T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2861'),
  logId: 11,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T08:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2863'),
  logId: 13,
  customerId: 'C101',
  activityType: 'LOGOUT',
  device: 'Tablet',
  activityTime: ISODate('2026-11-04T13:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2864'),
  logId: 14,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-05T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2866'),
  logId: 16,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-06T09:00:00.000Z')
}
Type "it" for more
db.customerActivityLogs.find({
    customerId: "C101",
    activityType: "LOGIN"
})
.sort({ activityTime: -1 })
.limit(5);
{
  _id: ObjectId('6afc3fae484a4320476d286a'),
  logId: 20,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-08T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f5'),
  logId: 20,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Desktop',
  activityTime: ISODate('2026-11-08T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2868'),
  logId: 18,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-07T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3cb5bfd3e4eae15a75f3'),
  logId: 18,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Tablet',
  activityTime: ISODate('2026-11-07T09:00:00.000Z')
}
{
  _id: ObjectId('6afc3fae484a4320476d2866'),
  logId: 16,
  customerId: 'C101',
  activityType: 'LOGIN',
  device: 'Mobile',
  activityTime: ISODate('2026-11-06T09:00:00.000Z')
}
db.customerActivityLogs.countDocuments();
40
BankActivityDB


