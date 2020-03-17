import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: <HomeIcon />,
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: <PersonAddIcon />,
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/customer',
    loader: () => import('view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.customer.menu'),
    menu: true,
  },
  {
    path: '/customer/new',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import('view/customer/importer/CustomerImporterPage'),
    menu: false,
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () => import('view/customer/view/CustomerViewPage'),
    menu: false,
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/device',
    loader: () => import('view/device/list/DeviceListPage'),
    permissionRequired: permissions.deviceRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.device.menu'),
    menu: true,
  },
  {
    path: '/device/new',
    loader: () => import('view/device/form/DeviceFormPage'),
    menu: false,
    permissionRequired: permissions.deviceCreate,
    exact: true,
  },
  {
    path: '/device/importer',
    loader: () =>
      import('view/device/importer/DeviceImporterPage'),
    menu: false,
    permissionRequired: permissions.deviceImport,
    exact: true,
  },
  {
    path: '/device/:id/edit',
    loader: () => import('view/device/form/DeviceFormPage'),
    menu: false,
    permissionRequired: permissions.deviceEdit,
    exact: true,
  },
  {
    path: '/device/:id',
    loader: () => import('view/device/view/DeviceViewPage'),
    menu: false,
    permissionRequired: permissions.deviceRead,
    exact: true,
  },

  {
    path: '/repair-order',
    loader: () => import('view/repairOrder/list/RepairOrderListPage'),
    permissionRequired: permissions.repairOrderRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.repairOrder.menu'),
    menu: true,
  },
  {
    path: '/repair-order/new',
    loader: () => import('view/repairOrder/form/RepairOrderFormPage'),
    menu: false,
    permissionRequired: permissions.repairOrderCreate,
    exact: true,
  },
  {
    path: '/repair-order/importer',
    loader: () =>
      import('view/repairOrder/importer/RepairOrderImporterPage'),
    menu: false,
    permissionRequired: permissions.repairOrderImport,
    exact: true,
  },
  {
    path: '/repair-order/:id/edit',
    loader: () => import('view/repairOrder/form/RepairOrderFormPageSingle'),
    menu: false,
    permissionRequired: permissions.repairOrderEdit,
    exact: true,
  },
  {
    path: '/repair-order/:id',
    loader: () => import('view/repairOrder/view/RepairOrderViewPage'),
    menu: false,
    permissionRequired: permissions.repairOrderRead,
    exact: true,
  },

  {
    path: '/comments',
    loader: () => import('view/comments/list/CommentsListPage'),
    permissionRequired: permissions.commentsRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.comments.menu'),
    menu: true,
  },
  {
    path: '/comments/new',
    loader: () => import('view/comments/form/CommentsFormPage'),
    menu: false,
    permissionRequired: permissions.commentsCreate,
    exact: true,
  },
  {
    path: '/comments/importer',
    loader: () =>
      import('view/comments/importer/CommentsImporterPage'),
    menu: false,
    permissionRequired: permissions.commentsImport,
    exact: true,
  },
  {
    path: '/comments/:id/edit',
    loader: () => import('view/comments/form/CommentsFormPage'),
    menu: false,
    permissionRequired: permissions.commentsEdit,
    exact: true,
  },
  {
    path: '/comments/:id',
    loader: () => import('view/comments/view/CommentsViewPage'),
    menu: false,
    permissionRequired: permissions.commentsRead,
    exact: true,
  },

  {
    path: '/images',
    loader: () => import('view/images/list/ImagesListPage'),
    permissionRequired: permissions.imagesRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.images.menu'),
    menu: true,
  },
  {
    path: '/images/new',
    loader: () => import('view/images/form/ImagesFormPage'),
    menu: false,
    permissionRequired: permissions.imagesCreate,
    exact: true,
  },
  {
    path: '/images/importer',
    loader: () =>
      import('view/images/importer/ImagesImporterPage'),
    menu: false,
    permissionRequired: permissions.imagesImport,
    exact: true,
  },
  {
    path: '/images/:id/edit',
    loader: () => import('view/images/form/ImagesFormPage'),
    menu: false,
    permissionRequired: permissions.imagesEdit,
    exact: true,
  },
  {
    path: '/images/:id',
    loader: () => import('view/images/view/ImagesViewPage'),
    menu: false,
    permissionRequired: permissions.imagesRead,
    exact: true,
  },

  {
    path: '/claims',
    loader: () => import('view/claims/list/ClaimsListPage'),
    permissionRequired: permissions.claimsRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.claims.menu'),
    menu: true,
  },
  {
    path: '/claims/new',
    loader: () => import('view/claims/form/ClaimsFormPage'),
    menu: false,
    permissionRequired: permissions.claimsCreate,
    exact: true,
  },
  {
    path: '/claims/importer',
    loader: () =>
      import('view/claims/importer/ClaimsImporterPage'),
    menu: false,
    permissionRequired: permissions.claimsImport,
    exact: true,
  },
  {
    path: '/claims/:id/edit',
    loader: () => import('view/claims/form/ClaimsFormPage'),
    menu: false,
    permissionRequired: permissions.claimsEdit,
    exact: true,
  },
  {
    path: '/claims/:id',
    loader: () => import('view/claims/view/ClaimsViewPage'),
    menu: false,
    permissionRequired: permissions.claimsRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
