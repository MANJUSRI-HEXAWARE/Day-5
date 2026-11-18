use("RetailReviewsDB")
switched to db RetailReviewsDB
use('HospitalClinicalDB');db["reviews"].find()
db.createCollection("clinicalNotes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "noteId",
                "patientId",
                "doctorId",
                "diagnosis",
                "createdAt"
            ],
            properties: {
                noteId: {
                    bsonType: "int",
                    description: "Unique clinical note ID"
                },
                patientId: {
                    bsonType: "int",
                    description: "Patient ID from hospital records"
                },
                doctorId: {
                    bsonType: "int",
                    description: "Doctor ID from hospital records"
                },
                diagnosis: {
                    bsonType: "string",
                    description: "Patient diagnosis"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Date when the note was created"
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});
{ ok: 1 }
show collections
clinicalNotes
db.clinicalNotes.insertMany([
    {
        noteId: NumberInt(1),
        patientId: NumberInt(1),
        doctorId: NumberInt(1),
        diagnosis: "High Blood Pressure",
        createdAt: ISODate("2026-10-05T10:00:00Z"),
        noteType: "Consultation",
        symptoms: ["Headache", "Dizziness"],
        prescription: "Medicine A",
        followUpPlan: "Review after two weeks"
    },
    {
        noteId: NumberInt(2),
        patientId: NumberInt(2),
        doctorId: NumberInt(2),
        diagnosis: "Migraine",
        createdAt: ISODate("2026-10-10T11:00:00Z"),
        noteType: "Consultation",
        symptoms: ["Headache", "Nausea"],
        prescription: "Medicine B",
        followUpPlan: "Avoid stress and review if symptoms continue"
    },
    {
        noteId: NumberInt(3),
        patientId: NumberInt(3),
        doctorId: NumberInt(3),
        diagnosis: "Knee Pain",
        createdAt: ISODate("2026-10-15T09:30:00Z"),
        noteType: "Consultation",
        symptoms: ["Joint pain", "Swelling"],
        prescription: "Medicine C",
        followUpPlan: "Physiotherapy review"
    },
    {
        noteId: NumberInt(4),
        patientId: NumberInt(4),
        doctorId: NumberInt(1),
        diagnosis: "Heart Checkup",
        createdAt: ISODate("2026-11-02T10:30:00Z"),
        noteType: "Clinical Assessment",
        vitals: {
            bloodPressure: "120/80",
            pulse: NumberInt(76),
            temperature: 36.8
        },
        testResults: {
            ecg: "Normal",
            cholesterol: "Within expected range"
        },
        treatmentPlan: "Continue routine monitoring"
    },
    {
        noteId: NumberInt(5),
        patientId: NumberInt(5),
        doctorId: NumberInt(4),
        diagnosis: "Skin Allergy",
        createdAt: ISODate("2026-11-05T12:00:00Z"),
        noteType: "Clinical Assessment",
        affectedArea: "Arms",
        severity: "Mild",
        observations: ["Redness", "Itching"],
        treatmentPlan: {
            medication: "Medicine E",
            advice: "Avoid known allergens"
        }
    },
    {
        noteId: NumberInt(6),
        patientId: NumberInt(8),
        doctorId: NumberInt(2),
        diagnosis: "Migraine",
        createdAt: ISODate("2026-11-14T08:30:00Z"),
        noteType: "Clinical Assessment",
        severity: "Moderate",
        observations: ["Recurring headache"],
        vitals: {
            bloodPressure: "118/78",
            pulse: NumberInt(80)
        },
        treatmentPlan: {
            medication: "Medicine I",
            advice: "Follow-up consultation recommended"
        }
    }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6afc4468c8c145468e3c9f69'),
    '1': ObjectId('6afc4468c8c145468e3c9f6a'),
    '2': ObjectId('6afc4468c8c145468e3c9f6b'),
    '3': ObjectId('6afc4468c8c145468e3c9f6c'),
    '4': ObjectId('6afc4468c8c145468e3c9f6d'),
    '5': ObjectId('6afc4468c8c145468e3c9f6e')
  }
}
db.clinicalNotes.find();
{
  _id: ObjectId('6afc4468c8c145468e3c9f69'),
  noteId: 1,
  patientId: 1,
  doctorId: 1,
  diagnosis: 'High Blood Pressure',
  createdAt: ISODate('2026-10-05T10:00:00.000Z'),
  noteType: 'Consultation',
  symptoms: [
    'Headache',
    'Dizziness'
  ],
  prescription: 'Medicine A',
  followUpPlan: 'Review after two weeks'
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6a'),
  noteId: 2,
  patientId: 2,
  doctorId: 2,
  diagnosis: 'Migraine',
  createdAt: ISODate('2026-10-10T11:00:00.000Z'),
  noteType: 'Consultation',
  symptoms: [
    'Headache',
    'Nausea'
  ],
  prescription: 'Medicine B',
  followUpPlan: 'Avoid stress and review if symptoms continue'
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6b'),
  noteId: 3,
  patientId: 3,
  doctorId: 3,
  diagnosis: 'Knee Pain',
  createdAt: ISODate('2026-10-15T09:30:00.000Z'),
  noteType: 'Consultation',
  symptoms: [
    'Joint pain',
    'Swelling'
  ],
  prescription: 'Medicine C',
  followUpPlan: 'Physiotherapy review'
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6c'),
  noteId: 4,
  patientId: 4,
  doctorId: 1,
  diagnosis: 'Heart Checkup',
  createdAt: ISODate('2026-11-02T10:30:00.000Z'),
  noteType: 'Clinical Assessment',
  vitals: {
    bloodPressure: '120/80',
    pulse: 76,
    temperature: 36.8
  },
  testResults: {
    ecg: 'Normal',
    cholesterol: 'Within expected range'
  },
  treatmentPlan: 'Continue routine monitoring'
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6d'),
  noteId: 5,
  patientId: 5,
  doctorId: 4,
  diagnosis: 'Skin Allergy',
  createdAt: ISODate('2026-11-05T12:00:00.000Z'),
  noteType: 'Clinical Assessment',
  affectedArea: 'Arms',
  severity: 'Mild',
  observations: [
    'Redness',
    'Itching'
  ],
  treatmentPlan: {
    medication: 'Medicine E',
    advice: 'Avoid known allergens'
  }
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6e'),
  noteId: 6,
  patientId: 8,
  doctorId: 2,
  diagnosis: 'Migraine',
  createdAt: ISODate('2026-11-14T08:30:00.000Z'),
  noteType: 'Clinical Assessment',
  severity: 'Moderate',
  observations: [
    'Recurring headache'
  ],
  vitals: {
    bloodPressure: '118/78',
    pulse: 80
  },
  treatmentPlan: {
    medication: 'Medicine I',
    advice: 'Follow-up consultation recommended'
  }
}
db.clinicalNotes.countDocuments();
6
db.clinicalNotes.find({
    diagnosis: "Migraine"
}).pretty();
{
  _id: ObjectId('6afc4468c8c145468e3c9f6a'),
  noteId: 2,
  patientId: 2,
  doctorId: 2,
  diagnosis: 'Migraine',
  createdAt: ISODate('2026-10-10T11:00:00.000Z'),
  noteType: 'Consultation',
  symptoms: [
    'Headache',
    'Nausea'
  ],
  prescription: 'Medicine B',
  followUpPlan: 'Avoid stress and review if symptoms continue'
}
{
  _id: ObjectId('6afc4468c8c145468e3c9f6e'),
  noteId: 6,
  patientId: 8,
  doctorId: 2,
  diagnosis: 'Migraine',
  createdAt: ISODate('2026-11-14T08:30:00.000Z'),
  noteType: 'Clinical Assessment',
  severity: 'Moderate',
  observations: [
    'Recurring headache'
  ],
  vitals: {
    bloodPressure: '118/78',
    pulse: 80
  },
  treatmentPlan: {
    medication: 'Medicine I',
    advice: 'Follow-up consultation recommended'
  }
}
db.clinicalNotes.find({
    diagnosis: "High Blood Pressure"
}).pretty();
{
  _id: ObjectId('6afc4468c8c145468e3c9f69'),
  noteId: 1,
  patientId: 1,
  doctorId: 1,
  diagnosis: 'High Blood Pressure',
  createdAt: ISODate('2026-10-05T10:00:00.000Z'),
  noteType: 'Consultation',
  symptoms: [
    'Headache',
    'Dizziness'
  ],
  prescription: 'Medicine A',
  followUpPlan: 'Review after two weeks'
}
db.clinicalNotes.insertOne({
    noteId: NumberInt(7),
    patientId: NumberInt(7),
    diagnosis: "Fever",
    createdAt: ISODate("2026-11-16T10:00:00Z")
});
MongoServerError: Document failed validation
db.getCollectionInfos({
    name: "clinicalNotes"
});
[
  {
    name: 'clinicalNotes',
    type: 'collection',
    options: {
      validator: {
        '$jsonSchema': {
          bsonType: 'object',
          required: [ 'noteId', 'patientId', 'doctorId', 'diagnosis', 'createdAt' ],
          properties: {
            noteId: { bsonType: 'int', description: 'Unique clinical note ID' },
            patientId: { bsonType: 'int', description: 'Patient ID from hospital records' },
            doctorId: { bsonType: 'int', description: 'Doctor ID from hospital records' },
            diagnosis: { bsonType: 'string', description: 'Patient diagnosis' },
            createdAt: { bsonType: 'date', description: 'Date when the note was created' }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    },
    info: { readOnly: false, uuid: UUID('1a50a58d-7af9-4b89-967f-32feebbe33a1') },
    idIndex: { v: 2, key: { _id: 1 }, name: '_id_' }
  }
]
db.clinicalNotes.countDocuments();
6
HospitalClinicalDB


