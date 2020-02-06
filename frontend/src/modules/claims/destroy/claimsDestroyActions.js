import listActions from 'modules/claims/list/claimsListActions';
import ClaimsService from 'modules/claims/claimsService';
import Errors from 'modules/shared/error/errors';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import Message from 'view/shared/message';

const prefix =
  'CLAIMS_DESTROY';

const actions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: actions.DESTROY_STARTED,
      });

      await ClaimsService.destroyAll([id]);

      dispatch({
        type: actions.DESTROY_SUCCESS,
      });

      Message.success(i18n('entities.claims.destroy.success'));

      getHistory().push('/claims');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: actions.DESTROY_ALL_STARTED,
      });

      await ClaimsService.destroyAll(ids);

      dispatch({
        type: actions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
      }

      Message.success(
        i18n('entities.claims.destroyAll.success'),
      );

      getHistory().push('/claims');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default actions;
