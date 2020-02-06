const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      customerImport: {
        id: 'customerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
        ],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },

      deviceImport: {
        id: 'deviceImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceEditor,
        ],
      },
      deviceCreate: {
        id: 'deviceCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceEditor,
        ],
        allowedStorageFolders: ['device'],
      },
      deviceEdit: {
        id: 'deviceEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceEditor,
        ],
        allowedStorageFolders: ['device'],
      },
      deviceDestroy: {
        id: 'deviceDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceEditor,
        ],
        allowedStorageFolders: ['device'],
      },
      deviceRead: {
        id: 'deviceRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deviceEditor,
          roles.deviceViewer,
        ],
      },
      deviceAutocomplete: {
        id: 'deviceAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deviceEditor,
          roles.deviceViewer,
          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },

      repairOrderImport: {
        id: 'repairOrderImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.repairOrderEditor,
        ],
      },
      repairOrderCreate: {
        id: 'repairOrderCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.repairOrderEditor,
        ],
        allowedStorageFolders: ['repairOrder'],
      },
      repairOrderEdit: {
        id: 'repairOrderEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.repairOrderEditor,
        ],
        allowedStorageFolders: ['repairOrder'],
      },
      repairOrderDestroy: {
        id: 'repairOrderDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.repairOrderEditor,
        ],
        allowedStorageFolders: ['repairOrder'],
      },
      repairOrderRead: {
        id: 'repairOrderRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },
      repairOrderAutocomplete: {
        id: 'repairOrderAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.repairOrderEditor,
          roles.repairOrderViewer,

        ],
      },

      commentsImport: {
        id: 'commentsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commentsEditor,
        ],
      },
      commentsCreate: {
        id: 'commentsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commentsEditor,
        ],
        allowedStorageFolders: ['comments'],
      },
      commentsEdit: {
        id: 'commentsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commentsEditor,
        ],
        allowedStorageFolders: ['comments'],
      },
      commentsDestroy: {
        id: 'commentsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commentsEditor,
        ],
        allowedStorageFolders: ['comments'],
      },
      commentsRead: {
        id: 'commentsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.commentsEditor,
          roles.commentsViewer,
        ],
      },
      commentsAutocomplete: {
        id: 'commentsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.commentsEditor,
          roles.commentsViewer,
          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },

      imagesImport: {
        id: 'imagesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.imagesEditor,
        ],
      },
      imagesCreate: {
        id: 'imagesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.imagesEditor,
        ],
        allowedStorageFolders: ['images'],
      },
      imagesEdit: {
        id: 'imagesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.imagesEditor,
        ],
        allowedStorageFolders: ['images'],
      },
      imagesDestroy: {
        id: 'imagesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.imagesEditor,
        ],
        allowedStorageFolders: ['images'],
      },
      imagesRead: {
        id: 'imagesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.imagesEditor,
          roles.imagesViewer,
        ],
      },
      imagesAutocomplete: {
        id: 'imagesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.imagesEditor,
          roles.imagesViewer,
          roles.commentsEditor,
          roles.commentsViewer,
        ],
      },

      claimsImport: {
        id: 'claimsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.claimsEditor,
        ],
      },
      claimsCreate: {
        id: 'claimsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.claimsEditor,
        ],
        allowedStorageFolders: ['claims'],
      },
      claimsEdit: {
        id: 'claimsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.claimsEditor,
        ],
        allowedStorageFolders: ['claims'],
      },
      claimsDestroy: {
        id: 'claimsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.claimsEditor,
        ],
        allowedStorageFolders: ['claims'],
      },
      claimsRead: {
        id: 'claimsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.claimsEditor,
          roles.claimsViewer,
        ],
      },
      claimsAutocomplete: {
        id: 'claimsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.claimsEditor,
          roles.claimsViewer,
          roles.repairOrderEditor,
          roles.repairOrderViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
