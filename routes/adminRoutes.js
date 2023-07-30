const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/api/v1/donar-list",
  authMiddelware,
  adminMiddleware,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/api/v1/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/api/v1/org-list", authMiddelware, adminMiddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/api/v1/delete-donar/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;
