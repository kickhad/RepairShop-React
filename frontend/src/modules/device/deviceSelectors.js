import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectPermissionToRead = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.deviceRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.deviceEdit,
    ),
);

const selectPermissionToCreate = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.deviceCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.deviceImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.deviceDestroy,
    ),
);

const selectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
};

export default selectors;
