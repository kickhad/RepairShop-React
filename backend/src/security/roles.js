/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      customerEditor: 'customerEditor',
      customerViewer: 'customerViewer',
      deviceEditor: 'deviceEditor',
      deviceViewer: 'deviceViewer',
      repairOrderEditor: 'repairOrderEditor',
      repairOrderViewer: 'repairOrderViewer',
      commentsEditor: 'commentsEditor',
      commentsViewer: 'commentsViewer',
      imagesEditor: 'imagesEditor',
      imagesViewer: 'imagesViewer',
      claimsEditor: 'claimsEditor',
      claimsViewer: 'claimsViewer',
    };
  }
}

module.exports = Roles;
