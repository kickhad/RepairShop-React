import React, { Component } from 'react';
import ImagesListFilter from 'view/images/list/ImagesListFilter';
import ImagesListTable from 'view/images/list/ImagesListTable';
import ImagesListToolbar from 'view/images/list/ImagesListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ImagesListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.images.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.images.list.title')}
          </PageTitle>

          <ImagesListToolbar />
          <ImagesListFilter />
          <ImagesListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ImagesListPage;
