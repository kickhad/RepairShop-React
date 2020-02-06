import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import customer from 'modules/customer/customerReducers';
import device from 'modules/device/deviceReducers';
import repairOrder from 'modules/repairOrder/repairOrderReducers';
import comments from 'modules/comments/commentsReducers';
import images from 'modules/images/imagesReducers';
import claims from 'modules/claims/claimsReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    customer,
    device,
    repairOrder,
    comments,
    images,
    claims,
  });
