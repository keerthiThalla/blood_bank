const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/api/v1/create-inventory", authMiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/api/v1/get-inventory", authMiddelware, getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/api/v1/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/api/v1/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/api/v1/get-donars", authMiddelware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/api/v1/get-orgnaisation", authMiddelware, getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
  "/api/v1/get-orgnaisation-for-hospital",
  authMiddelware,
  getOrgnaisationForHospitalController
);

module.exports = router;
