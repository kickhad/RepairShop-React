import React, { Component } from 'react';
import RepairOrderListFilter from 'view/repairOrder/list/RepairOrderListFilter';
import RepairOrderListTable from 'view/repairOrder/list/RepairOrderListTable';
import RepairOrderListToolbar from 'view/repairOrder/list/RepairOrderListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class RepairOrderListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.repairOrder.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.repairOrder.list.title')}
          </PageTitle>

          <RepairOrderListToolbar />
          <RepairOrderListFilter />
          <RepairOrderListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default RepairOrderListPage;
