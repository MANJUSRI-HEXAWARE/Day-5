
-- TASK 2: BANK BRANCH ACCOUNTS DATABASE

-- 1. CREATE DATABASE
CREATE DATABASE BankBranchDB;
GO

-- 2. SELECT DATABASE
USE BankBranchDB;
GO

-- 3. CREATE CUSTOMERS TABLE
CREATE TABLE Customers
(
    CustomerID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL,
    Address VARCHAR(200) NOT NULL
);
GO

-- 4. CREATE BRANCHES TABLE
CREATE TABLE Branches
(
    BranchID INT IDENTITY(1,1) PRIMARY KEY,
    BranchName VARCHAR(100) NOT NULL UNIQUE,
    BranchAddress VARCHAR(200) NOT NULL
);
GO

-- 5. CREATE RELATIONSHIP MANAGERS TABLE
CREATE TABLE RelationshipManagers
(
    ManagerID INT IDENTITY(1,1) PRIMARY KEY,
    ManagerName VARCHAR(100) NOT NULL,
    BranchID INT NOT NULL,

    CONSTRAINT FK_Manager_Branch
    FOREIGN KEY (BranchID)
    REFERENCES Branches(BranchID)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    CONSTRAINT UQ_Manager_Branch
    UNIQUE (ManagerID, BranchID)
);
GO

-- 6. CREATE ACCOUNT TYPES TABLE
CREATE TABLE AccountTypes
(
    AccountTypeID INT IDENTITY(1,1) PRIMARY KEY,
    AccountTypeName VARCHAR(50) NOT NULL UNIQUE
);
GO

-- 7. CREATE ACCOUNTS TABLE
CREATE TABLE Accounts
(
    AccountID INT IDENTITY(1,1) PRIMARY KEY,
    AccountNumber VARCHAR(20) NOT NULL UNIQUE,
    AccountTypeName VARCHAR(50) NOT NULL,
    BranchID INT NOT NULL,
    ManagerID INT NOT NULL,
    Balance DECIMAL(12,2) NOT NULL DEFAULT 0,
    OpenedDate DATE NOT NULL DEFAULT GETDATE(),

    CONSTRAINT CK_Account_Savings_Balance
    CHECK (
        AccountTypeName <> 'Savings'
        OR Balance >= 0
    ),

    CONSTRAINT FK_Account_Type
    FOREIGN KEY (AccountTypeName)
    REFERENCES AccountTypes(AccountTypeName)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    CONSTRAINT FK_Account_Branch
    FOREIGN KEY (BranchID)
    REFERENCES Branches(BranchID)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    CONSTRAINT FK_Account_Manager_Branch
    FOREIGN KEY (ManagerID, BranchID)
    REFERENCES RelationshipManagers(ManagerID, BranchID)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
GO

-- 8. CREATE ACCOUNT HOLDERS TABLE
CREATE TABLE AccountHolders
(
    AccountID INT NOT NULL,
    CustomerID INT NOT NULL,

    PRIMARY KEY (AccountID, CustomerID),

    CONSTRAINT FK_Holder_Account
    FOREIGN KEY (AccountID)
    REFERENCES Accounts(AccountID)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT FK_Holder_Customer
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
GO
--
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE'
ORDER BY TABLE_NAME;
--
-- TABLE FOR DELETE
CREATE TABLE TestDelete
(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50)
);

-- TABLE FOR TRUNCATE
CREATE TABLE TestTruncate
(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50)
);

-- TABLE FOR DROP
CREATE TABLE TestDrop
(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50)
);
GO

-- INSERT 3 RECORDS INTO EACH TABLE
INSERT INTO TestDelete (Name)
VALUES ('Arun'), ('Bala'), ('Charan');

INSERT INTO TestTruncate (Name)
VALUES ('Arun'), ('Bala'), ('Charan');

INSERT INTO TestDrop (Name)
VALUES ('Arun'), ('Bala'), ('Charan');
GO

SELECT * FROM TestDelete;
DELETE FROM TestDelete;
INSERT INTO TestDelete (Name)
VALUES ('David');
--even after deleting identity val is not reset

SELECT * FROM TestTruncate;
TRUNCATE TABLE TestTruncate;
INSERT INTO TestTruncate (Name)
VALUES ('David');
--resets the identity after truncate too

SELECT * FROM TestDrop;
DROP TABLE TestDrop;
SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'TestDrop';

--rollback on delete
BEGIN TRANSACTION;
DELETE FROM TestDelete;
SELECT * FROM TestDelete;
ROLLBACK TRANSACTION;
SELECT * FROM TestDelete;

