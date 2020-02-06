import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ClaimsView from 'view/claims/view/ClaimsView';
import { i18n } from 'i18n';
import actions from 'modules/claims/view/claimsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/claims/view/claimsViewSelectors';
import ClaimsViewToolbar from 'view/claims/view/ClaimsViewToolbar';

class ClaimsPage extends Component {
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
            [i18n('entities.claims.menu'), '/claims'],
            [i18n('entities.claims.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.claims.view.title')}
          </PageTitle>

          <ClaimsViewToolbar match={this.props.match} />

          <ClaimsView
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

export default connect(select)(ClaimsPage);
