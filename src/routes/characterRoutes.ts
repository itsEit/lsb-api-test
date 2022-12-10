import { Router } from 'express';
import { CharacterController } from '../controllers/characterController';

const router = Router();
const characterController = new CharacterController();

router.get('/character/:characterName', characterController.getBasicInfo);
router.get('/characters', characterController.getOnlinecharacters);

export default router;
