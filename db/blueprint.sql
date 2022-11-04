-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2022 年 11 月 02 日 12:18
-- 伺服器版本： 5.7.34
-- PHP 版本： 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `blueprint`
--
create database blueprint;
use blueprint;

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `number` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '不可有中文',
  `passwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `headshotPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `itemList` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`number`, `name`, `userID`, `passwd`, `email`, `introduction`, `headshotPath`, `itemList`) VALUES
(8, 'ee', 'ee', '$2b$12$elAfYAPKxK70x.NKDgbLdeottEN6SAF8o1.gccsKa3I/112fBcdP2', 'ee', NULL, NULL, '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,57'),
(9, '123', 'test', '$2b$12$cU7aoVY7TqIMswBDzsU9JOtkJPhWUpRPfMxxBdj4N0bwMHEOUIc4C', 'tp6qup3aul430@gmail.com', NULL, NULL, '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25');

-- --------------------------------------------------------

--
-- 資料表結構 `boardmsg`
--

CREATE TABLE `boardmsg` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `weather` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `color` varchar(100) NOT NULL,
  `msgFrom` varchar(100) NOT NULL,
  `roomID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `texturePath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `jsPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `item`
--

INSERT INTO `item` (`id`, `name`, `thumbnailPath`, `texturePath`, `jsPath`, `type`) VALUES
(1, 'Closed Door', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png', NULL, './static/blueprint/models/js/closed-door28x80_baked.js', '7'),
(2, 'Open Door', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png', NULL, './static/blueprint/models/js/open_door.js', '7'),
(3, 'Window', './static/blueprint/models/thumbnails/thumbnail_window.png', NULL, './static/blueprint/models/js/whitewindow.js', '3'),
(4, 'Chair', './static/blueprint/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg', NULL, './static/blueprint/models/js/gus-churchchair-whiteoak.js', '1'),
(5, 'Red Chair', './static/blueprint/models/thumbnails/thumbnail_tn-orange.png', NULL, './static/blueprint/models/js/ik-ekero-orange_baked.js', '1'),
(6, 'Blue Chair', './static/blueprint/models/thumbnails/thumbnail_ekero-blue3.png', NULL, './static/blueprint/models/js/ik-ekero-blue_baked.js', '1'),
(7, 'Dresser - Dark Wood', './static/blueprint/models/thumbnails/thumbnail_matera_dresser_5.png', NULL, './static/blueprint/models/js/DWR_MATERA_DRESSER2.js', '1'),
(8, 'Dresser - White', './static/blueprint/models/thumbnails/thumbnail_img25o.jpg', NULL, './static/blueprint/models/js/we-narrow6white_baked.js', '1'),
(9, 'Bedside table - Shale', './static/blueprint/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg', NULL, './static/blueprint/models/js/bd-shalebedside-smoke_baked.js', '1'),
(10, 'Bedside table - White', './static/blueprint/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg', NULL, './static/blueprint/models/js/cb-archnight-white_baked.js', '1'),
(11, 'Wardrobe - White', './static/blueprint/models/thumbnails/thumbnail_TN-ikea-kvikine.png', NULL, './static/blueprint/models/js/ik-kivine_baked.js', '1'),
(12, 'Full Bed', './static/blueprint/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG', NULL, './static/blueprint/models/js/ik_nordli_full.js', '1'),
(13, 'Bookshelf', './static/blueprint/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg', NULL, './static/blueprint/models/js/cb-kendallbookcasewalnut_baked.js', '1'),
(14, 'Media Console - White', './static/blueprint/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg', NULL, './static/blueprint/models/js/cb-clapboard_baked.js', '1'),
(15, 'Media Console - Black', './static/blueprint/models/thumbnails/thumbnail_moore-60-media-console-1.jpg', NULL, './static/blueprint/models/js/cb-moore_baked.js', '1'),
(16, 'Sectional - Olive', './static/blueprint/models/thumbnails/thumbnail_img21o.jpg', NULL, './static/blueprint/models/js/we-crosby2piece-greenbaked.js', '1'),
(17, 'Sofa - Grey', './static/blueprint/models/thumbnails/thumbnail_rochelle-sofa-3.jpg', NULL, './static/blueprint/models/js/cb-rochelle-gray_baked.js', '1'),
(18, 'Wooden Trunk', './static/blueprint/models/thumbnails/thumbnail_teca-storage-trunk.jpg', NULL, './static/blueprint/models/js/cb-tecs_baked.js', '1'),
(19, 'Floor Lamp', './static/blueprint/models/thumbnails/thumbnail_ore-white.png', NULL, './static/blueprint/models/js/ore-3legged-white_baked.js', '1'),
(20, 'Coffee Table - Wood', './static/blueprint/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG', NULL, './static/blueprint/models/js/ik-stockholmcoffee-brown.js', '1'),
(21, 'Side Table', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png', NULL, './static/blueprint/models/js/GUSossingtonendtable.js', '1'),
(23, 'Dining table', './static/blueprint/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png', NULL, './static/blueprint/models/js/BlakeAvenuejoshuatreecheftable.js', '1'),
(24, 'Blue Rug', './static/blueprint/models/thumbnails/thumbnail_cb-blue-block60x96.png', NULL, './static/blueprint/models/js/cb-blue-block-60x96.js', '8'),
(25, 'NYC Poster', './static/blueprint/models/thumbnails/thumbnail_nyc2.jpg', NULL, './static/blueprint/models/js/nyc-poster2.js', '2'),
(58, 'ikea_malm_obj', './static/blueprint/models/thumbnails/fc1549a58b5f73cf20e6a00c93620ce3b1b17b59f2b011bc39a8a43518f1b2a6.jpg', './static/blueprint/models/js/11074e81b0b529e4b9923195e38e873017e1e2a0e478b72ee4de9d3dc5990b19.jpg', './static/blueprint/models/js/ikea_malm_obj.js', '1'),
(59, 'Bed_Smania_Caesar', './static/blueprint/models/thumbnails/65eddfdb78e8bae4dae25e5dab8f0b6422e720e6e164ba9902b083432dec419c.jpg', './static/blueprint/models/js/1da9c83327360c1b204bcf6d50c374c39ddf78ec122bf952e84a200d7a4a94bc.jpg', './static/blueprint/models/js/Bed_Smania_Caesar.js', '1'),
(60, 'prs007', './static/blueprint/models/thumbnails/5377adfea919c1c27cd0708bf76d6dff5333d6913431995b90cfff57971e14e1.jpg', './static/blueprint/models/js/a13407a126cf3e51c1f5cd04ab9711f01a062bf073118e1a1ccc3c5eb7bb65e4.jpg', './static/blueprint/models/js/prs007.js', '1'),
(64, 'drum model', './static/blueprint/models/thumbnails/cd9f45180c68b5996dd3665eb535bba84caae45e2ef08eeb77926934e6ad05ac.jpg', './static/blueprint/models/js/8ae762cb866e2cee244c5bb5f59d196ed83ecdcfa066c2baf8ff4230202de8bb.jpg', './static/blueprint/models/js/drum model.js', '1'),
(65, 'uploads_files_3098038_Bike', './static/blueprint/models/thumbnails/2f600abc97e814c3b7a7045ec566468718c193130c28958c97b28e2e3bc5d3da.jpg', './static/blueprint/models/js/4647b2e1ae06c5aa6752bac29a1fff1cf84761fbb3648f7f85a30a90ed58e09e.jpg', './static/blueprint/models/js/uploads_files_3098038_Bike.js', '1'),
(66, 'Guitar_01', './static/blueprint/models/thumbnails/711131689851957602091202ca93f1f37f463d714c69e7b3360a9442f5215efe.jpg', './static/blueprint/models/js/d04a01f22abc1f11231a2c8bc01b2c3e6dc15868ff256d84b8a39e96d6de08aa.jpg', './static/blueprint/models/js/Guitar_01.js', '1'),
(67, 'PRSModel', './static/blueprint/models/thumbnails/ed319e62026e6395378f62c7bf8012b85c93ab3083faead1ac30e2430e2190c1.jpg', './static/blueprint/models/js/62464ff8aacb6e15fc9683b0f04063aba8556488f01c05ff0dbbec7eec93de03.jpg', './static/blueprint/models/js/PRSModel.js', '1'),
(68, 'Fender Telecaster Custom', './static/blueprint/models/thumbnails/f71949a5239c3a550d6c87a667806c2df9fa902471be1e47fccd56d400b6f5d9.jpg', './static/blueprint/models/js/dc614583199711e51d4bcf818f017b57ff0cc8391f2e47ebdfc74f7d0d31c11a.jpg', './static/blueprint/models/js/Fender Telecaster Custom.js', '1'),
(69, 'marshall', './static/blueprint/models/thumbnails/a82d9aa99b0b2969a6590b89e69dd60428d9d0984eda483d6b33938ddf19e835.jpg', './static/blueprint/models/js/dad8e89cbb02f29459bf68f927af2864b986c0d3fb643899793eeed6cfe68250.jpg', './static/blueprint/models/js/marshall.js', '1'),
(70, 'chairs_block', './static/blueprint/models/thumbnails/ca9ea7fa81422534de8088bcb447f6eae8379f33d02e968635e1fe4cbf2548e9.jpg', './static/blueprint/models/js/b998b416545130095ff8cee247b157216a09c6af1817ae206f9651a32467fc30.jpg', './static/blueprint/models/js/chairs_block.js', '1'),
(71, 'FENDER', './static/blueprint/models/thumbnails/57941698fff3511c626ed2fad25175b53a771d4b1a7263832ee4d0650f934bdf.jpg', './static/blueprint/models/js/9645e0d8180cc241b2610f5d140e185df7ee7d193d25f679c99c731e7bd94f7a.jpg', './static/blueprint/models/js/FENDER.js', '1'),
(72, 'Guitar_02', './static/blueprint/models/thumbnails/93ee19eb73e8584aecfd1ff7690a84f1184e25a1a018d7271508b6e2c73fe6f8.jpg', './static/blueprint/models/js/ff0090c7ecd1cabd283ff81f40549d39febc198a86cf1d8aa55cb2bf346c755d.jpg', './static/blueprint/models/js/Guitar_02.js', '1'),
(73, 'gibson', './static/blueprint/models/thumbnails/4b9a523d37548b83d7f1ddbced934e7434b89fc85cf4d8779b6c61894e397914.jpg', './static/blueprint/models/js/fc8cf7ab076cc8fa2e37e38d31084bc5fab6127b18ef65c4b2ae47dd4583c414.jpg', './static/blueprint/models/js/gibson.js', '1'),
(74, 'Speaker', './static/blueprint/models/thumbnails/75e698c56aca402fe6864a445e78c78218279dcf63e5f25a2d3869e2d2bca3cc.jpg', './static/blueprint/models/js/f743c257f1aa01df987409a7dbeefaaae868477781471b68f727ecd51c2128dc.jpg', './static/blueprint/models/js/Speaker.js', '1'),
(82, 'drumer_black_jack', './static/blueprint/models/thumbnails/845ead6ae11531c91d0f699ba04ba8ffed2ff99ab93d1d876cbfbcbb7e473911.jpg', './static/blueprint/models/js/8f39ec09b6c728eabb611b57a01f4a4670172c5dde81ae041f6e428effe0041d.jpg', './static/blueprint/models/js/drumer_black_jack.js', '1'),
(84, 'model', './static/blueprint/models/thumbnails/0f71093e0bb6fe5aa8855a8ee880bf6bc7c899cda583ff0567cfa3396914fc4d.jpg', './static/blueprint/models/js/46bbf10c50c601c3e4e7b66ef4559ec70124f0a1555183ef6426c2d78d8436da.jpg', './static/blueprint/models/js/model.js', '1'),
(85, 'uploads_files_879333_piano', './static/blueprint/models/thumbnails/587e41aead13ea312cde89ce16630bc640ef0dcda864ded3cda17d2d96feab4a.jpg', './static/blueprint/models/js/a6fd748418d09de85637dedefaea532f94699b2fa9a145622b09819ce9c00811.jpg', './static/blueprint/models/js/uploads_files_879333_piano.js', '1'),
(89, 'Piano', './static/blueprint/models/thumbnails/a6be62381b203ce2846e594e74379abd78e1e041ae9296a9490f3f691fd54587.jpg', './static/blueprint/models/js/4d97a24bcc13bcb64de0d485256ea7416558b02dfeaac140e73f99b9ca4ea394.jpg', './static/blueprint/models/js/Piano.js', '1'),
(90, 'old_rustic_stand', './static/blueprint/models/thumbnails/7c94de98244774610169a3e480b6b0402ea288bdcc65fe4889e93e9c8c8679f8.jpg', './static/blueprint/models/js/f2dd47cc099abda40d20898e05d7aa118d53213bd63849d04df227a9764c7ec1.jpg', './static/blueprint/models/js/old_rustic_stand.js', '1'),
(91, 'Old_Dusty_Bookshelf', './static/blueprint/models/thumbnails/3257269308090683675f1253ac3798f4af854a45c0fe52e92c35647597de021b.jpg', './static/blueprint/models/js/2788f4dc1342abdde8b8978b7ec3c90ef825f6b1b283ce0ceb8592d4dd91583e.jpg', './static/blueprint/models/js/Old_Dusty_Bookshelf.js', '1'),
(93, 'uploads_files_3794442_rockingchair83h', './static/blueprint/models/thumbnails/6228e50c49ae26375a53fb445fe4d88eea1b05019e542110626c1f158c76b3c5.jpg', './static/blueprint/models/js/37601eaea001aeec7da88f80f809f3af2e41236b38eb256d7ac951018235c1f0.jpg', './static/blueprint/models/js/uploads_files_3794442_rockingchair83h.js', '1'),
(97, 'Nightstand', './static/blueprint/models/thumbnails/68930fbfe77fc29dff2d2352666c37d7aff79afe84eb0b39da6f33b6ace091d6.jpg', './static/blueprint/models/js/1ced8be53b11208731addefd3bce864b88b5c4f91aae6ca8e81d798c8cabf702.jpg', './static/blueprint/models/js/Nightstand.js', '1'),
(98, 'Antique_Medieval_Cradle', './static/blueprint/models/thumbnails/2950e5206b8cf61c01d9299bfabc5a28688da207f3484f534f513778025f84b4.jpg', './static/blueprint/models/js/6442903e8c3a36ae36ba486a5d870aa1eb428534f0f039991bb9fa80955068ae.jpg', './static/blueprint/models/js/Antique_Medieval_Cradle.js', '1'),
(99, 'AlvarAalto106', './static/blueprint/models/thumbnails/dc2a88c4b69d21733887a500864595b7839a776a82e2a8124599810b500b56d4.jpg', './static/blueprint/models/js/2a984b4fa472eadc1b583698efbf0e54012dd2b47f03e79a35659be2ede06f9c.jpg', './static/blueprint/models/js/AlvarAalto106.js', '1'),
(101, 'Sofa HollyWood OBJ', './static/blueprint/models/thumbnails/5e5a75a3e9c8f0c910f867503f96d35ac4cf12f087c005aed9af07cc58ce4029.jpg', './static/blueprint/models/js/66123386bc369f848d2a6286e1e898598f3e07bcb73b6f706a2cc4e703a6d63b.jpg', './static/blueprint/models/js/Sofa HollyWood OBJ.js', '1'),
(102, 'EscrivaninhaTX01', './static/blueprint/models/thumbnails/dc377921b838639f597c268d641ef822347f70f040750ba36f3338c733c500c4.jpg', './static/blueprint/models/js/daa8f795fae5cfa5d646ca8149a9504abb6f138d567152283f5bf3e56f107a7b.jpg', './static/blueprint/models/js/EscrivaninhaTX01.js', '1'),
(103, 'sofa', './static/blueprint/models/thumbnails/438b40cfc423e59d8601ff656f77cdfbb3b26106877327d7f02d14f8abee781a.jpg', './static/blueprint/models/js/50975f69f67ae7bb9e8c0397f05a0bbe2fd9f02a0a06ed85343ea0581ebd5a99.jpg', './static/blueprint/models/js/sofa.js', '1'),
(104, 'carpet', './static/blueprint/models/thumbnails/7c38ca59480e865741e06dc6b9b6fd5383315f90e9c1c17d1aef19af3063af60.jpg', './static/blueprint/models/js/e95c2ed1ccb7eb2e640275c28f6013e4a7c72f2a90e355ce83fe361b3a8acc97.jpg', './static/blueprint/models/js/carpet.js', '1'),
(105, 'fixnew', './static/blueprint/models/thumbnails/5810cb0aa0042a9f10c6f0471b273c83d466c6c5c726bd73e3711b5a03cd0caf.jpg', './static/blueprint/models/js/40f4c7458fe21c3531b5472ea22962a438f09517ea80ac0a18df7988086e5c3e.jpg', './static/blueprint/models/js/fixnew.js', '1');

-- --------------------------------------------------------

--
-- 資料表結構 `iteminfo`
--

CREATE TABLE `iteminfo` (
  `id` int(11) NOT NULL,
  `roomID` int(11) NOT NULL,
  `itemID` int(11) NOT NULL,
  `itemName` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `weather` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `imagePath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `recordPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `recordName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `roomName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduction` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `roomImgPath` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `roomContent` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `private_public` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `room`
