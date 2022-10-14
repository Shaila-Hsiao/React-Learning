-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-09-28 11:18:21
-- 伺服器版本： 10.6.5-MariaDB
-- PHP 版本： 7.3.33


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `blueprint`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--
create database blueprint;
use blueprint;

CREATE TABLE `account` (
  `number` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `userID` varchar(100) NOT NULL,
  `passwd` varchar(100) NOT NULL,
  `email` text NOT NULL,
  `modelList` varchar(100) DEFAULT '\'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25\''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`number`, `name`, `userID`, `passwd`, `email`, `modelList`) VALUES
(1, 'rrrr', '23896989', '$2b$12$vAjOr.m8AtVxFoEqANlyYeexqMha8k1QqfyClK2TZzIvjWMvT3txC', 'isemail@gmail.com', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25'),
(2, '66', 'test', '$2b$12$w3wKZJj/aSaYGwc6vY3azeQ/635HdMVhKmBz9jLmUN0AXv.mFM6Xi', 'isemail@gmail.com', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25');

-- --------------------------------------------------------

--
-- 資料表結構 `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `date` datetime NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `thumbnailPath` text NOT NULL,
  `texturePath` text DEFAULT NULL,
  `jsPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(20) NOT NULL DEFAULT '1',
  `messageID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{}',
  `recordingID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{}',
  `imageID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{}'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `item`
--

INSERT INTO `item` (`id`, `name`, `thumbnailPath`, `texturePath`, `jsPath`, `type`, `messageID`, `recordingID`, `imageID`) VALUES
(1, 'Closed Door', './static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png', NULL, './static/models/js/closed-door28x80_baked.js', '7', NULL, NULL, NULL),
(2, 'Open Door', './static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png', NULL, './static/models/js/open_door.js', '7', NULL, NULL, NULL),
(3, 'Window', './static/models/thumbnails/thumbnail_window.png', NULL, './static/models/js/whitewindow.js', '3', NULL, NULL, NULL),
(4, 'Chair', './static/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg', NULL, './static/models/js/gus-churchchair-whiteoak.js', '1', NULL, NULL, NULL),
(5, 'Red Chair', './static/models/thumbnails/thumbnail_tn-orange.png', NULL, './static/models/js/ik-ekero-orange_baked.js', '1', NULL, NULL, NULL),
(6, 'Blue Chair', './static/models/thumbnails/thumbnail_ekero-blue3.png', NULL, './static/models/js/ik-ekero-blue_baked.js', '1', NULL, NULL, NULL),
(7, 'Dresser - Dark Wood', './static/models/thumbnails/thumbnail_matera_dresser_5.png', NULL, './static/models/js/DWR_MATERA_DRESSER2.js', '1', NULL, NULL, NULL),
(8, 'Dresser - White', './static/models/thumbnails/thumbnail_img25o.jpg', NULL, './static/models/js/we-narrow6white_baked.js', '1', NULL, NULL, NULL),
(9, 'Bedside table - Shale', './static/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg', NULL, './static/models/js/bd-shalebedside-smoke_baked.js', '1', NULL, NULL, NULL),
(10, 'Bedside table - White', './static/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg', NULL, './static/models/js/cb-archnight-white_baked.js', '1', NULL, NULL, NULL),
(11, 'Wardrobe - White', './static/models/thumbnails/thumbnail_TN-ikea-kvikine.png', NULL, './static/models/js/ik-kivine_baked.js', '1', NULL, NULL, NULL),
(12, 'Full Bed', './static/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG', NULL, './static/models/js/ik_nordli_full.js', '1', NULL, NULL, NULL),
(13, 'Bookshelf', './static/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg', NULL, './static/models/js/cb-kendallbookcasewalnut_baked.js', '1', NULL, NULL, NULL),
(14, 'Media Console - White', './static/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg', NULL, './static/models/js/cb-clapboard_baked.js', '1', NULL, NULL, NULL),
(15, 'Media Console - Black', './static/models/thumbnails/thumbnail_moore-60-media-console-1.jpg', NULL, './static/models/js/cb-moore_baked.js', '1', NULL, NULL, NULL),
(16, 'Sectional - Olive', './static/models/thumbnails/thumbnail_img21o.jpg', NULL, './static/models/js/we-crosby2piece-greenbaked.js', '1', NULL, NULL, NULL),
(17, 'Sofa - Grey', './static/models/thumbnails/thumbnail_rochelle-sofa-3.jpg', NULL, './static/models/js/cb-rochelle-gray_baked.js', '1', NULL, NULL, NULL),
(18, 'Wooden Trunk', './static/models/thumbnails/thumbnail_teca-storage-trunk.jpg', NULL, './static/models/js/cb-tecs_baked.js', '1', NULL, NULL, NULL),
(19, 'Floor Lamp', './static/models/thumbnails/thumbnail_ore-white.png', NULL, './static/models/js/ore-3legged-white_baked.js', '1', NULL, NULL, NULL),
(20, 'Coffee Table - Wood', './static/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG', NULL, './static/models/js/ik-stockholmcoffee-brown.js', '1', NULL, NULL, NULL),
(21, 'Side Table', './static/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png', NULL, './static/models/js/GUSossingtonendtable.js', '1', NULL, NULL, NULL),
(22, 'Dining Table', './static/models/thumbnails/thumbnail_scholar-dining-table.jpg', NULL, './static/models/js/cb-scholartable_baked.js', '1', NULL, NULL, NULL),
(23, 'Dining table', './static/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png', NULL, './static/models/js/BlakeAvenuejoshuatreecheftable.js', '1', NULL, NULL, NULL),
(24, 'Blue Rug', './static/models/thumbnails/thumbnail_cb-blue-block60x96.png', NULL, './static/models/js/cb-blue-block-60x96.js', '8', NULL, NULL, NULL),
(25, 'NYC Poster', './static/models/thumbnails/thumbnail_nyc2.jpg', NULL, './static/models/js/nyc-poster2.js', '2', NULL, NULL, NULL),
(26, 'Alice', './static/models/thumbnails/shWBWZl0JekAuih8TpWn6FseevI=.jpg', './static/models/textures/k2XbOkp8Ec4GFOFJRwZoKVMGBhU=.jpg', './static/models/js/Alice.js', '1', NULL, NULL, NULL),
(27, 'test', 'test', 'test', 'test', '1', '{\"userID\": \"aa\", \"testUser\": \"test\", \"test\": \"1\"}', '{}', '{}'),
(29, 'test', './static/models/thumbnails/hEId9o3TQ0qztotOsPHBtFcB4s0=.jpg', './static/models/textures/luAFoYZLQXYvDt1ux9nWwhUm9eU=.jpg', './static/models/js/test.js', '1', '{}', '{}', '{}');

-- --------------------------------------------------------

--
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `weather` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `color` text NOT NULL,
  `msgFrom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `message`
--

INSERT INTO `message` (`id`, `title`, `date`, `weather`, `content`, `color`, `msgFrom`) VALUES
(1, 'testMsg', '2022-09-02 11:06:06', 'testMsg', 'testMsg', '#232323', 'test'),
(2, 'testMsg', '2022-09-02 11:08:43', 'testMsg', 'testMsg', '#232323', 'test');

-- --------------------------------------------------------

--
-- 資料表結構 `recording`
--

CREATE TABLE `recording` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `path` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `introduction` longtext DEFAULT NULL,
  `roomJson` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`roomJson`)),
  `userID` varchar(100) NOT NULL,
  `private_public` varchar(100) NOT NULL,
  `msgList` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `room`
--

INSERT INTO `room` (`id`, `name`, `introduction`, `roomJson`, `userID`, `private_public`, `msgList`) VALUES
(1, 'test', NULL, '{}', 'test', '0', ''),
(2, 'test', NULL, '{\"a\":123}', 'test', '0', ''),
(3, 'test', NULL, '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'test', ''),
(4, 'test', NULL, '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'test', ''),
(5, 'test', NULL, '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'testuu', 'test', ''),
(6, 'test_to_repeat', NULL, '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'test', '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`number`),
  ADD UNIQUE KEY `id` (`userID`);
--
-- 資料表索引 `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `recording`
--
ALTER TABLE `recording`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account`
--
ALTER TABLE `account`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


--
-- 使用資料表自動遞增(AUTO_INCREMENT) `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `recording`
--
ALTER TABLE `recording`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
