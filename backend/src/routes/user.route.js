import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getRecommnededUsers , getMyFriends , sendFriendRequest , acceptFriendRequest} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute)
router.get("/" , getRecommnededUsers)
router.get("/friends" , getMyFriends)
router.post("/friend-request/:id" , sendFriendRequest)
router.put("/friend-request/:id/accept" , acceptFriendRequest)

export default router