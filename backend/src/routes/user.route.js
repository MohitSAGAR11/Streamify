import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getRecommnededUsers , getMyFriends , sendFriendRequest} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute)
router.get("/" , getRecommnededUsers)
router.get("/friends" , getMyFriends)
router.post("/friend-request/:id" , sendFriendRequest)

export default router