--

INSERT INTO `room` (`id`, `roomName`, `introduction`, `roomImgPath`, `roomContent`, `userID`, `private_public`) VALUES
(4, 'test', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\": {\"corners\": {\"56d9ebd1-91b2-875c-799d-54b3785fca1f\": {\"x\": 630.555,\"y\": -227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\": {\"x\": 294.64,\"y\": -227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\": {\"x\": 294.64,\"y\": 232.664},\"254656bf-8a53-3987-c810-66b349f49b19\": {\"x\": 745.7439999999998,\"y\": 232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\": {\"x\": 1044.7019999999998,\"y\": 232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\": {\"x\": 1044.7019999999998,\"y\": -105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\": {\"x\": 745.7439999999998,\"y\": -105.66399999999999}},\"walls\": [{\"corner1\": \"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap_yellow.png\",\"stretch\": true,\"scale\": null}},{\"corner1\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap_yellow.png\",\"stretch\": true,\"scale\": null}},{\"corner1\": \"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\": \"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap_yellow.png\",\"stretch\": true,\"scale\": null}},{\"corner1\": \"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\": \"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap_yellow.png\",\"stretch\": true,\"scale\": null}},{\"corner1\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\": \"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0}},{\"corner1\": \"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\": \"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}},{\"corner1\": \"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0}},{\"corner1\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\": \"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap_yellow.png\",\"stretch\": true,\"scale\": null}}],\"wallTextures\": [],\"floorTextures\": {},\"newFloorTextures\": {\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\": {\"url\": \"./static/blueprint/rooms/textures/light_fine_wood.jpg\",\"scale\": 300}}},\"items\": [{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 886.8841174461031,\"ypos\": 139.1510114697785,\"zpos\": -105.16400146484375,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 10,\"item_name\": \"Bedside table - White\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-archnight-white_baked.js\",\"xpos\": 1001.0862865204286,\"ypos\": 31.15939942141,\"zpos\": 86.4297300551338,\"rotation\": -0.7872847644705953,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 8,\"item_name\": \"Dresser - White\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/we-narrow6white_baked.js\",\"xpos\": 898.0548281668393,\"ypos\": 35.611997646165,\"zpos\": 201.10860458067486,\"rotation\": -3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 2,\"item_name\": \"Open Door\",\"item_type\": 7,\"model_url\": \"./static/blueprint/models/js/open_door.js\",\"xpos\": 745.2440185546875,\"ypos\": 110.5,\"zpos\": 64.8291839065202,\"rotation\": -1.5707963267948966,\"scale_x\": 1.7003089598352215,\"scale_y\": 0.997292171703541,\"scale_z\": 0.999415040540576,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 12,\"item_name\": \"Full Bed\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/ik_nordli_full.js\",\"xpos\": 939.5525544513545,\"ypos\": 50,\"zpos\": -15.988409993966997,\"rotation\": -1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 14,\"item_name\": \"Media Console - White\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-clapboard_baked.js\",\"xpos\": 658.6568227980731,\"ypos\": 67.88999754395999,\"zpos\": -141.50237235990153,\"rotation\": -0.8154064090423808,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 24,\"item_name\": \"Blue Rug\",\"item_type\": 8,\"model_url\": \"./static/blueprint/models/js/cb-blue-block-60x96.js\",\"xpos\": 905.8690190229256,\"ypos\": 0.25000500000000003,\"zpos\": 44.59927303228528,\"rotation\": -1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 17,\"item_name\": \"Sofa - Grey\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-rochelle-gray_baked.js\",\"xpos\": 356.92671999154373,\"ypos\": 42.54509923821,\"zpos\": -21.686174295784554,\"rotation\": 1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 19,\"item_name\": \"Floor Lamp\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/ore-3legged-white_baked.js\",\"xpos\": 346.697102333121,\"ypos\": 72.163997943445,\"zpos\": -175.19915302127583,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 1,\"item_name\": \"Closed Door\",\"item_type\": 7,\"model_url\": \"./static/blueprint/models/js/closed-door28x80_baked.js\",\"xpos\": 637.2176377788675,\"ypos\": 110.80000022010701,\"zpos\": 232.16400146484375,\"rotation\": 3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 5,\"item_name\": \"Red Chair\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/ik-ekero-orange_baked.js\",\"xpos\": 397.676038151142,\"ypos\": 37.50235073007,\"zpos\": 156.31701312594373,\"rotation\": 2.4062972386507093,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 534.9620937975317,\"ypos\": 137.60931398864443,\"zpos\": -227.08399963378906,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 13,\"item_name\": \"Bookshelf\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\": 533.1460416453955,\"ypos\": 92.17650034119151,\"zpos\": 207.7644213268835,\"rotation\": 3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 295.1400146484375,\"ypos\": 141.43383044055196,\"zpos\": 123.2280598724867,\"rotation\": 1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 374.7738207971076,\"ypos\": 138.62749831597068,\"zpos\": -227.08399963378906,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0}]}\n', 'test', 'on'),
(8, 'aaaaaaaaaaaaaaaaaaaaaaa', NULL, '/static/static/media/2.032e4416.png', '{\"floorplan\": {\"corners\": {\"56d9ebd1-91b2-875c-799d-54b3785fca1f\": {\"x\": 630.555,\"y\": -227.58400000000006},\"8f4a050d-e102-3c3f-5af9-3d9133555d76\": {\"x\": 294.64,\"y\": -227.58400000000006},\"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\": {\"x\": 294.64,\"y\": 232.664},\"254656bf-8a53-3987-c810-66b349f49b19\": {\"x\": 745.7439999999998,\"y\": 232.664},\"11d25193-4411-fbbf-78cb-ae7c0283164b\": {\"x\": 1044.7019999999998,\"y\": 232.664},\"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\": {\"x\": 1044.7019999999998,\"y\": -105.66399999999999},\"e7db8654-efe1-bda2-099a-70585874d8c0\": {\"x\": 745.7439999999998,\"y\": -105.66399999999999}},\"walls\": [{\"corner1\": \"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"corner2\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}},{\"corner1\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/marbletiles.jpg\",\"stretch\": false,\"scale\": 300},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}},{\"corner1\": \"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"corner2\": \"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}},{\"corner1\": \"8f4a050d-e102-3c3f-5af9-3d9133555d76\",\"corner2\": \"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}},{\"corner1\": \"254656bf-8a53-3987-c810-66b349f49b19\",\"corner2\": \"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/marbletiles.jpg\",\"stretch\": false,\"scale\": 300}},{\"corner1\": \"11d25193-4411-fbbf-78cb-ae7c0283164b\",\"corner2\": \"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/marbletiles.jpg\",\"stretch\": false,\"scale\": 300}},{\"corner1\": \"edf0de13-df9f-cd6a-7d11-9bd13c36ce12\",\"corner2\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/marbletiles.jpg\",\"stretch\": false,\"scale\": 300}},{\"corner1\": \"e7db8654-efe1-bda2-099a-70585874d8c0\",\"corner2\": \"56d9ebd1-91b2-875c-799d-54b3785fca1f\",\"frontTexture\": {\"url\": \"./static/blueprint/rooms/textures/wallmap.png\",\"stretch\": true,\"scale\": 0},\"backTexture\": {\"url\": \"./static/blueprint/rooms/textures/light_brick.jpg\",\"stretch\": false,\"scale\": 100}}],\"wallTextures\": [],\"floorTextures\": {},\"newFloorTextures\": {\"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12\": {\"url\": \"./static/blueprint/rooms/textures/light_fine_wood.jpg\",\"scale\": 300},\"254656bf-8a53-3987-c810-66b349f49b19,4e312eca-6c4f-30d1-3d9a-a19a9d1ee359,56d9ebd1-91b2-875c-799d-54b3785fca1f,8f4a050d-e102-3c3f-5af9-3d9133555d76,e7db8654-efe1-bda2-099a-70585874d8c0\": {\"url\": \"./static/blueprint/rooms/textures/light_fine_wood.jpg\",\"scale\": 300}}},\"items\": [{\"item_id\": 2,\"item_name\": \"Open Door\",\"item_type\": 7,\"model_url\": \"./static/blueprint/models/js/open_door.js\",\"xpos\": 745.2440185546875,\"ypos\": 110.5,\"zpos\": 64.8291839065202,\"rotation\": -1.5707963267948966,\"scale_x\": 1.7003089598352215,\"scale_y\": 0.997292171703541,\"scale_z\": 0.999415040540576,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 886.8841174461031,\"ypos\": 139.1510114697785,\"zpos\": -105.16400146484375,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 8,\"item_name\": \"Dresser - White\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/we-narrow6white_baked.js\",\"xpos\": 898.0548281668393,\"ypos\": 35.611997646165,\"zpos\": 201.10860458067486,\"rotation\": -3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 17,\"item_name\": \"Sofa - Grey\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-rochelle-gray_baked.js\",\"xpos\": 356.92671999154373,\"ypos\": 42.54509923821,\"zpos\": -21.686174295784554,\"rotation\": 1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 5,\"item_name\": \"Red Chair\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/ik-ekero-orange_baked.js\",\"xpos\": 397.676038151142,\"ypos\": 37.50235073007,\"zpos\": 156.31701312594373,\"rotation\": 2.4062972386507093,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 1,\"item_name\": \"Closed Door\",\"item_type\": 7,\"model_url\": \"./static/blueprint/models/js/closed-door28x80_baked.js\",\"xpos\": 637.2176377788675,\"ypos\": 110.80000022010701,\"zpos\": 232.16400146484375,\"rotation\": 3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 13,\"item_name\": \"Bookshelf\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/cb-kendallbookcasewalnut_baked.js\",\"xpos\": 533.1460416453955,\"ypos\": 92.17650034119151,\"zpos\": 207.7644213268835,\"rotation\": 3.141592653589793,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 534.9620937975317,\"ypos\": 137.60931398864443,\"zpos\": -227.08399963378906,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 295.1400146484375,\"ypos\": 141.43383044055196,\"zpos\": 123.2280598724867,\"rotation\": 1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 3,\"item_name\": \"Window\",\"item_type\": 3,\"model_url\": \"./static/blueprint/models/js/whitewindow.js\",\"xpos\": 374.7738207971076,\"ypos\": 138.62749831597068,\"zpos\": -227.08399963378906,\"rotation\": 0,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 89,\"item_name\": \"Piano\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/Piano.js\",\"xpos\": 617.0424415328249,\"ypos\": 76.2,\"zpos\": -74.89382121852611,\"rotation\": -2.381109500415725,\"scale_x\": 1.7248984381157826,\"scale_y\": 1.4557760455528754,\"scale_z\": 1.465961165023248,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 82,\"item_name\": \"drumer_black_jack\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/drumer_black_jack.js\",\"xpos\": 913.1710137772617,\"ypos\": 76.2,\"zpos\": 43.254500842696416,\"rotation\": -1.5707963267948966,\"scale_x\": 20.653912631672757,\"scale_y\": 25.888542689085735,\"scale_z\": 20.483904006296786,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 73,\"item_name\": \"gibson\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/gibson.js\",\"xpos\": 714.3948013200891,\"ypos\": 69.85,\"zpos\": 192.1803377482259,\"rotation\": -1.5707963267948966,\"scale_x\": 0.1548003814647069,\"scale_y\": 0.14327535348991105,\"scale_z\": 0.1730356036865971,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 72,\"item_name\": \"Guitar_02\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/Guitar_02.js\",\"xpos\": 408.07066460571895,\"ypos\": 69.85,\"zpos\": -203.8978995267151,\"rotation\": 0,\"scale_x\": 179.95231972001113,\"scale_y\": 168.71206393909458,\"scale_z\": 179.43175235592477,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 67,\"item_name\": \"PRSModel\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/PRSModel.js\",\"xpos\": 358.1518413668447,\"ypos\": 69.85,\"zpos\": -204.79322957960733,\"rotation\": 0,\"scale_x\": 31.23293869982441,\"scale_y\": 28.32808341150424,\"scale_z\": 29.265370080191722,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 66,\"item_name\": \"Guitar_01\",\"item_type\": 1,\"model_url\": \"./static/blueprint/models/js/Guitar_01.js\",\"xpos\": 457.738406744485,\"ypos\": 69.85,\"zpos\": -203.38654336077286,\"rotation\": 0,\"scale_x\": 137.43398839927278,\"scale_y\": 138.0097940522422,\"scale_z\": 150.2679129832153,\"fixed\": false,\"itemInfo_id\": 0},{\"item_id\": 25,\"item_name\": \"NYC Poster\",\"item_type\": 2,\"model_url\": \"./static/blueprint/models/js/nyc-poster2.js\",\"xpos\": 739.4902682371869,\"ypos\": 149.07054130112783,\"zpos\": -61.017885288410426,\"rotation\": -1.5707963267948966,\"scale_x\": 1,\"scale_y\": 1,\"scale_z\": 1,\"fixed\": false,\"itemInfo_id\": 0}]}\n', 'test', 'on');

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `iteminfo`
--
ALTER TABLE `iteminfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
