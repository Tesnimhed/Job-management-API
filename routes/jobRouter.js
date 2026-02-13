import { Router } from 'express'; 
const router = Router(); 
 
import { 
  getAllJobs, 
  getJob, 
  createJob, 
  updateJob, 
  deleteJob, 
} from '../controllers/jobController.js'; 
 
import { validateJobInput , validateIdParam} from '../middlewares/validationMiddleware.js';

router.get('/', getAllJobs); 
router.post('/', validateJobInput, createJob);
router.get('/:id',validateIdParam, getJob);  
router.patch('/:id', validateIdParam,validateJobInput, updateJob);  
router.delete('/:id',validateIdParam, deleteJob);  
 
//router.route('/').get(getAllJobs).post(createJob); 
//router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob); 
 
export default router; 