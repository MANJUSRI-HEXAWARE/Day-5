
-- 1. Create Database
CREATE DATABASE RetailInventoryDB;

-- 2. Select Database
USE RetailInventoryDB;
GO

-- 3. Create Categories Table
CREATE TABLE Categories
(
    CategoryID INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName VARCHAR(50) NOT NULL UNIQUE
);
GO

-- 4. Create Suppliers Table
CREATE TABLE Suppliers
(
    SupplierID INT IDENTITY(1,1) PRIMARY KEY,
    SupplierName VARCHAR(100) NOT NULL,
    SupplierPhone VARCHAR(15) NOT NULL
);
GO

-- 5. Create Warehouses Table
CREATE TABLE Warehouses
(
    WarehouseID INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseName VARCHAR(100) NOT NULL UNIQUE,
    Location VARCHAR(100) NOT NULL
);
GO

-- 6. Create Products Table
CREATE TABLE Products
(
    SKU VARCHAR(20) PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    CategoryID INT NOT NULL,
    SupplierID INT NOT NULL,

    FOREIGN KEY (CategoryID)
        REFERENCES Categories(CategoryID)
        ON UPDATE CASCADE
        ON DELETE NO ACTION,

    FOREIGN KEY (SupplierID)
        REFERENCES Suppliers(SupplierID)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
GO

-- 7. Create Inventory Table
CREATE TABLE Inventory
(
    SKU VARCHAR(20) NOT NULL,
    WarehouseID INT NOT NULL,
    Quantity INT NOT NULL DEFAULT 0,
    ReorderLevel INT NOT NULL DEFAULT 5,

    PRIMARY KEY (SKU, WarehouseID),

    CHECK (Quantity >= 0),
    CHECK (ReorderLevel >= 0),

    FOREIGN KEY (SKU)
        REFERENCES Products(SKU)
        ON UPDATE CASCADE
        ON DELETE NO ACTION,

    FOREIGN KEY (WarehouseID)
        REFERENCES Warehouses(WarehouseID)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
GO

SELECT * FROM Categories;
SELECT * FROM Suppliers;
SELECT * FROM Warehouses;
SELECT * FROM Products;
SELECT * FROM Inventory;


-- TASK 3: INSERT VALID DATA
-- 1. INSERT INTO CATEGORIES (10 ROWS)

INSERT INTO Categories (CategoryName)
VALUES
('Electronics'),
('Accessories'),
('Furniture'),
('Clothing'),
('Footwear'),
('Home Appliances'),
('Books'),
('Sports'),
('Beauty'),
('Toys');
GO

SELECT * FROM Categories ORDER BY CategoryID;

-- 2. INSERT INTO SUPPLIERS (10 ROWS)

INSERT INTO Suppliers (SupplierName, SupplierPhone)
VALUES
('ABC Suppliers', '9876543210'),
('XYZ Traders', '9876543211'),
('Global Distributors', '9876543212'),
('Prime Supplies', '9876543213'),
('Tech World', '9876543214'),
('City Wholesale', '9876543215'),
('Star Enterprises', '9876543216'),
('Metro Suppliers', '9876543217'),
('National Traders', '9876543218'),
('Smart Distributors', '9876543219');
GO

-- 3. INSERT INTO WAREHOUSES (10 ROWS)

INSERT INTO Warehouses (WarehouseName, Location)
VALUES
('Chennai Warehouse', 'Chennai'),
('Bangalore Warehouse', 'Bangalore'),
('Mumbai Warehouse', 'Mumbai'),
('Delhi Warehouse', 'Delhi'),
('Hyderabad Warehouse', 'Hyderabad'),
('Kochi Warehouse', 'Kochi'),
('Pune Warehouse', 'Pune'),
('Coimbatore Warehouse', 'Coimbatore'),
('Kolkata Warehouse', 'Kolkata'),
('Jaipur Warehouse', 'Jaipur');
GO

-- 4. INSERT INTO PRODUCTS (10 ROWS)

INSERT INTO Products (SKU, ProductName, CategoryID, SupplierID)
VALUES
('P101', 'Laptop', 1, 1),
('P102', 'Wireless Mouse', 2, 2),
('P103', 'Office Chair', 3, 3),
('P104', 'Cotton Shirt', 4, 4),
('P105', 'Sports Shoes', 5, 5),
('P106', 'Refrigerator', 6, 6),
('P107', 'SQL Programming Book', 7, 7),
('P108', 'Football', 8, 8),
('P109', 'Face Cream', 9, 9),
('P110', 'Building Blocks', 10, 10);
GO

-- 5. INSERT INTO INVENTORY (20 ROWS)

INSERT INTO Inventory (SKU, WarehouseID, Quantity, ReorderLevel)
VALUES
('P101', 1, 50, 10),
('P101', 2, 30, 10),
('P102', 1, 100, 20),
('P102', 2, 40, 15),
('P103', 1, 25, 5),
('P103', 3, 15, 5),
('P104', 1, 60, 10),
('P104', 4, 35, 10),
('P105', 2, 45, 10),
('P105', 5, 20, 5),
('P106', 3, 18, 5),
('P106', 6, 12, 5),
('P107', 1, 80, 20),
('P107', 7, 30, 10),
('P108', 8, 55, 10),
('P108', 9, 25, 5),
('P109', 4, 70, 15),
('P109', 6, 30, 10),
('P110', 5, 40, 10),
('P110', 10, 20, 5);
GO

-- Failing insert test
--1.duplicate key 
INSERT INTO Products
(SKU, ProductName, CategoryID, SupplierID)
VALUES
('P101', 'Duplicate Laptop', 1, 1);
--2.missing parent
INSERT INTO Products
(SKU, ProductName, CategoryID, SupplierID)
VALUES
('P999', 'Test Product', 1, 9999);
--3.negative quantity
INSERT INTO Inventory
(SKU, WarehouseID, Quantity, ReorderLevel)
VALUES
('P101', 10, -10, 5);
--4.null in a mandatory column
INSERT INTO Suppliers
(SupplierName, SupplierPhone)
VALUES
(NULL, '9876500000');

--UPDATE AND DELETE
-- BEFORE UPDATE
SELECT * FROM Suppliers
WHERE SupplierName = 'ABC Suppliers';

-- UPDATE SUPPLIER PHONE NUMBER
UPDATE Suppliers
SET SupplierPhone = '9876501234'
WHERE SupplierName = 'ABC Suppliers';

-- AFTER UPDATE
SELECT * FROM Suppliers
WHERE SupplierName = 'ABC Suppliers';
GO


-- BEFORE DELETE
SELECT * FROM Products
WHERE SKU = 'P110';

SELECT * FROM Inventory
WHERE SKU = 'P110';

-- DELETE INVENTORY RECORDS FIRST
DELETE FROM Inventory
WHERE SKU = 'P110';

-- DELETE DISCONTINUED PRODUCT
DELETE FROM Products
WHERE SKU = 'P110';

-- AFTER DELETE
SELECT * FROM Products
WHERE SKU = 'P110';

SELECT * FROM Inventory
WHERE SKU = 'P110';
GO