--rollback on truncate
BEGIN TRANSACTION;
TRUNCATE TABLE TestTruncate;
SELECT * FROM TestTruncate;
ROLLBACK TRANSACTION;
SELECT * FROM TestTruncate;

--rollback on drop
CREATE TABLE TestDrop
(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50)
);

INSERT INTO TestDrop (Name)
VALUES ('Arun'), ('Bala'), ('Charan');
GO

BEGIN TRANSACTION;
DROP TABLE TestDrop;
ROLLBACK TRANSACTION;
SELECT * FROM TestDrop;

--next task 
-- 1. INSERT CUSTOMERS
INSERT INTO Customers (CustomerName, Address)
VALUES
('Arun Kumar', 'Chennai'),
('Priya Sharma', 'Bangalore'),
('Rahul Raj', 'Mumbai'),
('Divya S', 'Delhi'),
('Karthik M', 'Chennai'),
('Sneha R', 'Hyderabad'),
('Vijay Kumar', 'Coimbatore'),
('Ananya P', 'Pune'),
('Sanjay R', 'Kochi'),
('Meena K', 'Chennai');
GO

-- 2. INSERT BRANCHES
INSERT INTO Branches (BranchName, BranchAddress)
VALUES
('Chennai Main Branch', 'Anna Salai, Chennai'),
('Bangalore Branch', 'MG Road, Bangalore'),
('Mumbai Branch', 'Andheri, Mumbai'),
('Delhi Branch', 'Connaught Place, Delhi');
GO

-- 3. INSERT RELATIONSHIP MANAGERS
INSERT INTO RelationshipManagers (ManagerName, BranchID)
VALUES
('Manoj', 1),
('Priya Menon', 1),
('Ramesh', 2),
('Kavitha', 3),
('Suresh', 4);
GO

-- 4. INSERT ACCOUNT TYPES
INSERT INTO AccountTypes (AccountTypeName)
VALUES
('Savings'),
('Current'),
('Salary');
GO

-- 5. INSERT ACCOUNTS
INSERT INTO Accounts
(AccountNumber, AccountTypeName, BranchID, ManagerID, Balance, OpenedDate)
VALUES
('ACC1001', 'Savings', 1, 1, 50000, '2026-07-10'),
('ACC1002', 'Current', 1, 2, 120000, '2026-07-20'),
('ACC1003', 'Savings', 2, 3, 75000, '2026-08-05'),
('ACC1004', 'Salary', 2, 3, 30000, '2026-08-15'),
('ACC1005', 'Savings', 3, 4, 90000, '2026-09-10'),
('ACC1006', 'Current', 3, 4, 150000, '2026-06-15'),
('ACC1007', 'Savings', 4, 5, 25000, '2026-10-05'),
('ACC1008', 'Salary', 1, 1, 40000, '2026-09-25'),
('ACC1009', 'Savings', 2, 3, 65000, '2026-07-28'),
('ACC1010', 'Current', 4, 5, 200000, '2026-05-12');
GO

-- 6. INSERT ACCOUNT HOLDERS
INSERT INTO AccountHolders (AccountID, CustomerID)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
-- Joint account example
(1, 2);
GO

SELECT * FROM Customers;
SELECT * FROM Branches;
SELECT * FROM RelationshipManagers;
SELECT * FROM AccountTypes;
SELECT * FROM Accounts;
SELECT * FROM AccountHolders;

--WHERE and AND 
SELECT * FROM Accounts WHERE AccountTypeName = 'Savings'
AND Balance > 50000;
--WHERE with OR
SELECT * FROM Accounts WHERE BranchID = 1
OR BranchID = 2;
--IN
SELECT * FROM Accounts
WHERE AccountTypeName IN ('Savings', 'Salary');
--BETWEEN
SELECT *FROM Accounts
WHERE Balance BETWEEN 40000 AND 100000;
--Accounts opened in the last quarter using the above 
SELECT AccountNumber,AccountTypeName,Balance,OpenedDate,BranchID
FROM Accounts WHERE OpenedDate BETWEEN '2026-07-01' AND '2026-09-30' AND Balance > 50000;

--update
SELECT * FROM Accounts WHERE AccountNumber = 'ACC1001';
UPDATE Accounts SET Balance = 60000 WHERE AccountNumber = 'ACC1001';
--DELETE
DELETE FROM Accounts WHERE AccountNumber = 'ACC1010';
SELECT * FROM Accounts WHERE AccountNumber = 'ACC1010';
