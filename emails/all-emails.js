
import { primary } from './primary.js';
import { promotions } from './promotions.js';
import { social } from './social.js';

const allInbox = [...primary, ...social, ...promotions];

module.exports = { primary, social, promotions, allInbox };
