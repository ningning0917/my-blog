/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : 127.0.0.1:3306
 Source Schema         : egg_study

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 12/11/2019 17:17:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------
BEGIN;
INSERT INTO `SequelizeMeta` VALUES ('20191105020740-init-user.js');
INSERT INTO `SequelizeMeta` VALUES ('20191105020740-init-users.js');
INSERT INTO `SequelizeMeta` VALUES ('20191105021212-init-userLogin.js');
INSERT INTO `SequelizeMeta` VALUES ('20191105041951-init-userLogin_L.js');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `userType` char(1) NOT NULL,
  `IDType` char(1) DEFAULT '0',
  `IDNO` varchar(30) DEFAULT NULL,
  `cell` varchar(30) DEFAULT NULL,
  `secQuestion1` varchar(100) DEFAULT NULL,
  `secQuestion2` varchar(100) DEFAULT NULL,
  `secQuestion3` varchar(100) DEFAULT NULL,
  `secAnswer1` varchar(100) DEFAULT NULL,
  `secAnswer2` varchar(100) DEFAULT NULL,
  `secAnswer3` varchar(100) DEFAULT NULL,
  `secPassword` varchar(30) DEFAULT NULL,
  `status` char(1) NOT NULL DEFAULT '0',
  `validStatus` char(1) NOT NULL DEFAULT '0',
  `note` text,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `modifyTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `closeDate` date DEFAULT NULL,
  `loginNum` int(11) NOT NULL DEFAULT '0',
  `lastLoginTime` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `IDNO` (`IDNO`),
  UNIQUE KEY `cell` (`cell`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'admin', NULL, 'A', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-05 10:18:06', '2019-11-05 10:18:06', NULL, 83, '2019-11-09 23:41:16');
INSERT INTO `user` VALUES (2, 'user', 'wk', NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-05 18:16:13', '2019-11-05 18:16:13', NULL, 0, NULL);
INSERT INTO `user` VALUES (3, 'adminew', NULL, NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 12:39:19', '2019-11-06 12:39:19', NULL, 0, NULL);
INSERT INTO `user` VALUES (4, 'editor', NULL, NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 12:42:01', '2019-11-06 12:42:01', NULL, 4, '2019-11-08 17:40:23');
INSERT INTO `user` VALUES (5, 'test', NULL, NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 15:37:02', '2019-11-06 15:37:02', NULL, 0, NULL);
INSERT INTO `user` VALUES (6, 'test2', NULL, NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 15:38:28', '2019-11-06 15:38:28', NULL, 0, NULL);
INSERT INTO `user` VALUES (7, 'test3', NULL, NULL, 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 15:39:09', '2019-11-06 15:39:09', NULL, 0, NULL);
INSERT INTO `user` VALUES (8, 'test5', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15730259481852038.jpeg', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 15:44:14', '2019-11-06 15:44:14', NULL, 0, NULL);
INSERT INTO `user` VALUES (9, 'editors', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15730264606938269.gif', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 15:47:42', '2019-11-06 15:47:42', NULL, 4, '2019-11-11 14:52:40');
INSERT INTO `user` VALUES (10, 'my', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15730278389006668.jpg', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-06 16:10:40', '2019-11-06 16:10:40', NULL, 1, '2019-11-06 16:10:51');
INSERT INTO `user` VALUES (29, 'websmallrabbit', NULL, 'https://avatars0.githubusercontent.com/u/34472552?v=4', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-07 13:03:37', '2019-11-07 13:03:37', NULL, 10, '2019-11-10 01:33:44');
INSERT INTO `user` VALUES (30, 'wupeipei', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15733145759516555.jpeg', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-09 23:49:37', '2019-11-09 23:49:37', NULL, 1, '2019-11-09 23:49:45');
INSERT INTO `user` VALUES (31, 'admin111', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15733147142859703.jpeg', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-09 23:52:10', '2019-11-09 23:52:10', NULL, 1, '2019-11-09 23:52:23');
INSERT INTO `user` VALUES (32, 'wupeipei1', NULL, 'https://webrabbit.oss-cn-beijing.aliyuncs.com/15733147855683050.jpg', 'C', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', NULL, '2019-11-09 23:53:13', '2019-11-09 23:53:13', NULL, 1, '2019-11-09 23:53:21');
COMMIT;

-- ----------------------------
-- Table structure for userLogin
-- ----------------------------
DROP TABLE IF EXISTS `userLogin`;
CREATE TABLE `userLogin` (
  `loginString` varchar(100) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`loginString`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userLogin
-- ----------------------------
BEGIN;
INSERT INTO `userLogin` VALUES ('admin', 10000000, '$2a$10$nrRFB0Y53DauFxVdrm1yk.preQ9KKgWGPUO33CXW6BRxyF7WRPbqG', '$2a$10$nrRFB0Y53DauFxVdrm1yk.', '0');
INSERT INTO `userLogin` VALUES ('admin111', 31, '$2a$10$PwfWBAj5WKC1O2tjUvRObeJW4pCkmDDX4cxRsBPyBHYIQ4EGMCoS2', '$2a$10$PwfWBAj5WKC1O2tjUvRObe', '0');
INSERT INTO `userLogin` VALUES ('adminew', 3, '$2a$10$a.k06sL2WoZKg3CjMFB8WOgs89dngbCqlkTok66m.eOvWvD0hM6xS', '$2a$10$a.k06sL2WoZKg3CjMFB8WO', '0');
INSERT INTO `userLogin` VALUES ('editor', 4, '$2a$10$ndyqM.Vg/yU8zf9hqGoji.fbb99G.TOdY/iJrDt51COHb2TMZB2Tq', '$2a$10$ndyqM.Vg/yU8zf9hqGoji.', '0');
INSERT INTO `userLogin` VALUES ('editors', 9, '$2a$10$aoP7qfyM3ZvvAGJVa/wmM.1y02rNbXCF4hObKSleZyCRELCvWqgO2', '$2a$10$aoP7qfyM3ZvvAGJVa/wmM.', '0');
INSERT INTO `userLogin` VALUES ('my', 10, '$2a$10$Ja7QcoDnKZwGiQHW6JY9euisjk4Xzfmelk3YWlyUBkk489lUODhLO', '$2a$10$Ja7QcoDnKZwGiQHW6JY9eu', '0');
INSERT INTO `userLogin` VALUES ('test', 5, '$2a$10$VVnY8RjL6pcv4rr0UPWxR.ANRkGoIDWcnhS783nHXwTmWgEck/AlS', '$2a$10$VVnY8RjL6pcv4rr0UPWxR.', '0');
INSERT INTO `userLogin` VALUES ('test2', 6, '$2a$10$1yvWqQRnkYq3AIuLgDopreLRF6L29.mDQmzJsjhcnt020iuJmSI4O', '$2a$10$1yvWqQRnkYq3AIuLgDopre', '0');
INSERT INTO `userLogin` VALUES ('test3', 7, '$2a$10$439Euw3JBBcs2s/5BakhBesiZx5NYsyVwHSVhBMgjSG7P1LvLpXem', '$2a$10$439Euw3JBBcs2s/5BakhBe', '0');
INSERT INTO `userLogin` VALUES ('test5', 8, '$2a$10$YHElWL3TxjNs19WXxeQxgOhdEUlbLbrqpHHuyKNYO47SG7A6tZxVq', '$2a$10$YHElWL3TxjNs19WXxeQxgO', '0');
INSERT INTO `userLogin` VALUES ('websmallrabbit', 29, '$2a$10$jnCQcVR5JhVTHMLt.V5rpejPijEAYaWrckw3UPDt4nU5qJG53kAeK', '$2a$10$jnCQcVR5JhVTHMLt.V5rpe', '0');
INSERT INTO `userLogin` VALUES ('wupeipei', 30, '$2a$10$K0wMJj3VxP1pOw9NJfFZ6.29CKtXa/9zgd/Ab4oxcfQu.Sufdyso6', '$2a$10$K0wMJj3VxP1pOw9NJfFZ6.', '0');
INSERT INTO `userLogin` VALUES ('wupeipei1', 32, '$2a$10$DU1bE0lrcC4fNdYBLRf3EuX6t3D6u2kGkgwBUHFHEVbrRJ3X.Eumu', '$2a$10$DU1bE0lrcC4fNdYBLRf3Eu', '0');
COMMIT;

-- ----------------------------
-- Table structure for userLogin_L
-- ----------------------------
DROP TABLE IF EXISTS `userLogin_L`;
CREATE TABLE `userLogin_L` (
  `logID` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `loginString` varchar(100) DEFAULT NULL,
  `loginLogType` char(1) DEFAULT NULL,
  `logDESC` text,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`logID`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userLogin_L
-- ----------------------------
BEGIN;
INSERT INTO `userLogin_L` VALUES (1, 1, 'admin', 'L', NULL, '2019-11-05 12:23:02');
INSERT INTO `userLogin_L` VALUES (2, 1, 'admin', 'L', NULL, '2019-11-05 12:24:25');
INSERT INTO `userLogin_L` VALUES (3, 1, 'admin', 'L', NULL, '2019-11-05 12:25:11');
INSERT INTO `userLogin_L` VALUES (4, 1, 'admin', 'L', NULL, '2019-11-05 13:44:22');
INSERT INTO `userLogin_L` VALUES (5, 1, 'admin', 'L', NULL, '2019-11-05 13:44:36');
INSERT INTO `userLogin_L` VALUES (6, 1, 'admin', 'L', NULL, '2019-11-05 13:44:56');
INSERT INTO `userLogin_L` VALUES (7, 1, 'admin', 'L', NULL, '2019-11-05 13:45:29');
INSERT INTO `userLogin_L` VALUES (8, 1, 'admin', 'L', NULL, '2019-11-05 14:41:37');
INSERT INTO `userLogin_L` VALUES (9, 1, 'admin', 'L', NULL, '2019-11-05 14:42:43');
INSERT INTO `userLogin_L` VALUES (10, 1, 'admin', 'L', NULL, '2019-11-05 14:45:04');
INSERT INTO `userLogin_L` VALUES (11, 1, 'admin', 'L', NULL, '2019-11-05 14:46:16');
INSERT INTO `userLogin_L` VALUES (12, 1, 'admin', 'L', NULL, '2019-11-05 14:47:34');
INSERT INTO `userLogin_L` VALUES (13, 1, 'admin', 'L', NULL, '2019-11-05 14:53:51');
INSERT INTO `userLogin_L` VALUES (14, 1, 'admin', 'L', NULL, '2019-11-05 14:54:32');
INSERT INTO `userLogin_L` VALUES (15, 1, 'admin', 'L', NULL, '2019-11-05 14:55:46');
INSERT INTO `userLogin_L` VALUES (16, 1, 'admin', 'L', NULL, '2019-11-05 14:56:30');
INSERT INTO `userLogin_L` VALUES (17, 1, 'admin', 'L', NULL, '2019-11-05 14:57:24');
INSERT INTO `userLogin_L` VALUES (18, 1, 'admin', 'L', NULL, '2019-11-05 14:57:33');
INSERT INTO `userLogin_L` VALUES (19, 1, 'admin', 'L', NULL, '2019-11-05 14:58:15');
INSERT INTO `userLogin_L` VALUES (20, 1, 'admin', 'L', NULL, '2019-11-05 14:58:24');
INSERT INTO `userLogin_L` VALUES (21, 1, 'admin', 'L', NULL, '2019-11-05 15:01:04');
INSERT INTO `userLogin_L` VALUES (22, 1, 'admin', 'L', NULL, '2019-11-05 15:07:29');
INSERT INTO `userLogin_L` VALUES (23, 1, 'admin', 'L', NULL, '2019-11-05 15:10:37');
INSERT INTO `userLogin_L` VALUES (24, 1, 'admin', 'L', NULL, '2019-11-05 15:11:35');
INSERT INTO `userLogin_L` VALUES (25, 1, 'admin', 'L', NULL, '2019-11-05 15:11:57');
INSERT INTO `userLogin_L` VALUES (26, 1, 'admin', 'L', NULL, '2019-11-05 15:14:57');
INSERT INTO `userLogin_L` VALUES (27, 1, 'admin', 'L', NULL, '2019-11-05 15:17:56');
INSERT INTO `userLogin_L` VALUES (28, 1, 'admin', 'L', NULL, '2019-11-05 15:19:04');
INSERT INTO `userLogin_L` VALUES (29, 1, 'admin', 'L', NULL, '2019-11-05 15:19:33');
INSERT INTO `userLogin_L` VALUES (30, 1, 'admin', 'L', NULL, '2019-11-05 15:20:53');
INSERT INTO `userLogin_L` VALUES (31, 1, 'admin', 'L', NULL, '2019-11-05 15:24:41');
INSERT INTO `userLogin_L` VALUES (32, 1, 'admin', 'L', NULL, '2019-11-05 15:25:18');
INSERT INTO `userLogin_L` VALUES (33, 1, 'admin', 'L', NULL, '2019-11-05 15:28:27');
INSERT INTO `userLogin_L` VALUES (34, 1, 'admin', 'L', NULL, '2019-11-05 15:47:56');
INSERT INTO `userLogin_L` VALUES (35, 1, 'admin', 'L', NULL, '2019-11-05 15:49:32');
INSERT INTO `userLogin_L` VALUES (36, 1, 'admin', 'L', NULL, '2019-11-05 15:56:25');
INSERT INTO `userLogin_L` VALUES (37, 1, 'admin', 'L', NULL, '2019-11-05 16:05:36');
INSERT INTO `userLogin_L` VALUES (38, 1, 'admin', 'L', NULL, '2019-11-05 16:09:25');
INSERT INTO `userLogin_L` VALUES (39, 1, 'admin', 'L', NULL, '2019-11-05 16:09:34');
INSERT INTO `userLogin_L` VALUES (40, 1, 'admin', 'L', NULL, '2019-11-05 16:12:46');
INSERT INTO `userLogin_L` VALUES (41, 1, 'admin', 'L', NULL, '2019-11-05 16:14:25');
INSERT INTO `userLogin_L` VALUES (42, 1, 'admin', 'L', NULL, '2019-11-05 16:14:31');
INSERT INTO `userLogin_L` VALUES (43, 1, 'admin', 'L', NULL, '2019-11-05 16:15:56');
INSERT INTO `userLogin_L` VALUES (44, 1, 'admin', 'L', NULL, '2019-11-05 16:42:54');
INSERT INTO `userLogin_L` VALUES (45, 1, 'admin', 'L', NULL, '2019-11-05 17:00:00');
INSERT INTO `userLogin_L` VALUES (46, 1, 'admin', 'L', NULL, '2019-11-05 17:03:30');
INSERT INTO `userLogin_L` VALUES (47, 1, 'admin', 'L', NULL, '2019-11-05 17:07:50');
INSERT INTO `userLogin_L` VALUES (48, 1, 'admin', 'L', NULL, '2019-11-05 17:09:16');
INSERT INTO `userLogin_L` VALUES (49, 1, 'admin', 'L', NULL, '2019-11-05 17:22:20');
INSERT INTO `userLogin_L` VALUES (50, 1, 'admin', 'L', NULL, '2019-11-05 17:38:03');
INSERT INTO `userLogin_L` VALUES (51, 1, 'admin', 'L', NULL, '2019-11-05 18:10:10');
INSERT INTO `userLogin_L` VALUES (52, 1, 'admin', 'L', NULL, '2019-11-05 18:35:13');
INSERT INTO `userLogin_L` VALUES (53, 1, 'admin', 'L', NULL, '2019-11-05 18:35:15');
INSERT INTO `userLogin_L` VALUES (54, 1, 'admin', 'L', NULL, '2019-11-05 18:35:27');
INSERT INTO `userLogin_L` VALUES (55, 1, 'admin', 'L', NULL, '2019-11-05 18:35:31');
INSERT INTO `userLogin_L` VALUES (56, 1, 'admin', 'L', NULL, '2019-11-05 18:36:48');
INSERT INTO `userLogin_L` VALUES (57, 1, 'admin', 'L', NULL, '2019-11-05 18:37:26');
INSERT INTO `userLogin_L` VALUES (58, 1, 'admin', 'L', NULL, '2019-11-05 18:38:06');
INSERT INTO `userLogin_L` VALUES (59, 1, 'admin', 'L', NULL, '2019-11-05 18:39:48');
INSERT INTO `userLogin_L` VALUES (60, 1, 'admin', 'L', NULL, '2019-11-05 18:40:15');
INSERT INTO `userLogin_L` VALUES (61, 1, 'admin', 'L', NULL, '2019-11-05 18:40:37');
INSERT INTO `userLogin_L` VALUES (62, 1, 'admin', 'L', NULL, '2019-11-05 18:41:40');
INSERT INTO `userLogin_L` VALUES (63, 1, 'admin', 'L', NULL, '2019-11-05 18:43:25');
INSERT INTO `userLogin_L` VALUES (64, 1, 'admin', 'L', NULL, '2019-11-05 18:43:58');
INSERT INTO `userLogin_L` VALUES (65, 1, 'admin', 'L', NULL, '2019-11-05 18:44:46');
INSERT INTO `userLogin_L` VALUES (66, 1, 'admin', 'L', NULL, '2019-11-05 18:45:14');
INSERT INTO `userLogin_L` VALUES (67, 1, 'admin', 'L', NULL, '2019-11-06 09:03:00');
INSERT INTO `userLogin_L` VALUES (68, 4, 'editor', 'L', NULL, '2019-11-06 12:42:14');
INSERT INTO `userLogin_L` VALUES (69, 4, 'editor', 'L', NULL, '2019-11-06 13:14:28');
INSERT INTO `userLogin_L` VALUES (70, 4, 'editor', 'L', NULL, '2019-11-06 13:15:03');
INSERT INTO `userLogin_L` VALUES (71, 1, 'admin', 'L', NULL, '2019-11-06 13:15:29');
INSERT INTO `userLogin_L` VALUES (72, 1, 'admin', 'L', NULL, '2019-11-06 13:15:51');
INSERT INTO `userLogin_L` VALUES (73, 1, 'admin', 'L', NULL, '2019-11-06 13:24:03');
INSERT INTO `userLogin_L` VALUES (74, 1, 'admin', 'L', NULL, '2019-11-06 13:25:20');
INSERT INTO `userLogin_L` VALUES (75, 1, 'admin', 'L', NULL, '2019-11-06 13:27:07');
INSERT INTO `userLogin_L` VALUES (76, 1, 'admin', 'L', NULL, '2019-11-06 13:27:31');
INSERT INTO `userLogin_L` VALUES (77, 1, 'admin', 'L', NULL, '2019-11-06 13:27:51');
INSERT INTO `userLogin_L` VALUES (78, 1, 'admin', 'L', NULL, '2019-11-06 13:28:23');
INSERT INTO `userLogin_L` VALUES (79, 1, 'admin', 'L', NULL, '2019-11-06 13:28:46');
INSERT INTO `userLogin_L` VALUES (80, 1, 'admin', 'L', NULL, '2019-11-06 13:29:06');
INSERT INTO `userLogin_L` VALUES (81, 9, 'editors', 'L', NULL, '2019-11-06 15:47:51');
INSERT INTO `userLogin_L` VALUES (82, 10, 'my', 'L', NULL, '2019-11-06 16:10:51');
INSERT INTO `userLogin_L` VALUES (83, 1, 'admin', 'L', NULL, '2019-11-06 17:23:41');
INSERT INTO `userLogin_L` VALUES (99, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:03:37');
INSERT INTO `userLogin_L` VALUES (100, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:04:23');
INSERT INTO `userLogin_L` VALUES (101, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:08:09');
INSERT INTO `userLogin_L` VALUES (102, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:09:40');
INSERT INTO `userLogin_L` VALUES (103, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:10:27');
INSERT INTO `userLogin_L` VALUES (104, 29, 'websmallrabbit', 'L', NULL, '2019-11-07 13:29:15');
INSERT INTO `userLogin_L` VALUES (105, 29, 'websmallrabbit', 'L', NULL, '2019-11-08 17:39:51');
INSERT INTO `userLogin_L` VALUES (106, 1, 'admin', 'L', NULL, '2019-11-08 17:40:06');
INSERT INTO `userLogin_L` VALUES (107, 4, 'editor', 'L', NULL, '2019-11-08 17:40:23');
INSERT INTO `userLogin_L` VALUES (108, 9, 'editors', 'L', NULL, '2019-11-08 17:41:15');
INSERT INTO `userLogin_L` VALUES (109, 29, 'websmallrabbit', 'L', NULL, '2019-11-09 20:18:34');
INSERT INTO `userLogin_L` VALUES (110, 1, 'admin', 'L', NULL, '2019-11-09 22:24:18');
INSERT INTO `userLogin_L` VALUES (111, 1, 'admin', 'L', NULL, '2019-11-09 22:28:13');
INSERT INTO `userLogin_L` VALUES (112, 1, 'admin', 'L', NULL, '2019-11-09 22:40:15');
INSERT INTO `userLogin_L` VALUES (113, 1, 'admin', 'L', NULL, '2019-11-09 23:41:16');
INSERT INTO `userLogin_L` VALUES (114, 9, 'editors', 'L', NULL, '2019-11-09 23:49:14');
INSERT INTO `userLogin_L` VALUES (115, 30, 'wupeipei', 'L', NULL, '2019-11-09 23:49:45');
INSERT INTO `userLogin_L` VALUES (116, 31, 'admin111', 'L', NULL, '2019-11-09 23:52:23');
INSERT INTO `userLogin_L` VALUES (117, 32, 'wupeipei1', 'L', NULL, '2019-11-09 23:53:21');
INSERT INTO `userLogin_L` VALUES (118, 29, 'websmallrabbit', 'L', NULL, '2019-11-09 23:53:39');
INSERT INTO `userLogin_L` VALUES (119, 29, 'websmallrabbit', 'L', NULL, '2019-11-10 01:33:44');
INSERT INTO `userLogin_L` VALUES (120, 9, 'editors', 'L', NULL, '2019-11-11 14:52:40');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
