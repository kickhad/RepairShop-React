const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    customer: {
      name: 'Customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'Customer_exportados',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer salvo com sucesso',
      },
      update: {
        success: 'Customer salvo com sucesso',
      },
      destroy: {
        success: 'Customer deletado com sucesso',
      },
      destroyAll: {
        success: 'Customer(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Customer',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'email': 'E-Mail',
        'city': 'City',
        'province': 'Province',
        'country': 'Country',
        'address0': 'Address',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Customer',
      },
      view: {
        title: 'Visualizar Customer',
      },
      importer: {
        title: 'Importar Customers',
        fileName: 'customer_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    device: {
      name: 'Device',
      label: 'Devices',
      menu: 'Devices',
      exporterFileName: 'Device_exportados',
      list: {
        menu: 'Devices',
        title: 'Devices',
      },
      create: {
        success: 'Device salvo com sucesso',
      },
      update: {
        success: 'Device salvo com sucesso',
      },
      destroy: {
        success: 'Device deletado com sucesso',
      },
      destroyAll: {
        success: 'Device(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Device',
      },
      fields: {
        id: 'Id',
        'printerBrand': 'Printer Brand',
        'model': 'Model',
        'serial': 'Serial',
        'orignalOrderNo': 'Original Order #',
        'purchaseDateRange': 'Purchase Date',
        'purchaseDate': 'Purchase Date',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Device',
      },
      view: {
        title: 'Visualizar Device',
      },
      importer: {
        title: 'Importar Devices',
        fileName: 'device_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    repairOrder: {
      name: 'Repair Order',
      label: 'RepairOrders',
      menu: 'RepairOrders',
      exporterFileName: 'Repair Order_exportados',
      list: {
        menu: 'RepairOrders',
        title: 'RepairOrders',
      },
      create: {
        success: 'Repair Order salvo com sucesso',
      },
      update: {
        success: 'Repair Order salvo com sucesso',
      },
      destroy: {
        success: 'Repair Order deletado com sucesso',
      },
      destroyAll: {
        success: 'Repair Order(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Repair Order',
      },
      fields: {
        id: 'Id',
        'customer': 'Customer',
        'products': 'Products',
        'assignedTech': 'Assigned Tech',
        'delivered': 'Delivered',
        'attachments': 'Attachments',
        'comments': 'Comments',
        'warrantyClaim': 'Warranty Claim',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Repair Order',
      },
      view: {
        title: 'Visualizar Repair Order',
      },
      importer: {
        title: 'Importar RepairOrders',
        fileName: 'repairOrder_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    comments: {
      name: 'Comments',
      label: 'Comments',
      menu: 'Comments',
      exporterFileName: 'Comments_exportados',
      list: {
        menu: 'Comments',
        title: 'Comments',
      },
      create: {
        success: 'Comments salvo com sucesso',
      },
      update: {
        success: 'Comments salvo com sucesso',
      },
      destroy: {
        success: 'Comments deletado com sucesso',
      },
      destroyAll: {
        success: 'Comments(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Comments',
      },
      fields: {
        id: 'Id',
        'comment': 'Comment',
        'images': 'Images',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Comments',
      },
      view: {
        title: 'Visualizar Comments',
      },
      importer: {
        title: 'Importar Comments',
        fileName: 'comments_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    images: {
      name: 'Images',
      label: 'Images',
      menu: 'Images',
      exporterFileName: 'Images_exportados',
      list: {
        menu: 'Images',
        title: 'Images',
      },
      create: {
        success: 'Images salvo com sucesso',
      },
      update: {
        success: 'Images salvo com sucesso',
      },
      destroy: {
        success: 'Images deletado com sucesso',
      },
      destroyAll: {
        success: 'Images(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Images',
      },
      fields: {
        id: 'Id',
        'image': 'Image',
        'thumbnail': 'Thumbnail',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Images',
      },
      view: {
        title: 'Visualizar Images',
      },
      importer: {
        title: 'Importar Images',
        fileName: 'images_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    claims: {
      name: 'Claims',
      label: 'Claims',
      menu: 'Claims',
      exporterFileName: 'Claims_exportados',
      list: {
        menu: 'Claims',
        title: 'Claims',
      },
      create: {
        success: 'Claims salvo com sucesso',
      },
      update: {
        success: 'Claims salvo com sucesso',
      },
      destroy: {
        success: 'Claims deletado com sucesso',
      },
      destroyAll: {
        success: 'Claims(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Claims',
      },
      fields: {
        id: 'Id',
        'manufacturer': 'Manufacturer',
        'status': 'Status',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'status': {
          'Open': 'Open',
          'Submitted': 'Submitted',
          'Denied': 'Denied',
          'Resolved': 'Resolved',
        },
      },
      new: {
        title: 'Novo Claims',
      },
      view: {
        title: 'Visualizar Claims',
      },
      importer: {
        title: 'Importar Claims',
        fileName: 'claims_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    customerEditor: {
      label: 'Editor de Customers',
      description: 'Acesso de edição aos Customers',
    },
    customerViewer: {
      label: 'Visualizador de Customers',
      description: 'Acesso de visualização aos Customers',
    },
    deviceEditor: {
      label: 'Editor de Devices',
      description: 'Acesso de edição aos Devices',
    },
    deviceViewer: {
      label: 'Visualizador de Devices',
      description: 'Acesso de visualização aos Devices',
    },
    repairOrderEditor: {
      label: 'Editor de RepairOrders',
      description: 'Acesso de edição aos RepairOrders',
    },
    repairOrderViewer: {
      label: 'Visualizador de RepairOrders',
      description: 'Acesso de visualização aos RepairOrders',
    },
    commentsEditor: {
      label: 'Editor de Comments',
      description: 'Acesso de edição aos Comments',
    },
    commentsViewer: {
      label: 'Visualizador de Comments',
      description: 'Acesso de visualização aos Comments',
    },
    imagesEditor: {
      label: 'Editor de Images',
      description: 'Acesso de edição aos Images',
    },
    imagesViewer: {
      label: 'Visualizador de Images',
      description: 'Acesso de visualização aos Images',
    },
    claimsEditor: {
      label: 'Editor de Claims',
      description: 'Acesso de edição aos Claims',
    },
    claimsViewer: {
      label: 'Visualizador de Claims',
      description: 'Acesso de visualização aos Claims',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
      'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
