CREATE DATABASE HospitalDB;
GO
USE HospitalDB;
GO
CREATE TABLE Patients
(
    PatientID INT IDENTITY(1,1) PRIMARY KEY,
    PatientName VARCHAR(100) NOT NULL,
    Address VARCHAR(200) NOT NULL
);
GO
CREATE TABLE Departments
(
    DepartmentID INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL UNIQUE
);
GO
CREATE TABLE Doctors
(
    DoctorID INT IDENTITY(1,1) PRIMARY KEY,
    DoctorName VARCHAR(100) NOT NULL,
    DepartmentID INT NOT NULL,

    CONSTRAINT FK_Doctors_Departments
    FOREIGN KEY (DepartmentID)
    REFERENCES Departments(DepartmentID)
);
GO
CREATE TABLE Visits
(
    VisitID INT IDENTITY(1,1) PRIMARY KEY,
    PatientID INT NOT NULL,
    DoctorID INT NOT NULL,
    VisitDate DATE NOT NULL,
    Diagnosis VARCHAR(200) NOT NULL,
    Prescription VARCHAR(300),
    Notes VARCHAR(500),

    CONSTRAINT CK_Visit_Date
    CHECK (VisitDate <= CAST(GETDATE() AS DATE)),

    CONSTRAINT FK_Visits_Patients
    FOREIGN KEY (PatientID)
    REFERENCES Patients(PatientID),

    CONSTRAINT FK_Visits_Doctors
    FOREIGN KEY (DoctorID)
    REFERENCES Doctors(DoctorID)
);
GO
CREATE TABLE Billing
(
    BillID INT IDENTITY(1,1) PRIMARY KEY,
    VisitID INT NOT NULL UNIQUE,
    BillAmount DECIMAL(10,2) NOT NULL,
    Status VARCHAR(20) NOT NULL DEFAULT 'Open',

    CONSTRAINT CK_Bill_Amount
    CHECK (BillAmount >= 0),

    CONSTRAINT CK_Bill_Status
    CHECK (Status IN ('Open', 'Paid', 'Pending')),

    CONSTRAINT FK_Billing_Visits
    FOREIGN KEY (VisitID)
    REFERENCES Visits(VisitID)
);
GO

SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE'
ORDER BY TABLE_NAME;

--alter
ALTER TABLE Patients
ADD insurance_id VARCHAR(30) NULL;
GO
--rename
EXEC sp_rename 'Billing', 'PatientBilling';
--drop a constraint
ALTER TABLE PatientBilling
DROP CONSTRAINT CK_Bill_Status;

--insert
INSERT INTO Departments (DepartmentName)
VALUES
('Cardiology'),
('Neurology'),
('Orthopedics'),
('Dermatology');

INSERT INTO Doctors (DoctorName, DepartmentID)
VALUES
('Dr. Ravi', 1),
('Dr. Meena', 2),
('Dr. Kumar', 3),
('Dr. Priya', 4),
('Dr. Arun', 1);

INSERT INTO Patients (PatientName, Address, insurance_id)
VALUES
('Arun Kumar', 'Chennai', 'INS1001'),
('Priya Sharma', 'Madurai', 'INS1002'),
('Rahul Raj', 'Coimbatore', 'INS1003'),
('Divya S', 'Chennai', 'INS1004'),
('Karthik M', 'Bangalore', 'INS1005'),
('Sneha R', 'Salem', 'INS1006'),
('Vijay Kumar', 'Chennai', 'INS1007'),
('Ananya P', 'Trichy', 'INS1008');

INSERT INTO Visits
(PatientID, DoctorID, VisitDate, Diagnosis, Prescription, Notes)
VALUES
(1, 1, '2026-10-05', 'High Blood Pressure', 'Medicine A', 'Regular checkup'),
(2, 2, '2026-10-10', 'Migraine', 'Medicine B', 'Rest advised'),
(3, 3, '2026-10-15', 'Knee Pain', 'Medicine C', 'Physiotherapy advised'),
(4, 1, '2026-11-02', 'Heart Checkup', 'Medicine D', 'Follow-up required'),
(5, 4, '2026-11-05', 'Skin Allergy', 'Medicine E', 'Avoid allergens'),
(6, 5, '2026-11-08', 'High Blood Pressure', 'Medicine F', 'Monitor BP'),
(1, 1, '2026-11-12', 'Blood Pressure Review', 'Medicine G', 'Second visit'),
(7, 3, '2026-09-20', 'Back Pain', 'Medicine H', 'Exercise advised'),
(8, 2, '2026-11-14', 'Migraine', 'Medicine I', 'Follow-up required'),
(2, 5, '2026-09-15', 'General Checkup', 'Medicine J', 'Routine visit');

INSERT INTO PatientBilling (VisitID, BillAmount)
VALUES
(1, 1500),
(2, 2000),
(3, 1800),
(4, 2500),
(5, 1200),
(6, 1600),
(7, 1800),
(8, 1000),
(9, 2200),
(10, 900);

SELECT * FROM Patients;
SELECT * FROM Departments;
SELECT * FROM Doctors;
SELECT * FROM Visits;
SELECT * FROM PatientBilling;

--Retrieve patients visited in November 2026
SELECT P.PatientID,P.PatientName,V.VisitDate,V.Diagnosis
FROM Patients P INNER JOIN Visits V ON P.PatientID = V.PatientID
WHERE V.VisitDate BETWEEN '2026-11-01' AND '2026-11-30';
--Retrieve doctors of the Cardiology department using LIKE
SELECT D.DoctorID,D.DoctorName,DP.DepartmentName
FROM Doctors D INNER JOIN Departments DP ON D.DepartmentID = DP.DepartmentID
WHERE DP.DepartmentName LIKE '%Cardio%';
--address update
UPDATE Patients SET Address = 'Chennai, Tamil Nadu' WHERE PatientID = 1;