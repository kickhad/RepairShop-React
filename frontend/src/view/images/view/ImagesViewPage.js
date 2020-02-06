import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ImagesView from 'view/images/view/ImagesView';
import { i18n } from 'i18n';
import actions from 'modules/images/view/imagesViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/images/view/imagesViewSelectors';
import ImagesViewToolbar from 'view/images/view/ImagesViewToolbar';

class ImagesPage extends Component {
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
            [i18n('entities.images.menu'), '/images'],
            [i18n('entities.images.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.images.view.title')}
          </PageTitle>

          <ImagesViewToolbar match={this.props.match} />

          <ImagesView
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

export default connect(select)(ImagesPage);
