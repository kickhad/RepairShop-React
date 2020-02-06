import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CommentsView from 'view/comments/view/CommentsView';
import { i18n } from 'i18n';
import actions from 'modules/comments/view/commentsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/comments/view/commentsViewSelectors';
import CommentsViewToolbar from 'view/comments/view/CommentsViewToolbar';

class CommentsPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.comments.menu'), '/comments'],
            [i18n('entities.comments.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.comments.view.title')}
          </PageTitle>

          <CommentsViewToolbar match={this.props.match} />

          <CommentsView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(CommentsPage);
