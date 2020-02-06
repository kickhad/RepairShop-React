import listActions from 'modules/comments/list/commentsListActions';
import CommentsService from 'modules/comments/commentsService';
import Errors from 'modules/shared/error/errors';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import Message from 'view/shared/message';

const prefix =
  'COMMENTS_DESTROY';

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

      await CommentsService.destroyAll([id]);

      dispatch({
        type: actions.DESTROY_SUCCESS,
      });

      Message.success(i18n('entities.comments.destroy.success'));

      getHistory().push('/comments');
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

      await CommentsService.destroyAll(ids);

      dispatch({
        type: actions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
      }

      Message.success(
        i18n('entities.comments.destroyAll.success'),
      );

      getHistory().push('/comments');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default actions;
