-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-10-19 07:54:42
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
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '不可有中文',
  `passwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `headshotPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itemList` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`number`, `name`, `userID`, `passwd`, `email`, `introduction`, `headshotPath`, `itemList`) VALUES
(8, 'ee', 'ee', '$2b$12$elAfYAPKxK70x.NKDgbLdeottEN6SAF8o1.gccsKa3I/112fBcdP2', 'ee', NULL, NULL, '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,57'),
(9, '123', 'test', '$2b$12$baGW4Cm1uyrI4mSCl5BsyOKdrLtUC.JDQf822xiYCg8yDhZR3.wRu', 'tp6qup3aul430@gmail.com', NULL, NULL, '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25');

-- --------------------------------------------------------

--
-- 資料表結構 `boardmsg`
--

CREATE TABLE `boardmsg` (
  `id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `weather` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roomID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  `path` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `texturePath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jsPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `messageID` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '\'{}\'',
  `recordingID` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '\'{}\'',
  `imageID` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '\'{}\''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `item`
--

INSERT INTO `item` (`id`, `name`, `thumbnailPath`, `texturePath`, `jsPath`, `type`, `messageID`, `recordingID`, `imageID`) VALUES
(1, 'Closed Door', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png', NULL, './static/blueprint/models/js/closed-door28x80_baked.js', '7', NULL, NULL, NULL),
(2, 'Open Door', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png', NULL, './static/blueprint/models/js/open_door.js', '7', NULL, NULL, NULL),
(3, 'Window', './static/blueprint/models/thumbnails/thumbnail_window.png', NULL, './static/blueprint/models/js/whitewindow.js', '3', NULL, NULL, NULL),
(4, 'Chair', './static/blueprint/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg', NULL, './static/blueprint/models/js/gus-churchchair-whiteoak.js', '1', NULL, NULL, NULL),
(5, 'Red Chair', './static/blueprint/models/thumbnails/thumbnail_tn-orange.png', NULL, './static/blueprint/models/js/ik-ekero-orange_baked.js', '1', NULL, NULL, NULL),
(6, 'Blue Chair', './static/blueprint/models/thumbnails/thumbnail_ekero-blue3.png', NULL, './static/blueprint/models/js/ik-ekero-blue_baked.js', '1', NULL, NULL, NULL),
(7, 'Dresser - Dark Wood', './static/blueprint/models/thumbnails/thumbnail_matera_dresser_5.png', NULL, './static/blueprint/models/js/DWR_MATERA_DRESSER2.js', '1', NULL, NULL, NULL),
(8, 'Dresser - White', './static/blueprint/models/thumbnails/thumbnail_img25o.jpg', NULL, './static/blueprint/models/js/we-narrow6white_baked.js', '1', NULL, NULL, NULL),
(9, 'Bedside table - Shale', './static/blueprint/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg', NULL, './static/blueprint/models/js/bd-shalebedside-smoke_baked.js', '1', NULL, NULL, NULL),
(10, 'Bedside table - White', './static/blueprint/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg', NULL, './static/blueprint/models/js/cb-archnight-white_baked.js', '1', NULL, NULL, NULL),
(11, 'Wardrobe - White', './static/blueprint/models/thumbnails/thumbnail_TN-ikea-kvikine.png', NULL, './static/blueprint/models/js/ik-kivine_baked.js', '1', NULL, NULL, NULL),
(12, 'Full Bed', './static/blueprint/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG', NULL, './static/blueprint/models/js/ik_nordli_full.js', '1', NULL, NULL, NULL),
(13, 'Bookshelf', './static/blueprint/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg', NULL, './static/blueprint/models/js/cb-kendallbookcasewalnut_baked.js', '1', NULL, NULL, NULL),
(14, 'Media Console - White', './static/blueprint/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg', NULL, './static/blueprint/models/js/cb-clapboard_baked.js', '1', NULL, NULL, NULL),
(15, 'Media Console - Black', './static/blueprint/models/thumbnails/thumbnail_moore-60-media-console-1.jpg', NULL, './static/blueprint/models/js/cb-moore_baked.js', '1', NULL, NULL, NULL),
(16, 'Sectional - Olive', './static/blueprint/models/thumbnails/thumbnail_img21o.jpg', NULL, './static/blueprint/models/js/we-crosby2piece-greenbaked.js', '1', NULL, NULL, NULL),
(17, 'Sofa - Grey', './static/blueprint/models/thumbnails/thumbnail_rochelle-sofa-3.jpg', NULL, './static/blueprint/models/js/cb-rochelle-gray_baked.js', '1', NULL, NULL, NULL),
(18, 'Wooden Trunk', './static/blueprint/models/thumbnails/thumbnail_teca-storage-trunk.jpg', NULL, './static/blueprint/models/js/cb-tecs_baked.js', '1', NULL, NULL, NULL),
(19, 'Floor Lamp', './static/blueprint/models/thumbnails/thumbnail_ore-white.png', NULL, './static/blueprint/models/js/ore-3legged-white_baked.js', '1', NULL, NULL, NULL),
(20, 'Coffee Table - Wood', './static/blueprint/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG', NULL, './static/blueprint/models/js/ik-stockholmcoffee-brown.js', '1', NULL, NULL, NULL),
(21, 'Side Table', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png', NULL, './static/blueprint/models/js/GUSossingtonendtable.js', '1', NULL, NULL, NULL),
(22, 'Dining Table', './static/blueprint/models/thumbnails/thumbnail_scholar-dining-table.jpg', NULL, './static/blueprint/models/js/cb-scholartable_baked.js', '1', NULL, NULL, NULL),
(23, 'Dining table', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png', NULL, './static/blueprint/models/js/BlakeAvenuejoshuatreecheftable.js', '1', NULL, NULL, NULL),
(24, 'Blue Rug', './static/blueprint/models/thumbnails/thumbnail_cb-blue-block60x96.png', NULL, './static/blueprint/models/js/cb-blue-block-60x96.js', '8', NULL, NULL, NULL),
(25, 'NYC Poster', './static/blueprint/models/thumbnails/thumbnail_nyc2.jpg', NULL, './static/blueprint/models/js/nyc-poster2.js', '2', NULL, NULL, NULL),
(31, 'A', './static/blueprint/models/thumbnails/piitbbPMYLEEWBdFGpK8GM0tzDE=.jpg', './static/blueprint/models/js/vwBjklYyk2zlw6gFe8rgDr+dGcc=.jpg', './static/blueprint/models/js/A.js', '1', '{}', '{}', '{}'),
(32, 'Alice', './static/blueprint/models/thumbnails/L98QnXz52Gna5uDsC8+fFJP06CQ=.jpg', './static/blueprint/models/js/Ts1sBrmR+1mPntfb6zqBiSQsFEo=.jpg', './static/blueprint/models/js/Alice.js', '1', '{}', '{}', '{}'),
(35, 'uploads_files_2684340_Sofa', './static/blueprint/models/thumbnails/093a8f2cf27788cddac43d9f4e97cd023b115da5c38fafd5fc1ab58a1b98b1ee.jpg', './static/blueprint/models/js/6ad4fb5544d503f36643cbcae417578bd35be6f0f4b4a86a4aef8b859230ee61jpg', './static/blueprint/models/js/uploads_files_2684340_Sofa.js', '1', '{}', '{}', '{}'),
(36, 'hit', './static/blueprint/models/thumbnails/4a162f5ca33ada8e4947f5ce0da14036edc353f0490f83a64c5424ed61236746.jpg', './static/blueprint/models/js/38696d08296041f39ec3cc37686e78d60e6b79f805e0eda15173c44f10575e91jpg', './static/blueprint/models/js/hit.js', '1', '{}', '{}', '{}'),
(37, 'test', './static/blueprint/models/thumbnails/dffea8308936901367ca23551923bf076a0ee69d90296380533a3859af3ab47e.jpg', './static/blueprint/models/js/758bbd0747cde43772e623854d327b843ab8aa04b8cec5044e71c8e102d79dfcjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(38, 'test', './static/blueprint/models/thumbnails/b55ff9595eaaed179feeff3efa7133455c57de636e89390812a176d0a5cdf245.jpg', './static/blueprint/models/js/909a51acc09fcfab98dd646c3b5898a5dc053ff6ce01e8cef23c4fb632da96cbjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(39, 'test', './static/blueprint/models/thumbnails/6c332b9574ddb0534bd5e4a9a276f02db6aaceaa980f05c7e1ef4b629a2dc857.jpg', './static/blueprint/models/js/3835076b9ee0ba17ad7dc368a1185f50f9b71b048e05e6a4a121b400f824c2efjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(40, 'test', './static/blueprint/models/thumbnails/98b53f24b745dd36a7c5cbe08dca757a04247e0ef1838c832f56dff956795e23.jpg', './static/blueprint/models/js/5dd14c334f13702181b854ff877025455a47e7b3686c9ccd0ce32c639fb2e1edjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(41, 'test', './static/blueprint/models/thumbnails/6a946e728f6b2853dbd1a870943c9b65d8ee593fdada5cf2fea0f200b902584a.jpg', './static/blueprint/models/js/4a56316e4016668ca2562ba8c431238048a50c7efab73e8703debcffd109d4a8jpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(42, 'test', './static/blueprint/models/thumbnails/87eb21389b4a093849930c33cf92a124c43662dc21ebd7e48c2561ea75399754.jpg', './static/blueprint/models/js/0bdd830561999c02146b09ef324f91c66d0aafbed68dea05bb84ac80620a3f95jpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(43, 'test', './static/blueprint/models/thumbnails/75ece04b10eaa9bb258693b5f842f365bbfbff9492095be5eb4635cffc166bd2.jpg', './static/blueprint/models/js/e3be46914374c9176459c30856eb6af9b7ce8d08f836f90c312b74d5ce8e7b25jpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(44, 'test', './static/blueprint/models/thumbnails/68fdcfb0f0abdd4a5edc921e96310d69ae2c8a6015ca2ad6af66aab100fab948.jpg', './static/blueprint/models/js/f70c9771dfdcfd86d210944c8e1019dc8a6f33e12f4fccd63049e16153ab77e7jpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(45, 'test', './static/blueprint/models/thumbnails/646efa98f8559421f2847515b7cfb460e9bc521ca440ba4fc752c56bd3b74e5e.jpg', './static/blueprint/models/js/b52cc87d04efb6ea33b1eecc467f4d841ebcd514c32971ce7ffc468159d3e92ajpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(46, 'test', './static/blueprint/models/thumbnails/1ae6b76c00cc7f5557f79e5d2b7a286b0f3c9421c5bebb4e2189f4726bffaeb4.jpg', './static/blueprint/models/js/a8cca72bd2c7eb19d9176f2e1a6aaad925857e89d713a4db2ca5df1297cff30bjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(47, 'test', './static/blueprint/models/thumbnails/74195f4915b134be5fd1e9352d5f01beea43a18dfc6b19f4d928344873cd85c9.jpg', './static/blueprint/models/js/67e79c7caf5e0af355f5b8f242a1fbfc326e6a8834fddd3af4a5f4c96d2f1c7cjpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(48, 'test', './static/blueprint/models/thumbnails/539982df0932fdcc6792209d3b7b516fc4b0e0d54f51684c5d589940ee60b6b3.jpg', './static/blueprint/models/js/a66ced984ce461268965576554f7e0821713aaa7f8be7fe30b8bfc96191af46ejpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(49, 'test', './static/blueprint/models/thumbnails/d57675e5292d53c615e2c3d51b1b004e91e6c785921734bd0f58deea843106d1.jpg', './static/blueprint/models/js/702f2549bf26e3800bbe7f571386cd9d716ca5b37f366590a7f9a9a3c9c337f3jpg', './static/blueprint/models/js/test.js', '1', '{}', '{}', '{}'),
(50, 'uploads_files_3098038_Bike', './static/blueprint/models/thumbnails/825d0f687043e32c72a05ba9ee69f659816b3158b45177e8584a9fe5324dbaf9.jpg', './static/blueprint/models/js/c6e7d91bc5e3d8958b0b9f2ea109c5060b95e9d80d0ebaf1d270e04da9c13b30jpg', './static/blueprint/models/js/uploads_files_3098038_Bike.js', '1', '{}', '{}', '{}'),
(51, 'untitled', './static/blueprint/models/thumbnails/f14fd3d1c9a29253ca7fcb666ad81873754320cf1cef7d8dbe5c5080a8fcb418.jpg', './static/blueprint/models/js/7b4007ce9ca1c3e0718d8a2a0a77778be527e4e5e3d815f750483ef9cee12ed5jpg', './static/blueprint/models/js/untitled.js', '1', '{}', '{}', '{}'),
(52, 'old_rustic_stand', './static/blueprint/models/thumbnails/bea0d3c4628d6290b31eddbe21c6c0672eff19d21d1af3a69ef85cf8128efe84.jpg', './static/blueprint/models/js/fc0e9ed25bbe83ab737b27ae5ca5f6001c9ffb349f4d6fdf020be5b25ba5f566jpg', './static/blueprint/models/js/old_rustic_stand.js', '1', '{}', '{}', '{}'),
(53, 'old_rustic', './static/blueprint/models/thumbnails/b7958b8ea99f990c85da44bada678c8e4b586c2a50e9aede9ecf241ae4a78f15.jpg', './static/blueprint/models/js/06da150bb8a64f7b36c8a0d24d9a6bfcb08d0f175f6a87946b73a09e3f26fa5djpg', './static/blueprint/models/js/old_rustic.js', '1', '{}', '{}', '{}'),
(54, 'person', './static/blueprint/models/thumbnails/e0fa7362047bc70fab02347cb8bf3ae5dfb9bfe10ec371df2b7b064d28dd72ca.jpg', './static/blueprint/models/js/0957fc3dfc43fe5ff445449ff57cb1d46a23d53f88add4545abb32fae0609d4d.jpg', './static/blueprint/models/js/person.js', '1', '\'{}\'', '\'{}\'', '\'{}\''),
(55, 'pig', './static/blueprint/models/thumbnails/4f65543f61fd76173b9865d55b54728d476fe9fc20f65f422da7d9d60d8d4ac2.jpg', './static/blueprint/models/js/fb54f507132aed32976d6ad9db13a3ec898353c5c90067d80e2644f1f23cc97c.jpg', './static/blueprint/models/js/pig.js', '1', '\'{}\'', '\'{}\'', '\'{}\''),
(56, 'fish', './static/blueprint/models/thumbnails/c4cc7d31e182b72ecdf0f04354440dd2a99ed9577e9e14ff6741ccbaac2d3dbd.jpg', './static/blueprint/models/js/2c9e757cb62c2fe0523ad4d40dfcf84af85da4fe36ebd68e44dada8d95c0089d.jpg', './static/blueprint/models/js/fish.js', '1', '\'{}\'', '\'{}\'', '\'{}\''),
(57, 'fixnew', './static/blueprint/models/thumbnails/031af94056c1ff9493ffacab6b8f753526c0154a53863453d04cc03aba6ec58b.jpg', './static/blueprint/models/js/1be0d1a66c6815c0038955848c11ab54a155e9da1da76ae90dd6f29635a5d7a3.jpg', './static/blueprint/models/js/fixnew.js', '1', '\'{}\'', '\'{}\'', '\'{}\'');

-- --------------------------------------------------------

--
-- 資料表結構 `iteminfo`
--

CREATE TABLE `iteminfo` (
  `id` int(11) NOT NULL,
  `roomID` int(11) NOT NULL,
  `itemID` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `weather` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recordPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imageName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagePath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `weather` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `msgFrom` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
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
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `roomName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduction` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roomImgPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roomContent` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `private_public` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `room`
--

