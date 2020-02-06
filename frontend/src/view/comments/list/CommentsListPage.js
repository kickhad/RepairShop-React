import React, { Component } from 'react';
import CommentsListFilter from 'view/comments/list/CommentsListFilter';
import CommentsListTable from 'view/comments/list/CommentsListTable';
import CommentsListToolbar from 'view/comments/list/CommentsListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CommentsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.comments.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.comments.list.title')}
          </PageTitle>

          <CommentsListToolbar />
          <CommentsListFilter />
          <CommentsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CommentsListPage;
