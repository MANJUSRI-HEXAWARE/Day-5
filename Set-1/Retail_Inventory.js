use("RetailReviewsDB")
switched to db RetailReviewsDB
db["reviews"].find()use('RetailReviewsDB');
SyntaxError: Missing semicolon. (1:20)

> 1 | db["reviews"].find()use('RetailReviewsDB');
    |                     ^
use('RetailReviewsDB');
already on db RetailReviewsDB
db.runCommand({
    collMod: "reviews",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "reviewId",
                "sku",
                "customerId",
                "rating",
                "reviewText"
            ],
            properties: {
                reviewId: {
                    bsonType: "int"
                },
                sku: {
                    bsonType: "string"
                },
                customerId: {
                    bsonType: "string"
                },
                rating: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 5
                },
                reviewText: {
                    bsonType: "string"
                },
                reviewDate: {
                    bsonType: "date"
                },
                verifiedPurchase: {
                    bsonType: "bool"
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});
{ ok: 1 }
db.reviews.createIndex(
    { reviewId: 1 },
    { unique: true }
);
reviewId_1
db.reviews.insertMany([
    {
        reviewId: NumberInt(1),
        sku: "P101",
        customerId: "C101",
        rating: NumberInt(5),
        reviewText: "Excellent laptop with good performance.",
        reviewDate: ISODate("2026-11-01"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(2),
        sku: "P102",
        customerId: "C102",
        rating: NumberInt(4),
        reviewText: "Wireless mouse works smoothly.",
        reviewDate: ISODate("2026-11-02"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(3),
        sku: "P103",
        customerId: "C103",
        rating: NumberInt(5),
        reviewText: "Very comfortable office chair.",
        reviewDate: ISODate("2026-11-03"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(4),
        sku: "P104",
        customerId: "C104",
        rating: NumberInt(3),
        reviewText: "Good quality but slightly expensive.",
        reviewDate: ISODate("2026-11-04"),
        verifiedPurchase: false
    },
    {
        reviewId: NumberInt(5),
        sku: "P105",
        customerId: "C105",
        rating: NumberInt(4),
        reviewText: "Comfortable shoes for daily use.",
        reviewDate: ISODate("2026-11-05"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(6),
        sku: "P106",
        customerId: "C106",
        rating: NumberInt(5),
        reviewText: "Refrigerator has excellent cooling.",
        reviewDate: ISODate("2026-11-06"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(7),
        sku: "P107",
        customerId: "C107",
        rating: NumberInt(4),
        reviewText: "Helpful book for learning SQL.",
        reviewDate: ISODate("2026-11-07"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(8),
        sku: "P108",
        customerId: "C108",
        rating: NumberInt(3),
        reviewText: "Good football for beginners.",
        reviewDate: ISODate("2026-11-08"),
        verifiedPurchase: false
    },
    {
        reviewId: NumberInt(9),
        sku: "P109",
        customerId: "C109",
        rating: NumberInt(5),
        reviewText: "Very good face cream.",
        reviewDate: ISODate("2026-11-09"),
        verifiedPurchase: true
    },
    {
        reviewId: NumberInt(10),
        sku: "P101",
        customerId: "C110",
        rating: NumberInt(4),
        reviewText: "Laptop battery backup is good.",
        reviewDate: ISODate("2026-11-10"),
        verifiedPurchase: true
    }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6afc33653f1f181642c3d17d'),
    '1': ObjectId('6afc33653f1f181642c3d17e'),
    '2': ObjectId('6afc33653f1f181642c3d17f'),
    '3': ObjectId('6afc33653f1f181642c3d180'),
    '4': ObjectId('6afc33653f1f181642c3d181'),
    '5': ObjectId('6afc33653f1f181642c3d182'),
    '6': ObjectId('6afc33653f1f181642c3d183'),
    '7': ObjectId('6afc33653f1f181642c3d184'),
    '8': ObjectId('6afc33653f1f181642c3d185'),
    '9': ObjectId('6afc33653f1f181642c3d186')
  }
}
db.reviews.find();
{
  _id: ObjectId('6afc33653f1f181642c3d17d'),
  reviewId: 1,
  sku: 'P101',
  customerId: 'C101',
  rating: 5,
  reviewText: 'Excellent laptop with good performance.',
  reviewDate: ISODate('2026-11-01T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d17e'),
  reviewId: 2,
  sku: 'P102',
  customerId: 'C102',
  rating: 4,
  reviewText: 'Wireless mouse works smoothly.',
  reviewDate: ISODate('2026-11-02T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d17f'),
  reviewId: 3,
  sku: 'P103',
  customerId: 'C103',
  rating: 5,
  reviewText: 'Very comfortable office chair.',
  reviewDate: ISODate('2026-11-03T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d180'),
  reviewId: 4,
  sku: 'P104',
  customerId: 'C104',
  rating: 3,
  reviewText: 'Good quality but slightly expensive.',
  reviewDate: ISODate('2026-11-04T00:00:00.000Z'),
  verifiedPurchase: false
}
{
  _id: ObjectId('6afc33653f1f181642c3d181'),
  reviewId: 5,
  sku: 'P105',
  customerId: 'C105',
  rating: 4,
  reviewText: 'Comfortable shoes for daily use.',
  reviewDate: ISODate('2026-11-05T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d182'),
  reviewId: 6,
  sku: 'P106',
  customerId: 'C106',
  rating: 5,
  reviewText: 'Refrigerator has excellent cooling.',
  reviewDate: ISODate('2026-11-06T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d183'),
  reviewId: 7,
  sku: 'P107',
  customerId: 'C107',
  rating: 4,
  reviewText: 'Helpful book for learning SQL.',
  reviewDate: ISODate('2026-11-07T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d184'),
  reviewId: 8,
  sku: 'P108',
  customerId: 'C108',
  rating: 3,
  reviewText: 'Good football for beginners.',
  reviewDate: ISODate('2026-11-08T00:00:00.000Z'),
  verifiedPurchase: false
}
{
  _id: ObjectId('6afc33653f1f181642c3d185'),
  reviewId: 9,
  sku: 'P109',
  customerId: 'C109',
  rating: 5,
  reviewText: 'Very good face cream.',
  reviewDate: ISODate('2026-11-09T00:00:00.000Z'),
  verifiedPurchase: true
}
{
  _id: ObjectId('6afc33653f1f181642c3d186'),
  reviewId: 10,
  sku: 'P101',
  customerId: 'C110',
  rating: 4,
  reviewText: 'Laptop battery backup is good.',
  reviewDate: ISODate('2026-11-10T00:00:00.000Z'),
  verifiedPurchase: true
}
db.reviews.updateOne(
    { reviewId: NumberInt(1) },
    {
        $set: {
            rating: NumberInt(4),
            reviewText: "Good laptop with excellent performance."
        }
    }
);
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.reviews.deleteOne(
    { reviewId: NumberInt(10) }
);
{
  acknowledged: true,
  deletedCount: 1
}
db.reviews.countDocuments();
9
RetailReviewsDB


