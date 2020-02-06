import React, { Component } from 'react';
import DeviceListFilter from 'view/device/list/DeviceListFilter';
import DeviceListTable from 'view/device/list/DeviceListTable';
import DeviceListToolbar from 'view/device/list/DeviceListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DeviceListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.device.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.device.list.title')}
          </PageTitle>

          <DeviceListToolbar />
          <DeviceListFilter />
          <DeviceListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DeviceListPage;
