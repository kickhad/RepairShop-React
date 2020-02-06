import React, { Component } from 'react';
import ClaimsListFilter from 'view/claims/list/ClaimsListFilter';
import ClaimsListTable from 'view/claims/list/ClaimsListTable';
import ClaimsListToolbar from 'view/claims/list/ClaimsListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ClaimsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.claims.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.claims.list.title')}
          </PageTitle>

          <ClaimsListToolbar />
          <ClaimsListFilter />
          <ClaimsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ClaimsListPage;
