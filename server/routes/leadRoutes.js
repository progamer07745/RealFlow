import { Router } from 'express'; import { getLeads,getLead,createLead,updateLead,deleteLead } from '../controllers/leadController.js';
const router=Router(); router.route('/').get(getLeads).post(createLead); router.route('/:id').get(getLead).patch(updateLead).delete(deleteLead); export default router;