INSERT INTO `room` (`id`, `roomName`, `introduction`, `roomImgPath`, `roomContent`, `userID`, `private_public`) VALUES
(3, 'test', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'on'),
(4, 'test', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'on'),
(5, 'test', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'testuu', 'on'),
(6, 'test_to_repeat', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\":{\"corners\":{\"56d9ebd1-91b2-875c-799d-54b3785fca1f\":{\"x\":630.555,\"y\":-227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\":{\"x\":294.64,\"y\":-227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\":{\"x\":294.64,\"y\":232.664},\"254656bf-8a53-3987-c810-66b349f49b19\":{\"x\":745.7439999999998,\"y\":232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\":{\"x\":1044.7019999999998,\"y\":232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"x\":1044.7019999999998,\"y\":-105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\":{\"x\":745.7439999999998,\"y\":-105.66399999999999}},\"walls\":[{\"corner1\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\":\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}},{\"corner1\":\"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/light_brick.jpg\",\"stretch\":false,\"scale\":100}},{\"corner1\":\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0}},{\"corner1\":\"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\":\"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\":{\"url\":\"./static/rooms/textures/wallmap.png\",\"stretch\":true,\"scale\":0},\"backTexture\":{\"url\":\"./static/rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\":{\"url\":\"./static/rooms/textures/light_fine_wood.jpg\",\"scale\":300}}},\"items\":[{\"item_name\":\"Bedside table - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-archnight-white_baked.js\",\"xpos\":1001.0862865204286,\"ypos\":31.15939942141,\"zpos\":86.4297300551338,\"rotation\":-0.7872847644705953,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":886.8841174461031,\"ypos\":139.1510114697785,\"zpos\":-105.16400146484375,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Open Door\",\"item_type\":7,\"model_url\":\"./static/models/js/open_door.js\",\"xpos\":745.2440185546875,\"ypos\":110.5,\"zpos\":64.8291839065202,\"rotation\":-1.5707963267948966,\"scale_x\":1.7003089598352215,\"scale_y\":0.997292171703541,\"scale_z\":0.999415040540576,\"fixed\":false},{\"item_name\":\"Dresser - White\",\"item_type\":1,\"model_url\":\"./static/models/js/we-narrow6white_baked.js\",\"xpos\":898.0548281668393,\"ypos\":35.611997646165,\"zpos\":201.10860458067486,\"rotation\":-3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Media Console - White\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-clapboard_baked.js\",\"xpos\":658.6568227980731,\"ypos\":67.88999754395999,\"zpos\":-141.50237235990153,\"rotation\":-0.8154064090423808,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Full Bed\",\"item_type\":1,\"model_url\":\"./static/models/js/ik_nordli_full.js\",\"xpos\":939.5525544513545,\"ypos\":50,\"zpos\":-15.988409993966997,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Blue Rug\",\"item_type\":8,\"model_url\":\"./static/models/js/cb-blue-block-60x96.js\",\"xpos\":905.8690190229256,\"ypos\":0.25000500000000003,\"zpos\":44.59927303228528,\"rotation\":-1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Red Chair\",\"item_type\":1,\"model_url\":\"./static/models/js/ik-ekero-orange_baked.js\",\"xpos\":397.676038151142,\"ypos\":37.50235073007,\"zpos\":156.31701312594373,\"rotation\":2.4062972386507093,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Floor Lamp\",\"item_type\":1,\"model_url\":\"./static/models/js/ore-3legged-white_baked.js\",\"xpos\":346.697102333121,\"ypos\":72.163997943445,\"zpos\":-175.19915302127583,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Sofa - Grey\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-rochelle-gray_baked.js\",\"xpos\":356.92671999154373,\"ypos\":42.54509923821,\"zpos\":-21.686174295784554,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Closed Door\",\"item_type\":7,\"model_url\":\"./static/models/js/closed-door28x80_baked.js\",\"xpos\":637.2176377788675,\"ypos\":110.80000022010701,\"zpos\":232.16400146484375,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Bookshelf\",\"item_type\":1,\"model_url\":\"./static/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\":533.1460416453955,\"ypos\":92.17650034119151,\"zpos\":207.7644213268835,\"rotation\":3.141592653589793,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":534.9620937975317,\"ypos\":137.60931398864443,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":295.1400146484375,\"ypos\":141.43383044055196,\"zpos\":123.2280598724867,\"rotation\":1.5707963267948966,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false},{\"item_name\":\"Window\",\"item_type\":3,\"model_url\":\"./static/models/js/whitewindow.js\",\"xpos\":374.7738207971076,\"ypos\":138.62749831597068,\"zpos\":-227.08399963378906,\"rotation\":0,\"scale_x\":1,\"scale_y\":1,\"scale_z\":1,\"fixed\":false}]}', 'test', 'on');

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
-- 資料表索引 `iteminfo`
--
ALTER TABLE `iteminfo`
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
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `iteminfo`
--
ALTER TABLE `iteminfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
