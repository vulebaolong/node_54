-- phím tắt
-- thực thi câu lệnh: 	ctrl + enter (win)	| cmd + enter (mac)
-- reload dữ liệu: 		ctrl + R (win)   	| cmd + R (mac)

-- tạo database
CREATE DATABASE IF NOT EXISTS demo_2;
CREATE DATABASE IF NOT EXISTS cyber_community;


-- xoá database
DROP DATABASE IF EXISTS demo_1;
DROP DATABASE IF EXISTS demo_2;

-- table
CREATE TABLE `User` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`fullName` VARCHAR(255),
	`avatar` TEXT,
	`age` INT,
	`totpSecret` VARCHAR(255),
	`googleId` VARCHAR(255)
)

-- đổi tên TABLE
RENAME TABLE `User` TO `Users`;


-- xoá cột
ALTER TABLE `Users`
DROP COLUMN `age`;

-- thêm cột (sài nhiều)
ALTER TABLE `Users`
ADD COLUMN `password` VARCHAR(255)

-- RÀNG BUỘC 
-- DEFAULT: đặt giá trị mặc định cho một cột nếu không có giá trị
-- NOT NULL UNIQUE: không được null, phải duy nhất
-- PRIMARY KEY: là sự kết hợp của NOT NULL UNIQUE
-- 1 Table chỉ có 1 PRIMARY KEY
-- 1 PRYMARY KEY có thể gom nhiều cột

CREATE TABLE `Foods` (
	`id` INT  AUTO_INCREMENT,
	`name` VARCHAR(255),
	`description` VARCHAR(255) DEFAULT "Chưa có thông tin"
)

ALTER TABLE `Users`
MODIFY `email` VARCHAR(255) NOT NULL UNIQUE

INSERT INTO `Users`(`email`, `fullName`) VALUES
					("A@gmail.com", "nguyen van A"),
					("B@gmail.com", "nguyen van B"),
					("C@gmail.com", "nguyen van C"),
					("D@gmail.com", "nguyen van D"),
					("E@gmail.com", "nguyen van E")
					
INSERT INTO `Foods` (`name`, `description`) VALUES
					("gỏi gà", "được làm từ ga"),
					("gỏi vit", "được làm từ vịt"),
					("gỏi cá", "được làm từ cá"),
					("gỏi heo", "được làm từ heo")
					

-- lệnh hay sài khi xây dựng chức năng, muốn hồi phục lại ban đầu (reset)
SET FOREIGN_KEY_CHECK = 0		
TRUNCATE TABLE `Users`
SET FOREIGN_KEY_CHECK = 1
					



				



